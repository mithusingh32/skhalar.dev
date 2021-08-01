<script>
</script>

<div class="flex justify-center navBar">
  <ul>
    <li><a href="#about">About</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#projects">Projects</a></li>
    <li class="lg:hidden"><a href="#skills">Skills</a></li>
  </ul>
</div>

<style>
  .navBar {
    background-color: #778492;
  }

  li {
    @apply mx-5;
  }

  a {
    text-decoration: none;
    color: inherit;
    border-bottom: none;
    padding: 5px 0;
  }

  a:hover {
    color: #f1faee;
  }

  ul {
    font-size: 14px;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0;
    padding: 0;
  }

  a {
    position: relative;
  }

  a:hover {
    background: transparent;
  }

  a::after {
    content: "";
    width: 100%;
    height: 0;
    display: block;
    position: absolute;
    bottom: 3px;
    left: 0;
    background: rgba(126, 198, 207, 0.5);
  }

  a:hover::after {
    height: 2px;
  }

  a:hover {
    font-weight: 300;
  }
</style>
