<script>
  import Card from "../shared/Card.svelte";
  export let exp;
  let currentColor = "#bae4eb";

  const openLink = (link) => {
    window.open(link);
  };
</script>

<div class="flex flex-col p-4">
  <div class="body">
    <div class="relative flex align-middle">
      <div class="flex flex-col">
        <div
          on:click={() => window.open(exp.link)}
          style="font-size: 1.5em;"
          class="-mb-2 font-bold cursor-pointer text-powder-blue"
        >
          {exp.company}
        </div>
        <div class="text-powder-blue">{exp.location}</div>
        <p class="mb-5 italic">{exp.jobTitle}<br />{exp.duration}</p>
      </div>
      {#if exp.logo !== ""}
        <img
          style="background-color: #dae3e7;"
          class="absolute top-0 right-0 mt-10 max-h-10 logo"
          src={exp.logo}
          alt={exp.company + " logo"}
        />
      {/if}
    </div>
    <p>{exp.description}</p>
    <ul class="mb-5">
      {#each exp.responsibilities as resp}
        <li class="text-sm">{resp}</li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .logo {
    min-height: 1em;
  }
  ul {
    @apply ml-10;
    list-style-type: disc;
  }

  li {
    @apply m-2;
  }

  img {
    -webkit-filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
  }

  .body {
    padding-left: 20px;
  }
</style>
