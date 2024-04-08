<script lang="ts">
	import type { Experiences } from '$lib/types';

	export let experience: Experiences;
</script>

<div class="mx-auto flex w-full max-w-[800px] flex-col gap-20">
	<div class="sm:gap-8 flex gap-6">
		<img src={'icons/check_icon.svg'} alt="checkIcon" class="h-[50px] w-[50px]" />

		<div class="sm:gap-8 flex flex-col gap-6">
			<h3 class="sm:text-3xl md:text-5xl text-2xl">{experience.title}</h3>
			<p>{experience.date}</p>
			<p>
				{experience.content}
			</p>
		</div>
	</div>
</div>
