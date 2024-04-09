<script lang="ts">
	export let y: number;

	export let tabs = [
		{ name: 'Created Projects ', link: '#projects' },
		{ name: 'About me', link: '#about' },
		{ name: 'Blog', link: 'https://www.youtube.com/watch?v=bh-e700IlmQ' }
		/* { name: 'Contact', link: '' },
		{ name: '', link: '' } */
	];
</script>

<header
	class={'sticky top-0 z-[10] flex items-center justify-between border-b border-solid px-6 duration-200 ' +
		(y > 0 ? ' border-violet-950 bg-slate-950 py-4' : ' border-transparent bg-transparent py-6')}
>
	<a href="/">
		<h1 class="font-medium">
			<b class="poppins font-bold">Mike John</b> <span class="">Eviota</span>
		</h1>
	</a>

	<div class="hidden items-center gap-4 sm:flex">
		{#each tabs as tab, index}
			<a
				href={tab.link}
				class="duration-200 hover:text-red-400"
				target={index === 2 ? '_blank' : ''}
			>
				<p>{tab.name}</p>
			</a>
		{/each}
		<!-- <button
            class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-violet-600 text-white"
        >
            <div
                class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
            />
            <h4 class="relative z-9">Login</h4>
        </button> -->
		<a
			href="mailto:eviotamikejohnb@gmail.com"
			class="blueShadow group relative overflow-hidden rounded-full bg-white px-5 py-2 text-slate-950"
		>
			<div
				class="absolute right-full top-0 z-0 h-full w-full bg-violet-400 opacity-20 duration-200 group-hover:translate-x-full"
			/>
			<h4 class="z-9 relative">Get in touch</h4>
		</a>
	</div>
</header>
