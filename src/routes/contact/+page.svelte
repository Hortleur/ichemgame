<script>
	import Form from '$lib/components/form.svelte';

	let { data } = $props();
</script>

<div>
	<Form user_id={data.emailKey} service_id={data.serviceId} template_id={data.templateId} />
</div>
