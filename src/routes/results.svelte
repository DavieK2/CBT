<script context="module">

    export async function load({ fetch })
    {
        
        const getResults = await fetch("/api/getClassesAndTests.json");
        const results = await getResults.json();

        return {
            props: {
                tests: results.tests,
                classes: results.classes,
            }
        }
    }

</script>
    
<script>
    
    export let tests;
    export let classes;
    let resultData = [];
    let params = { student_name: "", student_grade: "", test_id: ""};

   

    $: { 
        fetch("/api/results/" + JSON.stringify(params) + ".json").then(response => response.json()).then(data => resultData = data.data).catch(error => error )
    }

    const deleteResult = (id) => {
        fetch('/api/deleteResult.json', {
            method: 'POST',
            body: JSON.stringify({ id }),
            headers: { 'content-type': 'application/json' },

        }).then(response => response.json()).then(data => resultData = resultData ).catch(e => e) 
    }

    function exportTableToExcel(tableID, filename = ''){

        var downloadLink;
        var dataType = 'application/vnd.ms-excel';
        var tableSelect = document.getElementById(tableID);
        var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
        
        // Specify file name
        filename = filename ? filename + '.xls' : 'excel_data.xls';
        
        // Create download link element
        downloadLink = document.createElement("a");
        
        document.body.appendChild(downloadLink);
        
        if(navigator.msSaveOrOpenBlob){

            var blob = new Blob(['\ufeff', tableHTML], {
                type: dataType
            });

            navigator.msSaveOrOpenBlob( blob, filename);

        }else{
            // Create a link to the file
            downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
        
            // Setting the file name
            downloadLink.download = filename;
            
            //triggering the function
            downloadLink.click();
        }

    }
</script>


<div class="flex flex-col px-10 min-h-screen py-10 bg-gray-200">
    <div class="flex items-center space-x-6 mb-10">
        <h4 class="font-bold text-4xl text-gray-700 cursor-pointer">Test Results</h4>
    </div>
    <div class="flex flex-col justify-between bg-white rounded-xl h-full w-auto mt-5 py-5 overflow-x-hidden overflow-scroll scrollbar relative shadow-2xl">
        <div class="">
            <div class="flex flex-row px-4">
                <div class="flex flex-row w-full">
            
                    <select bind:value={ params.student_grade } class="w-full mr-3 rounded-xl border focus:border-transparent focus:outline-none focus:ring-2 focus:ring-black bg-white py-3 px-2 border-gray-600 text-sm text-gray-800 placeholder-gray-700">
                        <option value="">Select Class</option>
                        { #if classes.length > 0 }
                            { #each classes as grade (grade.id)}
                                <option value="{ grade.class_name }">{ grade.class_name }</option>
                            { /each }
                        { /if }
                    </select>
                    
                    <select bind:value={ params.test_id } class="w-full mr-3 rounded-xl border focus:border-transparent focus:outline-none focus:ring-2 focus:ring-black bg-white py-3 px-2 border-gray-600 text-sm text-gray-800 placeholder-gray-700">
                        <option value="">Select Test</option>
                        { #if tests.length > 0 }
                            { #each tests as test (test.id)}
                                <option value="{ test.id }">{ test.title }</option>
                            { /each }
                        { /if }
                    </select>
                    
                    <input bind:value={ params.student_name } type="text" class="w-full mr-3 rounded-xl border focus:border-none focus:outline-none focus:ring-2 focus:ring-black bg-white py-3 px-2 border-gray-600 text-sm text-gray-800 placeholder-gray-700"  placeholder="Student Name">
                    <button on:click={ () =>  exportTableToExcel('tblData', params.student_grade) } class="p-2 bg-green-500 text-white text-xs font-bold hover:bg-green-600 rounded-full w-96">Export Result</button>
                </div>
            </div>
            <table id="tblData" class="table-fixed mt-5 min-w-full">
                <thead class="bg-gray-600">
                    <tr class="text-left text-xs text-white px-4 uppercase">
                        <th class="pl-4 py-2">S/No</th>
                        <th class="py-2">Student Name</th>
                        <th class="py-2">Grade</th>
                        <th class="py-2">Test</th>
                        <th class="py-2">Score</th>
                        <th class="py-2">Test Taken</th>
                        <th class="py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    { #if resultData.length > 0 }

                        { #each resultData as result, index (result.id) }
                            <tr class="border-gray-300 border-b text-sm text-gray-800">
                                <td class="text-center" width="5%">{ index +1 }</td>
                                <td class="capitalize">{ result.student_name }</td>
                                <td>{ result.student_grade }</td>
                                <td>{ result.title }</td>
                                <td>{ result.score }</td>
                                <td>{ result.created_at }</td>
                                <td><button on:click={ () => deleteResult(result.id) }  class="bg-red-600 text-white py-2 px-4 text-xs rounded-full">Delete</button></td>
                            </tr>
                        {/each}

                    { :else }

                            <tr></tr>
                    {/if}
                    
                </tbody>
            </table>
        </div>
    
        <div class="flex flex-col space-y-3 justify-center items-center mt-5 px-4 text-xs">
            <div class="text-xl font-bold text-gray-600">
                Total Students: { resultData.length }
            </div>
        </div>
    </div>
</div>
