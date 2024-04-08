<script lang="ts">
	import type { CreatedProjects } from '$lib/types';

	export let project: CreatedProjects;
</script>

<div
	class="sm:p-6 md:p-8 group flex flex-col gap-4 rounded-[10px] border border-solid border-red-700 p-4 text-center duration-200 hover:border-red-400"
>
	<div class="md:text-6xl mx-auto grid place-items-center bg-slate-950 px-4 text-5xl duration-200">
		<img src={project.icon} alt={project.icon} />
	</div>

	<h3 class="sm:text-2xl md:text-3xl text-xl font-medium">
		{project.name}
	</h3>
	<slot />
	<div class="justify-betweeen flex flex-1 items-end gap-4">
		<div
			class="relative ml-auto cursor-pointer overflow-hidden duration-200 after:absolute after:right-full after:top-0 after:z-[-1] after:h-full after:w-full after:bg-white after:duration-200 hover:text-slate-950 hover:after:translate-x-full"
		>
			<a href={project.githublink} target="_blank" class="z-4">Go to Github Repo &rarr;</a>
		</div>
	</div>
</div>
