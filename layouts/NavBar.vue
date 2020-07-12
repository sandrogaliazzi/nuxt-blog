<template>
  <nav
    class="navbar is-transparent is-fixed-top shadow"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </nuxt-link>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar-menu-toggle"
        :class="{ 'is-active': isOpen }"
        @click="isOpen = !isOpen"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbar-menu-toggle"
      class="navbar-menu"
      :class="{ 'is-active': isOpen }"
    >
      <div class="navbar-start" style="flex-grow:1">
        <div class="navbar-item navbar-item-expanded is-flex">
          <b-autocomplete
            :data="data"
            @typing="getPostResults"
            @select="post => $router.push(`blog/${post.uid}`)"
            placeholder="Encontre algo interessante!"
            icon="search"
            icon-clickable
            rounded
            :loading="isLoading"
            style="width:70%"
          >
            <template slot-scope="props">
              <div class="content">
                <p class="title">
                  {{ $prismic.asText(props.option.data.title) }}
                </p>
                <p class="subtitle">{{ props.option.data.description }}</p>
                <hr>
              </div>
            </template>
            <template #empty>
              <p>
                <strong>Desculpe, nenhum resultado encontrado</strong>
              </p>
            </template>
          </b-autocomplete>
        </div>
      </div>

      <div class="navbar-end">
        <nuxt-link
          class="navbar-item heading is-size-6"
          v-for="link in links"
          :key="link.name"
          :to="{ name: link.routeName, params: link.params }"
        >
          {{ link.linkName }}
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { routeName: "index", params: {}, linkName: "Home" },
        { routeName: "blog-tag-tag", params: { tag: "css" }, linkName: "css" },
        { routeName: "blog-tag-tag", params: { tag: "vue" }, linkName: "Vue" },
        { routeName: "About", params: {}, linkName: "sobre" }
      ],
      data: [],
      isLoading: false,
      isOpen: false
    };
  },

  methods: {
    async getPostResults(searchText) {
      this.isLoading = true;
      try {
        const { results } = await this.$prismic.api.query([
          this.$prismic.predicates.at("document.type", "blog_post"),
          this.$prismic.predicates.fulltext("document", searchText)
        ]);

        if (results.length) this.data = results;
      } catch (e) {
        this.data = [];
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>

<style>

.nav-item {
  transition: all 0.5s ease;
}

.nav-item:hover {
  color: #7956d4 !important;
}

.shadow {
  box-shadow: 0px 10px 17px -8px rgba(0, 0, 0, 0.6);
}

.navbar-item-expanded {
  flex-grow: 1;
  justify-content: center;
}
</style>
