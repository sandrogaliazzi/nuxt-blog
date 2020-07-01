<template>
  <div>
    <nav-bar />
    <section class="main-content columns">
      <div class="column is-12">
        <nuxt />
      </div>
    </section>
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

