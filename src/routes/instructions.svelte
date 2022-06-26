<script>
    import testData from '../stores/test.js'
</script>

{ #if $testData.instructions === "" }

    <div class="min-h-screen justify-center w-full flex flex-col items-center bg-gradient-to-b  from-purple-900 to-indigo-900">
        <div class="flex flex-col items-center">
            <h1 class="text-4xl text-white border-b-2 mb-6 border-white font-bold">Sorry this page is no longer available</h1>
        </div>
    </div>

    {:else }

    <div class="min-h-screen justify-center w-full flex flex-col items-center bg-gradient-to-b  from-purple-900 to-indigo-900">
        <div class="flex flex-col items-center">
            <h1 class="text-4xl text-white border-b-2 mb-6 border-white font-bold">Instructions:</h1>
            <p class="max-w-lg text-white text-lg text-center">
                { $testData.instructions }
            </p>
            <a href="/exam" class="rounded-full bg-white px-8 py-4 mt-16 hover:text-white text-xl hover:bg-red-500 text-miablue">Start Exam</a>
        </div>
    </div>
{/if}
