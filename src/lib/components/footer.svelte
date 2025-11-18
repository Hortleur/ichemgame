<script>
	import Icon from '@iconify/svelte';
	import CGU from '$lib/assets/conditions/CGU.pdf';
	import CGV from '$lib/assets/conditions/CGV.pdf';
	let year = new Date().getFullYear();
</script>

<footer class="footer items-center p-4 bg-primary text-white">
	<div class="items-center grid-flow-col">
		<p>
			Ichemgame - {year} -
			<cite
				>Vivez de votre savoir et créez la meilleure expérience de formation pour vos apprenants</cite
			>
		</p>
	</div>
	<div class=" flex flex-row flex-nowrap gap-3 justify-center w-full font-semibold">
		<a href={CGU} download="CGU.pdf">CGU</a>
		-
		<a href={CGV} id="cgv" download="CGV.pdf">CGV</a>
	</div>
	<div class=" flex flex-row flex-nowrap w-full justify-center">
		<a href="https://www.facebook.com/profile.php?id=100027975415220">
			<Icon icon="ic:outline-facebook" width="24" />
		</a>
		<a href="https://www.linkedin.com/in/ichem-brahami-100515187">
			<Icon icon="mdi:linkedin" width="24" />
		</a>
		<a href="https://www.instagram.com/ichem_game/">
			<Icon icon="mdi:instagram" width="24" />
		</a>
		<a href="/contact">
			<Icon icon="material-symbols:mail-outline" width="24" />
		</a>
	</div>
</footer>
