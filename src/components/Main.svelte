<script lang="ts">
	import { aboutMe, character, experiences } from '$lib';
	import Timeline from './Timeline.svelte';
	import Pagination from './Pagination.svelte';
	import Typewriter from 'svelte-typewriter';
	import { onMount } from 'svelte';

	let randomIndex = 0;

	const generateSuggestions = () => {
		let newIndex = 0;
		do {
			newIndex = Math.round(Math.random() * (character.length - 1));
		} while (newIndex === randomIndex);
		randomIndex = newIndex;
	};

	const runCharacters = () => {
		setInterval(() => generateSuggestions(), 3000);
	};

	onMount(() => runCharacters());
</script>

<main class="flex flex-1 flex-col p-4">
	<section id="introPage" class="grid grid-cols-1 gap-10 py-8 sm:py-14 lg:grid-cols-2">
		<div class="flex flex-col gap-6 text-center md:gap-8 lg:justify-center lg:gap-10 lg:text-left">
			<h2 class="text-4xl font-semibold sm:text-5xl md:text-6xl">
				Hi! I'm <span class="poppins text-red-500">Mike John</span> a
				<br />Full Stack
				<span class="poppins text-red-500">Developer</span>
				<br />
				<div class="flex items-center justify-center gap-[20px] lg:justify-start">
					<span>a</span>
					<Typewriter
						interval={100}
						keepCursorOnFinish={true}
						style="--cursor-color: var(--cursor-color);"
					>
						<span class="poppins text-purple-600">{character[randomIndex]}</span>
					</Typewriter>
				</div>
			</h2>
			<p class="text-base sm:text-lg md:text-xl">
				Focus in <span class="font-semibold text-red-500">SvelteKit</span>,
				<span class="font-semibold text-red-500">TailwindCSS</span>,
				<span class="font-semibold text-red-500">Supabase</span> and
				<span class="font-semibold text-red-500">Firebase9</span>. With experience in using
				<span class="font-semibold text-red-500">ReactJS</span>,
				<span class="font-semibold text-red-500">DrizzleORM</span>,
				<span class="font-semibold text-red-500">MySQL</span>,
				<span class="font-semibold text-red-500">C#</span>,
				<span class="font-semibold text-red-500">JAVA</span>,
				<span class="font-semibold text-red-500">TypeScript</span> and
				<span class="font-semibold text-red-500">Golang</span>
			</p>
			<button
				class="blueShadow poppins group relative mx-auto overflow-hidden rounded-full bg-white px-6 py-3 text-base text-slate-950 sm:text-lg md:text-xl lg:ml-0 lg:mr-auto"
			>
				<div
					class="absolute right-full top-0 z-0 h-full w-full bg-red-800 opacity-20 duration-200 group-hover:translate-x-full"
				/>
				<a href="mailto:eviotamikejohnb@gmail.com" class="z-9 relative">Get in touch &rarr;</a>
			</button>
		</div>
		<div class="relative grid place-items-center shadow-2xl">
			<img src={'images/itsme.svg'} alt="mikephoto" class="z-[2] max-h-[70vh] object-cover" />
		</div>
	</section>

	<section class="flex flex-col gap-24 py-20 lg:py-32" id="projects">
		<div class="flex flex-col gap-2 text-center">
			<h6 class="text-large sm:text-xl md:text-2xl">A few of my creative endeavors.</h6>
			<h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
				Curious to <span class="poppins text-red-500">see</span> my work?
			</h3>
		</div>
		<div class="mx-auto flex flex-col gap-[60px] md:flex-row md:gap-[30px]">
			<div class="">
				<a
					href="https://www.youtube.com/@mikeSharesCode"
					target="_blank"
					class="mx-auto -mb-4 -mt-10 flex max-w-fit items-center gap-2 rounded-[10px] border border-solid border-white px-4 py-2 duration-200 hover:border-red-700 sm:-mb-0"
				>
					<i class="fa-regular fa-circle-play" />
					<p>Watch my youtube videos</p>
				</a>
			</div>

			<div class="">
				<a
					href="https://www.facebook.com/mike.eviota/videos"
					target="_blank"
					class="mx-auto -mb-4 -mt-10 flex max-w-fit items-center gap-2 rounded-[10px] border border-solid border-white px-4 py-2 duration-200 hover:border-red-700 sm:-mb-0"
				>
					<i class="fa-regular fa-circle-play" />
					<p>Watch my facebook live streams</p>
				</a>
			</div>
		</div>

		<Pagination />
	</section>
	<section
		id="about"
		class="relative flex flex-col gap-16 py-20 pt-10 sm:gap-20 md:gap-24 lg:py-32 lg:pt-16"
	>
		<div
			class="relative flex flex-col gap-2 py-4 text-center before:absolute before:left-0 before:top-0 before:h-1.5 before:w-2/3 before:bg-red-700 after:absolute after:bottom-0 after:right-0 after:h-1.5 after:w-2/3 after:bg-red-700"
		>
			<h6 class="text-large sm:text-xl md:text-2xl">Want to know more?</h6>
			<h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
				A bit <span class="poppins text-red-400">about</span> me.
			</h3>
		</div>
		<p class="poppins mx-auto text-lg font-semibold sm:text-xl md:text-2xl">I am . . .</p>
		<div class="mx-auto flex w-full max-w-[800px] flex-col gap-20">
			{#each aboutMe as me, index}
				<div class="flex gap-6 sm:gap-8">
					<img src={'icons/check_icon.svg'} alt="checkIcon" class="h-[50px] w-[50px]" />
					<div class="flex flex-col gap-6 sm:gap-8">
						<h3 class="text-2xl sm:text-3xl md:text-5xl">
							{me.name}
						</h3>
						<p>{me.description}</p>
					</div>
				</div>
			{/each}
		</div>
		<h5 class={' poppins text-center text-2xl font-semibold sm:text-3xl '}>
			The <span class="text-red-400">Complete</span> Package
		</h5>
		<div class="mx-auto flex w-full max-w-[800px] flex-col gap-10 overflow-x-scroll">
			<table class="rounded bg-white text-center text-slate-700">
				<thead class={'border-b border-solid border-slate-200  '}>
					<tr class="">
						<th />
						<th class="whitespace-nowrap p-2 px-4">Candidate #1</th>
						<th class="whitespace-nowrap p-2 px-4">Candidate #2</th>
						<th class="whitespace-nowrap p-2 px-4">Candidate #3</th>
						<th class="whitespace-nowrap bg-red-700 p-4 px-8 text-white">Me</th>
					</tr>
				</thead>
				<tbody>
					<tr class="border-b border-solid border-slate-200">
						<td class="border-r border-solid border-white py-4 pl-4 pr-8 text-sm font-semibold"
							>Dedication</td
						>
						<td><i class="fa-solid fa-xmark text-slate-500" /></td>
						<td><i class="fa-solid fa-check text-slate-500" /></td>
						<td><i class="fa-solid fa-xmark text-slate-500" /></td>
						<td><i class="fa-solid fa-check text-green-500" /></td>
					</tr>
					<tr class="border-b border-solid border-slate-200">
						<td class="border-r border-solid border-white py-4 pl-4 pr-8 text-sm font-semibold"
							>Critical Thought</td
						>
						<td><i class="fa-solid fa-xmark text-slate-500" /></td>
						<td><i class="fa-solid fa-check text-slate-500" /></td>
						<td><i class="fa-solid fa-check text-slate-500" /></td>
						<td><i class="fa-solid fa-check text-green-500" /></td>
					</tr>
					<tr>
						<td class="border-r border-solid border-white py-4 pl-4 pr-8 text-sm font-semibold"
							>Interpersonal Skills</td
						>
						<td><i class="fa-solid fa-check text-slate-500" /></td>
						<td><i class="fa-solid fa-check text-slate-500" /></td>
						<td><i class="fa-solid fa-xmark text-slate-500" /></td>
						<td><i class="fa-solid fa-check text-green-500" /></td>
					</tr>
					<tr class="border-t border-solid border-slate-200">
						<td class="border-r border-solid border-white py-4 pl-4 pr-8 text-sm font-semibold"
							>Progamming Ability</td
						>
						<td><i class="fa-solid fa-check text-slate-500" /></td>
						<td><i class="fa-solid fa-xmark text-slate-500" /></td>
						<td><i class="fa-solid fa-check text-slate-500" /></td>
						<td><i class="fa-solid fa-check text-green-500" /></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="mx-auto -mt-12 italic opacity-50 sm:hidden">
			<p>Scroll to see more &rarr;</p>
		</div>

		<div
			class="relative flex flex-col gap-2 py-4 text-center before:absolute before:left-0 before:top-0 before:h-1.5 before:w-2/3 before:bg-red-700 after:absolute after:bottom-0 after:right-0 after:h-1.5 after:w-2/3 after:bg-red-700"
		>
			<h6 class="text-large sm:text-xl md:text-2xl">Want to know more?</h6>
			<h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
				A bit of my <span class="poppins text-red-400">experience</span>.
			</h3>
		</div>

		{#each experiences as experience}
			<Timeline {experience} />
		{/each}

		<p class="mx-auto">So why not invest?</p>
	</section>
</main>

<style>
	:root {
		--cursor-color: purple;
	}
</style>
