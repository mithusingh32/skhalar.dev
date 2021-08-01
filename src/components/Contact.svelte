<script>
  import Socials from "../shared/Socials.svelte";
  import Card from "../shared/Card.svelte";

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
</script>

<Card>
  <div id="contact">
  <div class="mb-5 section-title" id="projects">Contact</div>
    <p class="text">
      You can get in touch with me by filling the contact form below.
      Alternately, you can email me at <a href="mailto:mithusingh32@gmail.com"
        >mithusingh32@gmail.com</a
      >.
    </p>
    <br>
    <p>You can (and should) follow me on:</p>
    <Socials />
    <p class="cursor-pointer" on:click={topFunction} id="scrollToTop">Back to top ↑</p>
  </div>
</Card>

<style>
</style>
