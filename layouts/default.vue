<template>
  <div>
    <nav-bar />
      <nuxt class="mt-6" />
    <Footer />
  </div>
</template>

<script>
import NavBar from "./NavBar"
import Footer from "./Footer"
export default {
  components: {NavBar, Footer}
}
</script>

