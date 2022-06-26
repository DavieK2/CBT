<script context="module">

    export async function  load({ fetch }){

        const tests = await fetch("/api/getTests.json");
        const data = await tests.json()

        return {
            props: {
                tests: data.tests
            }
        }

    }

</script>

<script>
    export let tests;
</script>

<div class="flex flex-col px-10 min-h-screen py-10 bg-gray-200">
    <div class="flex items-center space-x-6 mb-10">
        <h4 class="font-bold text-4xl text-gray-700 cursor-pointer">Tests</h4>
    </div>
    <div class="flex flex-col justify-between bg-white rounded-xl h-full w-auto mt-5 py-5 overflow-x-hidden overflow-scroll scrollbar relative shadow-2xl">
        <div class="">
            <table id="tblData" class="table-fixed mt-5 min-w-full">
                <thead class="bg-gray-600">
                    <tr class="text-left text-xs text-white px-4 uppercase">
                        <th class="pl-4 py-2">S/No</th>
                        <th class="py-2">Test Title</th>
                        <th class="py-2">Instructions</th>
                    </tr>
                </thead>
                <tbody>
                    { #if tests.length > 0 }

                        { #each tests as test, index (test.id) }
                            <tr class="border-gray-300 border-b text-sm text-gray-800">
                                <td class="text-center border-r border-gray-300">{ index +1 }</td>
                                <td class="capitalize" width="10%">{ test.title }</td>
                                <td width="80%">{ test.instructions }</td>
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
                Total Tests: { tests.length }
            </div>
        </div>
    </div>
</div>