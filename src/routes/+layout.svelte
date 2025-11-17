<script>	
	import '../app.css';
	import Header from '../lib/components/header.svelte';
	import Footer from '../lib/components/footer.svelte';
    import {page} from "$app/stores";
    let { children } = $props()


    let currentRoute = $page.url.pathname
</script>

<main class="min-h-screen flex flex-col flex-nowrap justify-between">
    {#if !currentRoute.includes("/plaquette")}
        <Header />
    {/if}
    @render children()
    {#if !currentRoute.includes("/plaquette")}
        <Footer />
    {/if}
</main>
