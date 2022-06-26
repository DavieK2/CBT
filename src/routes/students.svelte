<script context="module">

    export async function load({ fetch }){

        const students = await fetch('/api/getStudents.json');
        const data = await students.json();

        return{
            props:{
                students: data.students,
                classes: data.classes
            }
        }
    }
</script>

<script>
    import Class from '../components/addclass.svelte';

    let students = [];
    export let classes;
    let params = { student_name: "", grade: "" };

    let modal = false;

    $: { 
        fetch("/api/students/" + JSON.stringify(params) + ".json").then(response => response.json()).then(data => students = data.students).catch(error => error )
    }

    const refreshClass = (data) => classes = data;
    const showModal = () =>  modal = true;
    const closeModal = () => modal = false;

    const deleteClass = (id) => {
        fetch('/api/deleteclass.json', {
            method: 'POST',
            body: JSON.stringify({id}),
            headers: { 'content-type': 'application/json' },

        }).then(response => response.json()).then(data => classes = data).catch(e => e) 
    }

    const deleteStudent = (id) => {
        fetch('/api/deleteStudent.json', {
            method: 'POST',
            body: JSON.stringify({ id }),
            headers: { 'content-type': 'application/json' },

        }).then(response => response.json()).then(data =>{ students = students }).catch(e => e) 
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
    <div class="flex items-center justify-between mb-10">
        <h4 class="font-bold text-4xl text-gray-700 cursor-pointer">Students</h4>
        <div>
            <button on:click={ showModal } class="px-6 py-3 bg-transparent border-2 border-gray-700 text-gray-700 text-base font-bold rounded-full">Add a Class</button>
        </div>
    </div>

    <div class="flex space-x-10">
        <div class="flex flex-col justify-between bg-white rounded-xl h-full w-auto mt-5 py-5 overflow-x-hidden overflow-scroll scrollbar relative shadow-2xl">
            <div class="">
                <div class="flex flex-row px-4">
                    <div class="flex flex-row w-full">
                
                        <select bind:value={ params.grade } class="w-full mr-3 rounded-xl border focus:border-transparent focus:outline-none focus:ring-2 focus:ring-black bg-white py-3 px-2 border-gray-600 text-sm text-gray-800 placeholder-gray-700">
                            <option value="">Select Class</option>
                            { #if classes.length > 0 }
                                { #each classes as grade (grade.id)}
                                    <option value="{ grade.class_name }">{ grade.class_name }</option>
                                { /each }
                            { /if }
                        </select>
                        
                        <input bind:value={ params.student_name } type="text" class="w-full mr-3 rounded-xl border focus:border-none focus:outline-none focus:ring-2 focus:ring-black bg-white py-3 px-2 border-gray-600 text-sm text-gray-800 placeholder-gray-700"  placeholder="Student Name">
                        
                        <button on:click={ () =>  exportTableToExcel('tblData', params.student_grade) } class="p-2 bg-green-500 text-white text-xs font-bold hover:bg-green-600 rounded-full w-96">Export Student Data</button>
                    </div>
                </div>
                <table id="tblData" class="table-fixed mt-5 min-w-full">
                    <thead class="bg-gray-600">
                        <tr class="text-left text-xs text-white px-4 uppercase">
                            <th class="pl-4 py-2">S/No</th>
                            <th class="py-2">Student Name</th>
                            <th class="py-2">Grade</th>
                            <th class="py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { #if students.length > 0 }
    
                            { #each students as student, index (student.id) }
                                <tr class="border-gray-300 border-b text-sm text-gray-800">
                                    <td class="text-center" width="5%">{ index +1 }</td>
                                    <td class="capitalize">{ student.first_name } { student.surname }</td>
                                    <td>{ student.grade }</td>
                                    <td><button on:click={ () => deleteStudent(student.id) }  class="bg-red-600 text-white py-2 px-4 text-xs rounded-full">Delete</button></td>
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
                    Total Students: { students.length }
                </div>
            </div>
        </div>

        <div>
            <div class="w-64 bg-white rounded-xl shadow-2xl my-5 pb-8 flex-none">
                <table id="tblData" class="table-fixed w-full">
                    <thead class="flex w-64 bg-gray-600 rounded-t-xl" >
                        <tr class="text-left text-xs text-white px-4 uppercase rounded-xl">
                            <th style="overflow: hidden;" class="py-2">Class Name</th>
                            <th class="py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { #if classes.length > 0 }
    
                            { #each classes as grade, index (grade.id) }
                                <tr class="border-gray-300 border-b text-sm text-gray-800">
                                    <td class="capitalize text-center">{ grade.class_name }</td>
                                    <td on:click={() => deleteClass(grade.id) }><button  class="bg-red-600 text-white text-xs py-2 px-4 rounded-full">Delete</button></td>
                                </tr>
                            {/each}
    
                        { :else }
    
                                <tr></tr>
                        {/if}
                        
                    </tbody>
                </table>
                <div class="flex flex-col space-y-3 justify-center items-center mt-5 px-4 text-xs">
                    <div class="text-xl font-bold text-gray-600">
                        Total Classes: { classes.length }
                    </div>
                </div>
            </div>
            
        </div>
    </div>

    
</div>

{ #if modal}
    <Class { classes } on:click={ closeModal } on:addclass={ (e) => {  refreshClass(e.detail) }  } />
{/if}