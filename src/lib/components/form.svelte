<script>
	import { fade } from 'svelte/transition';
	import emailjs from '@emailjs/browser';

	let user_email = $state('');
	let user_job = $state('');
	let user_duration = $state('');
	let message = $state('');
	let emailOk = $state(false);
	let loading = $state(false);
	let { user_id, service_id, template_id } = $props();
	let testFormateur = $state(false);
	let testOver = $state(true);
	let questionId = $state(0);
	let reponse = $state('');
	let questions = [
		{
			id: 0,
			quest: 'UNE FORMATION RÉUSSIE, C’EST :',
			reponses: [
				{
					id: 0,
					value: 'Des participants emballés.'
				},
				{
					id: 1,
					value: 'Des prises de conscience, de l’écoute et des échanges entre participants.'
				},
				{
					id: 2,
					value: 'Des entraînements et plans d’actions concrets.'
				},
				{
					id: 3,
					value: 'Un contenu bien structuré et conforme au programme.'
				}
			]
		},
		{
			id: 1,
			quest: 'VOS QUALITÉS EN TANT QUE FORMATEUR / ENSEIGNANT :',
			reponses: [
				{
					id: 0,
					value: 'Empathique, à l’écoute.'
				},
				{
					id: 1,
					value: 'Posé et faisant preuve de recul.'
				},
				{
					id: 2,
					value: 'Enthousiaste, convainquant et joyeux.'
				},
				{
					id: 3,
					value: 'Ferme, autoritaire, avec du leadership.'
				}
			]
		},
		{
			id: 2,
			quest: 'UNE SITUATION DE FORMATION QUI VOUS SEMBLE DIFFICILE À GÉRER :',
			reponses: [
				{
					id: 0,
					value: 'Des questions qui partent dans tous les sens.'
				},
				{
					id: 1,
					value: 'Un conflit entre 2 participants.'
				},
				{
					id: 2,
					value: 'Des participants apathiques.'
				},
				{
					id: 3,
					value: 'Des participants froids et critiques.'
				}
			]
		},
		{
			id: 3,
			quest: "VOUS ETES À L'AISE :",
			reponses: [
				{
					id: 0,
					value: 'A proximité des apprenants, dans le public.'
				},
				{
					id: 1,
					value: 'En vous déplaçant parmi les différents groupes.'
				},
				{
					id: 2,
					value: 'Debout, détaché du groupe pour superviser les échanges.'
				},
				{
					id: 3,
					value: 'En retrait ou sur une estrade pour maîtriser les échanges.'
				}
			]
		},
		{
			id: 4,
			quest: 'UNE MODALITÉ PÉDAGOGIQUE QUE VOUS APPRÉCIEZ :',
			reponses: [
				{
					id: 0,
					value: 'Mind mapping, jeux.'
				},
				{
					id: 1,
					value: 'Etude de cas, QCM. '
				},
				{
					id: 2,
					value: 'Suivi individualisé.'
				},
				{
					id: 3,
					value: 'Défis.'
				}
			]
		},
		{
			id: 5,
			quest: 'A TITRE PERSONNEL POUR APPRENDRE, VOUS PREFEREZ :',
			reponses: [
				{
					id: 0,
					value: 'Explorer par vous même, en autonomie.'
				},
				{
					id: 1,
					value: 'Comprendre les concepts et théories avant de les mettre en œuvre.'
				},
				{
					id: 2,
					value: 'Suivre les consignes et progresser par étape.'
				},
				{
					id: 3,
					value: 'Echanger et partager du plaisir.'
				}
			]
		},
		{
			id: 6,
			quest: 'Demain, tu donnes une formation . Tu te dis que... :',
			reponses: [
				{
					id: 0,
					value:
						"Tu sais de quoi tu veux parler et tu t'appuieras sur les questions de ton auditoire."
				},
				{
					id: 1,
					value: 'Ton cours est préparé depuis longtemps.'
				},
				{
					id: 2,
					value: 'Pas de problème, tu connais ton métier et tu sauras gérer les imprévus.'
				},
				{
					id: 3,
					value: "Toujours un peu de trac, c'est normal."
				}
			]
		},
		{
			id: 7,
			quest: "Ca y est, c'est l'heure, tu entres dans la salle de formation ...",
			reponses: [
				{
					id: 0,
					value: "Comme un lion dans l'arène."
				},
				{
					id: 1,
					value: 'Comme un agneau dans un pré.'
				},
				{
					id: 2,
					value: 'Comme une souris qui a repéré du fromage.'
				},
				{
					id: 3,
					value: 'En repérant les agitateurs...'
				}
			]
		},
		{
			id: 8,
			quest: "En formation , c'est toi qui commande ! :",
			reponses: [
				{
					id: 0,
					value: 'Bien sûr !'
				},
				{
					id: 1,
					value: "Non, il n'y a pas de chef, nous coopérons."
				},
				{
					id: 2,
					value: 'Ça dépend des moments.'
				}
			]
		},
		{
			id: 9,
			quest: 'Quand un apprenant ne fait visiblement rien... :',
			reponses: [
				{
					id: 0,
					value: "Ça m'énerve !"
				},
				{
					id: 1,
					value: "Je me dis qu'il doit avoir un problème et je vais l'aider"
				},
				{
					id: 2,
					value: 'Je lui secoue les puces.'
				},
				{
					id: 3,
					value: 'Je le laisse tranquille : il a sûrement ses raisons.'
				}
			]
		},
		{
			id: 10,
			quest: 'La formation est fini :',
			reponses: [
				{
					id: 0,
					value: 'Je suis content(e) de moi et de mes apprenants.'
				},
				{
					id: 1,
					value: "Ouf ! Je m'en suis bien sorti(e), mais j'aurais pu..."
				},
				{
					id: 2,
					value: "Déjà ? J'avais encore tant à dire."
				},
				{
					id: 3,
					value: "C'est le moment de se détendre, de respirer tranquillement."
				}
			]
		}
	];
	let responses = [];
	let resps = [];

	const enableTest = () => {
		testFormateur = !testFormateur;

		testOver = !testOver;
	};

	const nextQ = (question, resps) => {
		responses.push({
			question: question,
			response: resps
		});
		questionId++;
	};

	const prevQ = () => {
		questionId--;
	};

	const finalQ = (question, resps) => {
		responses.push({
			question: question,
			reponse: resps
		});
		localStorage.setItem('answers', JSON.stringify(responses));
		enableTest();
	};

	const handleCheck = (event) => {
		reponse = event.currentTarget.value;
	};

	const getQuestion = (id) => {
		let question = '';
		for (const item of questions) {
			if (item.id === id) {
				question = item.quest;
			}
		}

		return question;
	};

	const send = () => {
		loading = true;
		let answers = JSON.parse(localStorage.getItem('answers'));
		let data;
		if (answers) {
			data = {
				service_id,
				template_id,
				user_id,
				template_params: {
					user_email,
					user_duration,
					user_job,
					message,
					question_1: answers[0].question,
					question_2: answers[1].question,
					question_3: answers[2].question,
					question_4: answers[3].question,
					question_5: answers[4].question,
					question_6: answers[5].question,
					question_7: answers[6].question,
					question_8: answers[7].question,
					question_9: answers[8].question,
					question_10: answers[9].question,
					question_11: answers[10].question,
					reponse_1: answers[0].response,
					reponse_2: answers[1].response,
					reponse_3: answers[2].response,
					reponse_4: answers[3].response,
					reponse_5: answers[4].response,
					reponse_6: answers[5].response,
					reponse_7: answers[6].response,
					reponse_8: answers[7].response,
					reponse_9: answers[8].response,
					reponse_10: answers[9].response,
					reponse_11: answers[10].response
				}
			};
		} else {
			data = {
				service_id,
				template_id,
				user_id,
				template_params: {
					user_email,
					user_duration,
					user_job,
					message
				}
			};
		}
		emailjs.init(data.user_id);
		emailjs
			.send(data.service_id, data.template_id, data.template_params)
			.then((res) => {
				emailOk = true;
				loading = false;
				user_duration = '';
				user_email = '';
				user_job = '';
				message = '';
				setTimeout(() => {
					emailOk = false;
					localStorage.removeItem('answers');
				}, 3000);
			})
			.catch((e) => {
				console.log('failed', e);
			});
	};
</script>

<form
	action=""
	class=" flex flex-col flex-nowrap px-3 py-2 gap-3 w-11/12 lg:w-6/12 mx-auto bg-base-300 text-white rounded-md shadow-lg"
>
	<h2 class=" font-semibold text-xl text-white">Demande d'informations sans engagement</h2>
	<div>
		<p>
			Nous vous proposons un petit test formateur facultatif pour une réponse plus personalisée.
		</p>
		<div class="form-control">
			<label class="label cursor-pointer justify-center gap-2">
				{#if testFormateur}
					<span class="label-text text-white">Avec le test</span>
				{:else}
					<span class="label-text text-white">Sans le test</span>
				{/if}

				<input type="checkbox" class="toggle toggle-secondary" onchange={enableTest} />
			</label>
		</div>
	</div>

	{#if !testOver}
		{#each questions as question}
			{#if question.id == questionId}
				<div in:fade out:fade>
					<h3 class=" font-semibold">{question.quest}</h3>
					<div class="flex flex-col flex-nowrap">
						{#each question.reponses as resp}
							<label for="" class=" label cursor-pointer">
								<span>{resp.value}</span>
								<input
									type="radio"
									name="reponses"
									id={resp.id}
									value={resp.value}
									onchange={handleCheck}
									class=" radio radio-secondary checked:radio-success"
								/>
							</label>
						{/each}
					</div>
				</div>
			{/if}
		{/each}
		<div class=" flex flex-row flex-nowrap justify-center gap-3">
			{#if questionId > 0}
				<button onclick={() => prevQ()} class=" btn btn-secondary">Précédente</button>
			{/if}
			{#if questionId < questions.length - 1}
				<button onclick={() => nextQ(getQuestion(questionId), reponse)} class=" btn btn-success"
					>Suivante</button
				>
			{/if}
			{#if questionId == questions.length - 1}
				<button onclick={() => finalQ(getQuestion(questionId), reponse)} class=" btn btn-success"
					>Dernière étape</button
				>
			{/if}
		</div>
	{/if}

	{#if testOver}
		<p class=" text-lg">
			Ichem, directeur pédagogique, vous accompagnera dans vos démarches dans les plus brefs délais.
		</p>
		<div class=" flex flex-col flex-nowrap">
			<label for="email" class=" font-semibold">Email</label>
			<input
				type="email"
				name=""
				id="email"
				class="input h-10 ring-1 ring-white bg-base-300"
				bind:value={user_email}
				required
			/>
		</div>

		<div class=" flex flex-col flex-nowrap">
			<label for="status" class=" font-semibold">Quel est votre status actuel?</label>
			<select
				name=""
				id="status"
				class=" select bg-base-300 border-white"
				bind:value={user_job}
				required
			>
				<option value="Salarié">Salarié</option>
				<option value="Salarié en CSP, PDV/PSE">Salarié en CSP, PDV/PSE</option>
				<option value="demandeur d'emploi">Demandeur d'emploi</option>
				<option value="Chef d'entreprise">Chef d'entreprise</option>
				<option value="Etudiant">Etudiant</option>
				<option value="Retraité">Retraité</option>
			</select>
		</div>

		<div class=" flex flex-col flex-nowrap">
			<label for="time" class=" font-semibold"
				>Depuis combien de temps travaillez vous en France ?</label
			>
			<select
				name=""
				id="time"
				class=" select border-white bg-base-300"
				bind:value={user_duration}
				required
			>
				<option value="Plus de 10 ans">Plus de 10 ans</option>
				<option value="Entre 2 et 10 ans">Entre 2 et 10 ans</option>
				<option value="Moins de 2 ans">Moins de 2 ans</option>
			</select>
		</div>

		<div>
			<label for="text" class=" font-semibold">Parlez nous de vous</label>
			<textarea
				name=""
				id="text"
				cols="30"
				rows="5"
				class=" textarea w-full ring-1 ring-white bg-base-300"
				bind:value={message}
			></textarea>
		</div>
		<button class="btn btn-success text-white font-bold" onclick={() => send()}>
			{#if !loading}
				<span>Je m'informe</span>
			{:else}
				<span class="loading loading-ring loading-md text-white font-bold"></span>
			{/if}
		</button>
	{/if}
	{#if emailOk}
		<p class=" text-center font-bold text-success">Message envoyé</p>
	{/if}

	<span class=" text-center underline text-success">Gratuit et sans engagement</span>
</form>
