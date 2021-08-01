<script>
  import ExperienceDetails from "./ExperienceDetails.svelte";
  import Card from "../shared/Card.svelte";
  import workex from "../../json/experience.json";
  let headingText = "Experience";
</script>

<Card>
  <div id="experience" class="section-title">Experience</div>
  {#each workex as exp}
    <ExperienceDetails {exp} />
  {/each}
</Card>

<style>
</style>
