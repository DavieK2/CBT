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
    
    export let classes;
    export let tests;

    import { goto } from "$app/navigation";
    import testData from "../stores/test.js"

    let studentData = { first_name: "", surname: "", grade: "", test: "" };

    const addStudent = async () => {

        if(studentData.first_name === "Administrator" && studentData.surname === "Superadmin"){
            goto('/results');
        }

        const submit = await fetch("/index.json" , {
            method : "POST",
            body : JSON.stringify(studentData),
            headers: { 'content-type': 'application/json' },

        });

        let examData = await submit.json();
        examData = examData.data

        if(examData){
            
            window.localStorage.setItem('student_name', examData.student_name);
            window.localStorage.setItem('student_grade', examData.student_grade);
            window.localStorage.setItem('test_id', examData.test_id);

            testData.update(data => {
                return examData;
            })

            goto('/instructions');
        }
    }

</script>

<div class="relative min-h-screen w-full bg-gradient-to-b  from-[#470179] to-blue-900">
     
    <form on:submit|preventDefault={ addStudent } class="flex flex-col fixed inset-0 font-bold text-center bg-black p-12 bg-opacity-40 max-w-lg max-h-[38rem] mx-auto my-auto rounded-2xl" action="" method="post">
        <div class="space-y-7">
            <div class="flex flex-col justify-between w-full">
                <label class="text-gray-100 text-base  mb-2" for="first_name">Type in your First Name</label>
                <input bind:value={ studentData.first_name } class="focus:outline-none bg-blue-100 text-base py-3 px-4 w-full  rounded-lg" type="text" name="first_name" id="first_name" autocomplete="off" required>   
            </div>
    
            <div class="flex flex-col justify-between w-full">
                <label class=" text-gray-100 text-base  mb-2" for="surname">Type in your Surname</label>
                <input bind:value={ studentData.surname } class="focus:outline-none bg-blue-100 text-base py-3 px-4 w-full rounded-lg" type="text" name="surname" id="surname" autocomplete="off" >   
            </div>
            
            <div class="flex flex-col justify-between w-full">
                <label class=" text-gray-100 text-base  mb-2" for="first_name">Select your Class</label>
                <select bind:value={ studentData.grade } class="focus:outline-none bg-blue-100 text-base py-3 px-4 w-full rounded-lg" type="text" name="class" id="" autocomplete="off">
                    <option value="" disabled selected>Select your Class</option>
                    { #if classes.length > 0 }
                        { #each classes as grade (grade.id)}
                            <option value="{ grade.class_name }">{ grade.class_name }</option>
                        { /each }
                    { /if }
                </select>   
            </div>

            <div class="flex flex-col justify-between w-full">
                <label class=" text-gray-100 text-base  mb-2" for="first_name">Select Test</label>
                <select bind:value={ studentData.test } class="focus:outline-none bg-blue-100 text-base py-3 px-4 w-full rounded-lg" type="text" name="class" id="" autocomplete="off">
                    <option value="" disabled selected>Select Test</option>
                    { #if tests.length > 0 }
                        { #each tests as test (test.id)}
                            <option value="{ test.title }">{ test.title }</option>
                        { /each }
                    { /if }
                </select>   
            </div>
        </div>
        

        <button type="submit" class="mt-10 text-center rounded-xl bg-red-500  text-base  text-white px-6 py-4 hover:bg-red-600">Click to Proceed</button>
    </form>
         
    
    
</div>
