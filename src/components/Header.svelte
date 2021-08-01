<script>
  const goToContact = () =>{
    window.location.hash = '#contact';
  }
</script>

<div
  class="flex justify-center w-screen h-56"
  style="background-color: #f5f5f5;"
>
  <div class="flex mx-auto">
    <img
      class="my-auto ml-10 rounded-full my-photo max-h-44"
      src="./images/my-photo.png"
      alt="Sukhmeet Khalar"
    />
    <div class="flex flex-col my-auto ml-5">
      <h1 class="text-3xl font-bold" style="color: #49515a">Sukhmeet Khalar</h1>
      <div class="text-xl font-semibold" style="color: #778492">
        Software Engineer/ISSO
      </div>
    </div>
  </div>
  <button
  on:click={goToContact}
    class="h-12 px-4 py-2 mx-auto my-auto font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
  >
    Contact Me
  </button>
</div>

<style>

</style>
