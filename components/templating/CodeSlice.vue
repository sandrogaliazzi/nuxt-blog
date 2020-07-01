<template>
  <div class="code-slice">
    <prismic-rich-text :field="code.primary.code"></prismic-rich-text>
  </div>
</template>

<script>
import "highlight.js/styles/dracula.css";
import hljs from "highlight.js/lib/index";

export default {
  props: {
    code: Object
  },

  mounted() {
    document.querySelectorAll("pre").forEach(code => {
      hljs.highlightBlock(code);
    });
  }
};
</script>

<style>

pre {
  border-radius: 8px;
}
</style>
