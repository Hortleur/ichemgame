<script>
    import ichem from '$lib/assets/formateurs/ichem.webp'
    import monique from '$lib/assets/formateurs/monique.webp'
    import manu from '$lib/assets/formateurs/manu.webp'
    import salim from '$lib/assets/formateurs/salim.webp'

    let items = [
        {
            id:0,
            name: "Ichem",
            video:'https://dropp.server.kevinb.run/$/m6cke',
            image: ichem
        },
        {
            id: 1,
            name: 'Monique',
            video: 'https://dropp.server.kevinb.run/$/V7KzZ',
            image: monique
        },
        {
            id:2,
            name: 'Manuel',
            video: 'https://dropp.server.kevinb.run/$/ehe45',
            image: manu
        },
        {
            id:3,
            name: 'Salim',
            video: 'https://dropp.server.kevinb.run/$/7yUyf',
            image: salim
        }
    ]
</script>

<section>
    <div id="formateur" class=" h-20"></div>
    <h2 class=" text-2xl font-bold text-center">Formateurs</h2>

    <div class=" lg:grid lg:place-items-center">
        {#each items as item }
        <div class="card bg-base-100 shadow-xl w-11/12 md:w-7/12 lg:w-2/3 mx-auto my-8">
                <!-- svelte-ignore a11y-media-has-caption -->
                <video src="{item.video}" poster="{item.image}" controls/>
            <div class="card-body">
                <h2 class="card-title">{item.name}</h2>
            </div>
        </div>
    {/each }
    </div>
    
</section>