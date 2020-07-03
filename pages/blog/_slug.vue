<template>
  <section>
    <article>
      <!-- cabeçalho  -->
      <header>
        <div
          class="hero is-medium hero-img"
          :style="{ backgroundImage: `url(${post.data.hero.url})` }"
        >
          <div class="overlay"></div>

          <div class="hero-body has-text-white">
            <div class="container is-relative">
              <div class="columns is-centered">
                <div class="column is-8">
                  <h1 class="title is-size-1-desktop has-text-white">
                    {{ $prismic.asText(post.data.title) }}
                  </h1>
                  <p class="sub-title is-size-4-desktop">
                    {{ post.data.description }}
                  </p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- meta-data e redes sociais -->
        <div class="columns is-centered mt-5">
          <div class="column is-8">
            <div class="level">
              <div class="level-left">
                <div class="level-item">
                  <div class="level">
                    <div class="level-left">
                      <div class="level-item">
                        <figure class="image is-64x64 mr-3">
                          <img
                            class="is-rounded"
                            :src="author.profile_picture.url"
                          />
                        </figure>
                      </div>
                    </div>
                    <div class="level-item">
                      <div class="content">
                        <p class="is-marginless">{{ author.name }}</p>
                        <time
                          class="is-italic has-text-grey"
                          :datetime="post.first_publication_date"
                          >{{ formatDate(post.first_publication_date) }}</time
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="level-right">
                <div class="level-item">
                  <div class="is-flex">
                    <icon :icon="['fab', 'facebook-square']" size="2x" />
                    <icon :icon="['fab', 'whatsapp']" size="2x" class="mx-4" />
                    <icon :icon="['fab', 'twitter']" size="2x" />
                  </div>
                </div>
              </div>
            </div>
            <hr class="has-background-grey mt-2" />
          </div>
        </div>
      </header>

      <!-- conteúdo do post -->
      <div class="section">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-10-desktop">
              <div class="content is-medium">
                <Slice :slices="post.data.body" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- posts relacionados -->
      <footer class="section related-posts">
        <h3
          class="title is-size-2 is-size-3-mobile has-text-centered has-text-white"
        >
          Posts Relacionados
          <icon icon="bookmark" />
        </h3>
        <div class="container pt-5">
          <div class="columns is-multiline">
            <div
              v-for="post in relatedPosts"
              :key="post.uid"
              class="column is-6-tablet is-4-desktop"
            >
              <card :post="post" />
            </div>
          </div>
        </div>
      </footer>
    </article>

    <!-- comentários -->
    <section class="section">
      <Disqus />
    </section>
  </section>
</template>

<script>
import Card from "~/components/UI/Card";
import Slice from "~/components/templating/Slice";
export default {
  components: { Card, Slice },

  head() {
    return {
      title: this.$prismic.asText(this.post.data.title),

      meta: [{ name: "description", content: this.post.data.description }]
    };
  },

  async asyncData({ $prismic, params, error }) {
    try {
      const post = await $prismic.api.getByUID("blog_post", params.slug, {
        fetchLinks: ["author.name", "author.bio", "author.profile_picture"]
      });

      const { name, bio, profile_picture } = post.data.author_link.data;

      const author = {
        name,
        bio,
        profile_picture
      };

      const { results } = await $prismic.api.query(
        [
          $prismic.predicates.similar(post.id, 3),
          $prismic.predicates.at("document.type", "blog_post")
        ],
        { fetchLinks: "author.name", pageSize: 3 }
      );

      return { post, author, relatedPosts: results };
    } catch (err) {
      error({ statusCode: 404, message: "Página não encontrada" });
    }
  }
};
</script>
<style>
.hero-img {
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
}

.related-posts {
  background: #8e2de2; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #4a00e0,
    #8e2de2
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #4a00e0,
    #8e2de2
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.overlay {
  background-color: rgba(0, 0, 0, 0.315);
  position: absolute;
  width: 100%;
  height: 100%;
}

.pos-relative {
  position: relative;
}
</style>
