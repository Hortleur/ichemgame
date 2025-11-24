script>
	import Animer from '$lib/assets/plaquette/animer.jpg';
	import Bilan from '$lib/assets/plaquette/bilan.jpg';
	import Qualiop from '$lib/assets/certifier-Qualiopi-par-ICPF.240ca96e.svg';
	import Indicateur from '$lib/components/indicateur.svelte';
</script>

<div class="container mx-auto">
	<div class="mt-10">
		<h1 class="text-center text-3xl lg:text-5xl font-bold uppercase">IchemGame</h1>
		<p class="text-center">
			Vivez de votre savoir et créez la meilleure expérience de formation pour vos apprenants
		</p>
	</div>

	<div class="my-5">
		<h2>Nos Formations</h2>
		<div class="flex flex-col flex-nowrap lg:flex-row gap-10 my-5">
			<div
				class="card card-bordered border-2 border-base-200 shadow-xl w-11/12 md:w-7/12 xl:w-1/3 mx-auto pb-3"
			>
				<figure>
					<img src={Animer} alt="illustation animation de formation" />
				</figure>
				<h3 class="card-title my-2 ml-2 uppercase">Animer des Formation</h3>
				<div class="card-actions">
					<a href="/animer-des-formations" class="btn btn-success mx-auto">Voir Plus</a>
				</div>
			</div>
			<div
				class="card card-bordered border-2 border-base-200 shadow-xl w-11/12 md:w-7/12 xl:w-1/3 mx-auto pb-3"
			>
				<figure>
					<img src={Bilan} alt="illustation bilan de compétences" />
				</figure>
				<h3 class="card-title my-2 ml-2 uppercase">Bilan de Compétences</h3>
				<div class="card-actions">
					<a href="/bilan-de-competences" class="btn btn-success mx-auto">Voir Plus</a>
				</div>
			</div>
		</div>
	</div>

	<div class="my-5">
		<h2>Nos Chiffres Clés</h2>
		<Indicateur />
		<span class="text-xs text-accent"
			>Données mises à jour en décembre 2024.Prochaine actualisation prévue au 31/12/2025
			conformément à notre procédure annuelle de suivi qualité.</span
		>
	</div>

	<div class="my-5">
		<h2>Notre Certification</h2>
		<div class="flex flex-col items-center mb-10 mt-5 w-1/2 mx-auto">
			<img src={Qualiop} alt="certification" class="bg-white" />
			<div>
				<p>La certification qualité a été délivrée au titre de la catégorie d'action suivante:</p>
				<ul class="text-red-600">
					<li>ACTIONS DE FORMATION</li>
					<li>BILAN DE FORMATION</li>
				</ul>
			</div>
			<a
				href="https://dropp.server.kevinb.run/$/kBQkA"
				target="_blank"
				download
				class="btn w-full btn-success">Téléchargez notre certification</a
			>
		</div>
	</div>
</div>
