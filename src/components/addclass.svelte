<script>
    import { createEventDispatcher } from 'svelte';

    let dispatch = createEventDispatcher();


    let class_name = { class_name: "" };

    const addClass = () =>
    {
        if(class_name.class_name === ""){

        }
        else{
            fetch('/api/addclass.json', {
            method: 'POST',
            body: JSON.stringify(class_name),
            headers: { 'content-type': 'application/json' },
            })
            .then(response => response.json()).then(data => dispatch('addclass', data)).catch(e => e) 
        }
        
    }
</script>

<div class="fixed inset-0 h-screen flex items-center justify-center w-full bg-gray-700 bg-opacity-40">

    <div class="flex flex-col items-center justify-center bg-white w-96 h-80 rounded-2xl py-8">
        <div class="flex flex-col">
            <label for="class" class="text-lg text-center font-semibold text-gray-700">Enter Class Name</label>
            <input bind:value={ class_name.class_name } class="mt-5 w-full focus:outline-none bg-white px-2 py-4 rounded-lg border-2 border-gray-500" type="text" required>
        </div>
        <div class="mt-8">
            <button on:click={ () => addClass() } class="rounded-full px-8 py-3 text-base text-white bg-red-500 hover:bg-red-700">Add Class</button>
        </div>

        <div on:click|self class="text-gray-700 mt-6 text-lg cursor-pointer">Close [x]</div>
    </div>

    
</div>