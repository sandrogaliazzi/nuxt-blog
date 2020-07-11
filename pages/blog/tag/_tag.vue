<template>
  <div>
    <template v-if="posts">
      <div class="section has-background-primary">
        <div class="content">
          <h1
            style="mt-6"
            class="title has-text-centered has-text-white is-size-1"
          >
            #{{ tag }}
          </h1>
          <p class="subtitle is-size-4 has-text-centered has-text-white mt-3">
            <icon icon="bookmark" />
            {{ posts.length }} posts
          </p>
        </div>
      </div>
      <div class="section">
        <div class="columns">
          <div class="column">
            <Media class="mt-4" v-for="post in posts" :key="post.id" :post="post" />
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="section is-empty">
        <div class="hero is-fullheight">
          <div class="container">
            <div class="columns is-multiline is-vcentered">
              <div class="column">
                <div class="content">
                  <h1 class="title has-text-centered has-text-grey is-size-1">
                    Sem resultados para : #<i>{{ tag }}</i> :(
                  </h1>
                </div>
              </div>
              <div class="column">
                <p class="image">
                  <img class="is-rounded" src="/sad.png" alt="emoji triste">
                </p>
              </div>
              <div class="column is-12">
                <div class="level">
                  <div class="level-item">
                    <nuxt-link
                      tag="button"
                      class="button is-primary heading is-medium"
                      to="/"
                    >Home</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Media from "~/components/UI/Media";
export default {
  components: { Media },

  head(){
    return {
      title: `${this.tag}-jovemProgramador`,
      meta: [
        {name: "description", content: `todos os posts sobre ${this.tag}`}
      ]
    }
  },

  async asyncData({ $prismic, params, error }) {
    try {
      const tag = params.tag;

      const { results } = await $prismic.api.query(
        [
          $prismic.predicates.at("document.type", "blog_post"),
          $prismic.predicates.at("document.tags", [tag])
        ], {fetchLinks: "author.name"}
      );

      return {
        posts: results || null,
        tag
      };
    } catch (err) {
      error({ statusCode: 500, message: "Ops, Ocorreu um problema" });
    }
  }
};
</script>
