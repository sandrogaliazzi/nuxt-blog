<template>
  <b-navbar transparent wrapper-class="container" class="shadow" fixed-top type="is-light">
    <template slot="brand">
      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
        <span class="nav-brand">
          <strong>Jovem</strong>
          <span class="has-text-primary">Programador</span>
        </span>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item
        tag="nuxt-link"
        class="nav-item"
        :to="link.path"
        v-for="link in links"
        :key="link.name"
      >
        {{link.name}}
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { path: "/", name: "Home" },
        { path: "/about", name: "About" },
      ]
    };
  }
};
</script>

<style>
.nav-brand {
  font-family: "Fjalla One";
  font-size: 2em;
}

.nav-item {
  font-family: "Montserrat";
  font-weight: 500;
  transition: all .5s ease;
}

.nav-item:hover {
  font-weight: 600;
  color: #7956D4 !important
}

.shadow {
  box-shadow: 0px 10px 17px -8px rgba(0,0,0,0.6);
}

</style>