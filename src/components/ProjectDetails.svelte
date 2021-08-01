<script>
  export let project;
  export let index;
</script>

<div>
  <div class="flex flex-col">
    {#if index == 0}
      <div class="text-center">
        <div class="text-2xl font-bold project-title">
          {project.title}
        </div>
        <p class="mb-5 italic">{project.duration}</p>
      </div>
      <div>{project.description}</div>
      <div class="flex italic" style="color:#434343">
        <div class="techUsed">Technologies Used:</div>
        <div>
          {#each project.technologies as tech, i}
            {tech}{i == project.technologies.length - 1 ? "" : ", "}
          {/each}
        </div>
      </div>
      <hr class="my-5" />
    {:else}
      <div class="mb-5">
        <div class="text-2xl">
          <a href={project.link} target="_blank">{project.title}</a>
        </div>
        <p class="duration">{project.duration}</p>
        <p>{project.description}</p>
        <div class="flex italic" style="color:#434343">
          <div class="techUsed">Technologies Used:</div>
          <div>
            {#each project.technologies as tech, i}
              {tech}{i == project.technologies.length - 1 ? "" : ", "}
            {/each}
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>

<style type="text/scss">
  .project-title {
    color: #778492;
  }
</style>
