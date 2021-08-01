<script>
  import Card from "../shared/Card.svelte";
  import ProjectDetails from "./ProjectDetails.svelte";
  import projects from "../../json/projects.json";
  import SkillDetails from "./SkillDetails.svelte";
</script>

<Card>
  <div class="mb-5 section-title" id="skills">Skills</div>
  <div class="overflow-auto h-80">
    <SkillDetails skillName="Linux/Bash" percent={80} skillLevel="Expert" />
    <SkillDetails skillName="Javascript" percent={65} skillLevel="Advanced" />
    <SkillDetails skillName="TailwindCSS" percent={60} skillLevel="Advanced" />
    <SkillDetails skillName="ReactJs" percent={60} skillLevel="Advanced" />
    <SkillDetails skillName="Svelte-Js" percent={50} skillLevel="Advanced" />
    <SkillDetails skillName="C++" percent={40} skillLevel="Moderate" />
    <SkillDetails skillName="Elixir" percent={20} skillLevel="Beginner" />
    <SkillDetails skillName="Golang" percent={10} skillLevel="Beginner" />
  </div>
</Card>

<style>
</style>
