<script lang="ts">
	import type { CreatedProjects } from '$lib/types';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Button } from '$lib/components/ui/button';
	export let project: CreatedProjects;
</script>

<div
	class="group flex h-[400px] flex-col gap-4 overflow-auto rounded-[10px] border border-solid border-red-700 p-4 text-center duration-200 hover:border-red-400 sm:p-6 md:p-8"
>
	<div class="mx-auto grid place-items-center bg-slate-950 px-4 text-5xl duration-200 md:text-6xl">
		<img src={project.icon} alt={project.icon} />
	</div>

	<h3 class="text-xl font-medium sm:text-2xl md:text-3xl">
		{project.name}
	</h3>
	<slot />
	<div class="justify-betweeen flex flex-1 items-end gap-4">
		<Dialog.Root>
			<Dialog.Trigger class="truncate font-semibold text-red-600">Youtube Demo</Dialog.Trigger>
			<Dialog.Content class=" bg-[#020617]">
				<Dialog.Header>
					<Dialog.Title>{project.name} Functionality Demo</Dialog.Title>
					<Dialog.Description class="py-[20px]">
						{#if project.youtubelink}
							<iframe
								class="h-[415px] w-full"
								src={project.youtubelink}
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerpolicy="strict-origin-when-cross-origin"
								allowfullscreen
							></iframe>
						{:else}
							<div class="">
								<p>Video Comming Soon...</p>
							</div>
						{/if}
					</Dialog.Description>
				</Dialog.Header>
			</Dialog.Content>
		</Dialog.Root>

		<div
			class="relative ml-auto cursor-pointer overflow-hidden duration-200 after:absolute after:right-full after:top-0 after:z-[-1] after:h-full after:w-full after:bg-white after:duration-200 hover:text-slate-950 hover:after:translate-x-full"
		>
			<a href={project.githublink} target="_blank" class="z-4">Go to Github Repo &rarr;</a>
		</div>
	</div>
</div>
