<script>
	import Presentation from '$lib/components/presentation.svelte';
	import Modules from '$lib/components/modules.svelte';
	import Tarifs from '$lib/components/tarifs.svelte';
	import Formateur from '$lib/components/formateur.svelte';
	import Temoignages from '$lib/components/temoignages.svelte';
	import Partenaires from '$lib/components/partenaires.svelte';
	import Formation from '$lib/components/formation.svelte';
	import Livret from '$lib/components/livret.svelte';
</script>

<div>
	<Livret />
	<h1 class=" text-center font-bold text-4xl mt-4 text-primary">
		ANIMER DES FORMATIONS ET PROMOUVOIR SON ACTIVITÉ
	</h1>
	<Presentation />
	<Formateur />
	<Modules />
	<Formation />
	<Tarifs />
	<Temoignages />
	<Partenaires />
</div>
