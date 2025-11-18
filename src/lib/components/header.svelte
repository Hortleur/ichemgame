<script>
	import logo from '$lib/assets/logo.png';
	let isIphone = $state(false);
</script>

<header class="navbar bg-primary text-white sticky top-0 z-20">
	<div class="navbar-start">
		<div class="dropdown">
			<!-- svelte-ignore a11y_label_has_associated_control -->
			<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<ul
				class="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-300 rounded-box w-52 font-bold uppercase"
			>
				<li>
					<a href="/animer-des-formations">Animer des Formations</a>
				</li>
				<li>
					<a href="/bilan-de-competences" target="_self">Bilan de Compétences</a>
				</li>
			</ul>
		</div>
		<a class=" w-10 md:w-16" href="/" target="_self">
			<img src={logo} alt="Logo Ichem game" class=" object-contain mask mask-circle" />
		</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1 font-bold text-md uppercase">
			<li><a href="/animer-des-formations" target="_self">Animer des Formation</a></li>
			<li>
				<a href="/bilan-de-competences" target="_self">Bilan de Compétences</a>
			</li>
		</ul>
	</div>
	<div class="navbar-end">
		<a
			class="btn btn-accent text-white font-bold"
			href="https://calendly.com/ichemgame/rdv-15min"
			target="_blank">Devenez formateur 4.0</a
		>
	</div>
</header>
