<template>
  <div>
    <section class="section svg-background-container">
      <search-bar />
      <h2 class="title is-size-1 is-size-3-mobile  has-text-white">
        Destaque
        <icon icon="bolt" />
      </h2>
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
    <section class="section recent-posts has-background-light">
      <h3 class="title is-size-1 is-size-3-mobile">
        Posts Recentes
        <icon icon="meteor" />
      </h3>
      <div class="container is-fluid">
        <div class="columns is-multiline">
          <div class="column is-12" v-for="post in recentPosts" :key="post.slug">
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

  data() {
    return {
      page: 1,
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
.svg-background-container {
  background-attachment: fixed;
  background-image: url("/svg/Rainbow-Vortex.svg");
  background-size: cover;
}

.load-btn-whrapper {
  display: flex;
  justify-content: center;
}
</style>
