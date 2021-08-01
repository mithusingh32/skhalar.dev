<script>
  import Card from '../shared/Card.svelte'
  import ProjectDetails from "./ProjectDetails.svelte";
  import projects from "../../json/projects.json";
</script>

<Card>
  <div class="mb-5 section-title" id="projects">Projects</div>
  {#each projects as project, index}
    <ProjectDetails {project} {index}/>
  {/each}
</Card>

<style>
</style>
