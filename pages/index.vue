<template>
  <div>
    <div class="hero is-medium gradient-purple">
      <div class="hero-body has-text-white">
        <div class="container">
          <div class="columns">
            <div class="column is-6-desktop">
              <div class="content has-background-grey-dark py-5 px-5">
                <h1 class="title is-size-1-desktop has-text-white">
                  Post principal com destaque
                </h1>
                <p class="subtitle has-text-white is-size-4-desktop">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ipsam odio, officiis eius repellat sed quaerat culpa
                  perspiciatis reprehenderit blanditiis ea.
                </p>
                <p>
                  Por Sandro Galiazzi
                  {{ formatDate(featuredPosts[0].first_publication_date) }}
                </p>
                <b-button type="is-primary">Ler mais</b-button> 
              </div>
            </div>
            <div class="column">
              <p class="title has-text-white">Encontre o seu assunto <icon icon="bookmark" /></p>
              <div class="box">
                <b-taglist>
                  <b-tag type="is-primary" size="is-large">post</b-tag>
                  <b-tag type="is-primary" size="is-large">demo</b-tag>
                  <b-tag type="is-primary" size="is-large">web</b-tag>
                  <b-tag type="is-primary" size="is-large">javaScript</b-tag>
                  <b-tag type="is-primary" size="is-large">firebase</b-tag>
                  <b-tag type="is-primary" size="is-large">JamStack</b-tag>
                  <b-tag type="is-primary" size="is-large">blog</b-tag>
                  <b-tag type="is-primary" size="is-large">css</b-tag>
                  <b-tag type="is-primary" size="is-large">html</b-tag>
                  <b-tag type="is-primary" size="is-large">Vue</b-tag>
                  <b-tag type="is-primary" size="is-large">frontend</b-tag>
                  <b-tag type="is-primary" size="is-large">design</b-tag>
                  <b-tag type="is-primary" size="is-large">cms</b-tag>
                </b-taglist>
              </div>
              <p class="title has-text-white pt-5">
                <icon icon="search" /> 
                Ou faça uma busca aqui
              </p>
              <search-bar />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- pots destacados -->
    <section class="section gradient-pink">
      <h1 class="title is-size-1 is-size-3-mobile  has-text-white">
        Destaque
        <icon icon="bolt" />
      </h1>
      <div class="container">
        <div class="columns is-multiline">
          <div
            v-for="post in featuredPosts"
            :key="post.slug"
            class="column is-6-tablet is-4-desktop"
          >
            <card :post="post" />
          </div>
        </div>
      </div>
    </section>
    <!-- posts recentes -->
    <section class="section recent-posts">
      <h2 class="title is-size-1 is-size-3-mobile">
        Posts Recentes
        <icon icon="meteor" />
      </h2>
      <div class="container is-fluid">
        <div class="columns is-multiline">
          <div
            class="column is-12"
            v-for="post in recentPosts"
            :key="post.slug"
          >
            <Media :post="post" />
          </div>
        </div>
        <div class="load-btn-whrapper">
          <b-button
            outlined
            type="is-primary"
            icon-left="plus"
            @click="fetchPosts"
            v-if="page < total_pages"
          >
            <strong>POSTS</strong>
          </b-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Card from "~/components/UI/Card";
import Media from "~/components/UI/Media";
import SearchBar from "~/components/UI/SearchBar";

export default {
  name: "HomePage",

  components: {
    Card,
    Media,
    SearchBar
  },

  head() {
    return {
      title: "blog jovemProgramador",
      meta: [
        {
          name: "description",
          content:
            "Jovem Programador é um blog para compartilhar conhecimentos sobre o vasto mundo da programação, sobretudo o mundo do Frontend, trazendo uma série de tutorias e posts que com certeza vão te ajudar a ser tornar um programador melhor"
        }
      ]
    };
  },

  data() {
    return {
      page: 1
    };
  },

  async asyncData({ $prismic, error }) {
    try {
      const featuredPosts = await $prismic.api.query(
        [
          $prismic.predicates.at("document.type", "blog_post"),
          $prismic.predicates.at("my.blog_post.featured_post", true)
        ],
        {
          fetchLinks: ["author.name", "author.profile_picture"],
          pageSize: 3,
          page: 1
        }
      );

      const recentPosts = await $prismic.api.query(
        $prismic.predicates.at("document.type", "blog_post"),
        {
          orderings: "[document.first_publication_date desc]",
          fetchLinks: ["author.name", "author.profile_picture"],
          pageSize: 3,
          page: 1
        }
      );

      return {
        recentPosts: recentPosts.results,
        featuredPosts: featuredPosts.results,
        total_pages: recentPosts.total_pages
      };
    } catch (err) {
      error({
        statusCode: 500,
        message: "houve um erro ao carregar a página, tente novamente"
      });
      console.error("erro ao carregar posts", err);
    }
  },

  methods: {
    async fetchPosts() {
      this.page++;

      const { results } = await this.$prismic.api.query(
        this.$prismic.predicates.at("document.type", "blog_post"),
        {
          orderings: "[document.first_publication_date desc]",
          fetchLinks: ["author.name", "author.profile_picture"],
          pageSize: 3,
          page: this.page
        }
      );

      this.recentPosts = this.recentPosts.concat(results);
    }
  }
};
</script>
<style>
.load-btn-whrapper {
  display: flex;
  justify-content: center;
}
</style>
