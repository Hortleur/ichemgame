<script>
    import bain from '$lib/assets/partners/bain.webp';
    import eg from '$lib/assets/partners/eg.webp';
    import heroes from '$lib/assets/partners/heroes-black-hd.webp';
    import hotel from '$lib/assets/partners/hotel.webp';
    import strasbourg from '$lib/assets/partners/strasbourg.webp';
    import ina from '$lib/assets/partners/ina.webp';
    import simoh from '$lib/assets/partners/simoh.webp';
    import udemy from '$lib/assets/partners/udemy.webp';
    import zebrologie from '$lib/assets/partners/zebrologie.webp';

    let images = [
        {
            img: bain,
            alt: "Partenaire Bains",
            link:'https://www.bainsmunicipauxdestrasbourg.fr/'
        },
        {
            img: eg,
            alt: "Partenaire Eg company",
            link:'https://egcompanyacademy.com/'
        },
        {
            img: heroes,
            alt: "Partenaire Good Bye Confort zone",
            link:'https://goodbyecomfort.zone/'
        },
        {
            img: hotel,
            alt: "Partenaire Hotel",
            link:'https://hotelbeaucour.quotelo.io/'
        },
        {
            img: strasbourg,
            alt: "Partenaire Strasbourg",
            link:'https://www.visitstrasbourg.fr/'
        },
        {
            img: simoh,
            alt: "Partenaire Simoh Chah",
            link:'https://www.simochah.com'
        },
        {
            img: ina,
            alt: "Partenaire David lde françois",
            link:'https://davidlefrancois.com'
        },
        {
            img: udemy,
            alt: "Partenaire udemy",
            link:'https://www.udemy.com/course/vaincre-la-procrastination-et-apprendre-autrement/?kw=Vaincre+la+procrastination&src=sac'
        },
        {
            img: zebrologie,
            alt: "Partenaire Zebrologie",
            link:'https://zebrologieetcie.com/mon-parcours'
        }
    ]

</script>

<section class=" mt-8 bg-white lg:bg-transparent py-8">
    <h2 class=" text-2xl font-bold text-center my-2">Partenaires</h2>
    <div class=" flex flex,-row flex-wrap justify-around items-center mx-auto w-11/12">
        {#each images as image}
            <div class=" w-20">
                <a href=" {image.link}" target="_blank"><img src="{image.img}" alt="{image.alt}" class=" lg:grayscale lg:hover:grayscale-0" loading="lazy"></a>
            </div>
        {/each}     
    </div>
</section>