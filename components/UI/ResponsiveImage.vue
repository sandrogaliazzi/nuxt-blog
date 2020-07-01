<template>
  <div class="columns is-centered">
    <div class="column is-6-desktop is-8-tablet">
      <picture>
        <source media="(max-width:768px)" :srcset="image.mobile.url" />
        <source media="(max-width:1024px)" :srcset="image.tablet.url" />
        <img :src="image.url" :alt="image.alt" />
      </picture>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: Object
  }
};
</script>
