<script>
    import Icon from '@iconify/svelte';
    let tarifs = [
        {
            id: 0,
            price: 2500,
            description: "Full distanciel 42h de formation plus 1h30 de préparation individuelle pour la certification devant le jury et 2h d'accompagnement individuel par semaine.",
            title: "Formule Unique"
        }
    ]

    let dates = [
        {
            id: 0,
            start: "19 Septembre",
            end: "27 Octobre"
        },
        {
            id: 1,
            start: "14 Novembre",
            end: "21 Décembre"
        },
        {
            id: 2,
            start: "16 Janvier",
            end: "22 Février"
        },
        {
            id: 3,
            start: "12 Mars",
            end: "18 Avril"
        },
        {
            id: 4,
            start: "14 Mai",
            end: "13 Juin"
        },
    ]
</script>

<section>
    <div id="tarifs" class=" h-20"></div>
    <h2 class=" text-2xl font-bold text-center">Tarifs</h2>
    <div class=" lg:flex lg:flex-row lg:flex-nowrap lg:justify-around">
        {#each tarifs as tarif}
            <div class=" my-3 border-2 border-base-300 w-11/12 lg:w-5/12 mx-auto py-2 px-3 shadow-lg rounded-md">
                <h3 class=" font-semibold text-center">{tarif.title}</h3>
                <p class=" my-2">{tarif.description}</p>
                <p class=" text-lg font-bold text-accent text-center">{tarif.price}€</p>
                {#if tarif.details}
                    <a href="#cgv"><span class=" italic font-extralight text-sm block text-center">{tarif.details}</span></a>
                {/if}
            </div>
        {/each}
    </div>
    <div class=" my-6 py-2">
        <h2 class=" text-2xl font-bold text-center">Financements</h2>
        <ul class=" px-2 lg:w-3/4 lg:mx-auto flex flex-col gap-3 lg:gap-0 mt-3 lg:flex-row lg:flex-wrap lg:items-center lg:justify-around font-semibold ">
            <li class=" lg:rounded-2xl lg:w-1/2 lg:text-center lg:my-2 lg:hover:underline text-lg">CPF (en partenariat avec EG, centre de formation certifié qualiopi, inscription 15 jours avant l'entrée en formation)</li>
            <li class=" lg:rounded-2xl lg:w-1/2 lg:text-center lg:my-2 lg:hover:underline text-lg">Financement personnel (possibles facilités de paiement sur demande)</li>
            <li class=" lg:rounded-2xl lg:w-1/2 lg:text-center lg:my-2 lg:hover:underline text-lg">OPCO</li>
            <li class=" lg:rounded-2xl lg:w-1/2 lg:text-center lg:my-2 lg:hover:underline text-lg">Pôle Emploi</li>
            <li class=" lg:rounded-2xl lg:w-1/2 lg:text-center lg:my-2 lg:hover:underline text-lg">Aides de la Région</li>
        </ul>
    </div>
    <div class=" my-8">
        <h2 class=" font-semibold text-2xl text-center">Dates <span class=" text-sm font-normal"> (5 sessions/an) </span></h2>
        <div class=" flex flex-col flex-nowrap sm:flex-row sm:flex-wrap sm:justify-around gap-2">
            {#each dates as date}
                <div class=" flex flex-row flex-nowrap justify-center items-center gap-2 border-2 border-base-300 rounded-md w-4/5 sm:w-1/3 mx-auto px-1 py-3">
                    <p class=" flex flex-row flex-nowrap">{date.start}</p> <Icon icon="mdi:arrow-right-bold" /> <p class=" flex flex-row flex-nowrap">{date.end}</p>
                </div>
            {/each}
        </div>
    </div>
    <div class="">
        <a href="https://kepyflpgwlszqgburnth.supabase.co/storage/v1/object/public/plaquette/1-1%20-%20Plaquette%20de%20ventes%202.pdf" download target="_blank" class="btn btn-accent flex w-11/12 md:w-3/5 lg:w-2/5 xl:w-1/3  mx-auto">Téléchargez la plaquette</a>
    </div>
</section>