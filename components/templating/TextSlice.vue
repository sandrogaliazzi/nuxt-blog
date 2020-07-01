<template>
  <div class="my-5">
    <prismic-rich-text :field="text.primary.section_title"></prismic-rich-text>
    <prismic-rich-text :field="text.primary.section_content"></prismic-rich-text>
  </div>
</template>

<script>
export default {
  props: {
    text: Object
  }
};
</script>
