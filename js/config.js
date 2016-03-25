(function() {
  // Full list of configuration options available at:
  // https://github.com/hakimel/reveal.js#configuration
  Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,

    transition: 'slide', // none/fade/slide/convex/concave/zoom

    // Optional reveal.js plugins
    dependencies: [
      { src: '../my-presentation-template/lib/js/classList.js', condition: function() { return !document.body.classList; } },
      { src: '../my-presentation-template/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
      { src: '../my-presentation-template/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
      { src: '../my-presentation-template/plugin/highlight/highlight.js', async: true, condition: function() { return true; }, callback: function() { hljs.initHighlightingOnLoad(); } },
      { src: '../my-presentation-template/plugin/zoom-js/zoom.js', async: true },
      { src: '../my-presentation-template/plugin/notes/notes.js', async: true }
    ]
  });
})();
