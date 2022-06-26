<script>
    import testData from '../stores/test.js'
</script>

{#if $testData.test_path === ""}
    <div class="min-h-screen justify-center w-full flex flex-col items-center bg-gradient-to-b  from-purple-900 to-indigo-900">
        <div class="flex flex-col items-center">
            <h1 class="text-4xl text-white border-b-2 mb-6 border-white font-bold">Sorry this page is no longer available</h1>
        </div>
    </div>

    {:else }

    <div class="flex items-center justify-center relative">
        <iframe height="768" width="1024" title="miacbt" src="{ $testData.test_path }" frameborder="0" target="_parent"  allowfullscreen> </iframe>
    </div>
    
{/if}
