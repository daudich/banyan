<!-- Footer.svelte -->
<footer>
  <div class="column">
    <h4>Pages</h4>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div>

  <div class="column">
    <h4>Links</h4>
    <ul>
      <li><a href="https://github.com/yourusername" target="_blank">GitHub</a></li>
      <li><a href="https://twitter.com/yourusername" target="_blank">Twitter</a></li>
      <li><a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a></li>
      <li><a href="https://yourblog.com" target="_blank">Blog</a></li>

    </ul>
  </div>

  <div class="column info">
    <p>&copy; {new Date().getFullYear()} <a href="https://audich.net/">Dhiren Audich</a>. All rights reserved.</p>
	  <p>Made with <a href="https://github.com/daudich/banyan">Banyan</a> &amp; <a href="https://svelte.dev/docs/kit/introduction">SvelteKit</a>.
  </div>
</footer>
