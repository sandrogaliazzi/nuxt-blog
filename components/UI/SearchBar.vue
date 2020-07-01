<template>
  <div class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-10">
          <b-autocomplete
            :data="data"
            @typing="getPostResults"
            @select="post => $router.push(`blog/${post.uid}`)"
            placeholder="Encontre algo interessante!"
            icon="search"
            icon-clickable
            size="is-medium"
            rounded
            :loading="isLoading"
          >
            <template slot-scope="props">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-64x64">
                    <img :src="props.option.data.hero.url" />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="is-size-4 has-text-weight">{{props.option.data.title}}</p>
                  <p>{{props.option.data.description}}</p>
                </div>
              </div>
            </template>
            <template v-if="isEmptyResults" #empty>
              <p>
                <strong>Desculpe, nenhum resultado encontrado</strong>
              </p>
            </template>
          </b-autocomplete>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      isLoading: false,
      isEmptyResults: false
    };
  },

  methods: {
    async getPostResults(searchText) {
      this.isLoading = true
      try {
        const { results } = await this.$prismic.api.query([
          this.$prismic.predicates.at('document.type', 'blog_post'),
          this.$prismic.predicates.fulltext('document', searchText)
        ])
        if (!results.length) {
          this.isEmptyResults = true
        } else {
          this.data = results
          this.isEmptyResults = false
        }
      } catch (e) {
        this.data = []
      } finally {
        this.isLoading = false
      }
    }
  }
};
</script>

<style>
</style>