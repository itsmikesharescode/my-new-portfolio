<script lang="ts">
	import * as Pagination from '$lib/components/ui/pagination';
	import { projects } from '$lib';
	import CreatedProjects from './CreatedProjects.svelte';
	import { paginate } from '$lib/helpers';
	import { flip } from 'svelte/animate';
	import { scale } from 'svelte/transition';
</script>

<Pagination.Root count={$projects.length} perPage={6} let:pages let:currentPage>
	<Pagination.Content class="my-[50px]">
		<Pagination.Item>
			<Pagination.PrevButton />
		</Pagination.Item>
		{#each pages as page (page.key)}
			{#if page.type === 'ellipsis'}
				<Pagination.Item>
					<Pagination.Ellipsis />
				</Pagination.Item>
			{:else}
				<Pagination.Item>
					<Pagination.Link {page} isActive={currentPage == page.value}>
						{page.value}
					</Pagination.Link>
				</Pagination.Item>
			{/if}
		{/each}
		<Pagination.Item>
			<Pagination.NextButton />
		</Pagination.Item>
	</Pagination.Content>

	{#if currentPage}
		<div class="grid grid-cols-1 grid-rows-2 gap-[10px] lg:grid-cols-3 lg:gap-[20px]">
			{#each paginate($projects, currentPage) as project, index (project.id)}
				<div class="" animate:flip={{ duration: 200 }} in:scale>
					<CreatedProjects {project}>
						<p title={project.description} class="line-clamp-3">{project.description}</p>

						<div class="">
							<p>
								Created in <span class="text-red-500">SvelteKit</span>,
								<span class="text-red-500">TailwindCSS</span>,
								<span class="text-red-500">Supabase</span>
							</p>
						</div>
					</CreatedProjects>
				</div>
			{/each}
		</div>
	{/if}
</Pagination.Root>
