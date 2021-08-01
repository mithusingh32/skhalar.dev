<script>
  import About from "./components/About.svelte";
  import Projects from "./components/Projects.svelte";
  import Experience from "./components/Experience.svelte";
  import NavBar from "./components/NavBar.svelte";
  import Header from "./components/Header.svelte";
  import ContactInfo from "./components/ContactInfo.svelte";
  import Education from "./components/Education.svelte";
  import Footer from "./components/Footer.svelte";
  import Contact from "./components/Contact.svelte";
  import Skills from './components/Skills.svelte';

  let y;
  let win;

  $: showButton = y > 200;

  const goToTop = () => {
    window.scrollTo(0, 0);
    window.location.hash ="";
  };

</script>

<svelte:window bind:scrollY={y} />
<main class="static flex flex-col w-screen h-full">
  <div
    on:click={goToTop}
    class={`md:w-10 md:text-center h-full fixed top-0 right-0 m-10 cursor-pointer ${
      showButton ? "" : "hidden"
    }`}
  >
    Back to Top
  </div>
  <NavBar />
  <Header />
  <div class="flex justify-center px-10 sm:flex-col ">
    <div class="flex flex-col w-3/6 mx-5 sm:w-5/6 sm:mx-12">
      <div class="self-center">
        <About />
        <div class="lg:hidden">
          <Education />
        </div>
        <Experience />
        <Projects />
      </div>
    </div>
    <div class="w-1/4 sm:w-5/6 sm:mx-12">
      <div class="sm:hidden">
        <ContactInfo />
        <Education />
      </div>
      <Skills />
    </div>
  </div>
  <div class="flex justify-center px-16">
    <Contact />
  </div>
  <Footer />
</main>

<style global type="text/scss">
  @import "./global.scss";

  main {
    font-family: "Overpass Mono", monospace;
    background: #dae3e7;
    font-weight: 100;
  }

  /* Mobile Styling */
  @media only screen and (max-width: 550px) {
    main {
      font-family: "Overpass Mono", monospace;
      background: #dae3e7;
    }
  }
</style>
