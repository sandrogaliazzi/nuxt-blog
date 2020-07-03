<template>
  <nuxt-link
    tag="div"
    :to="{ name: 'blog-slug', params: { slug: post.uid } }"
    class="box box-transition mb-2"
  >
    <div class="media">
      <div class="media-left is-hidden-mobile">
        <img :src="post.data.hero.mobile.url" alt="#" width="200" />
      </div>
      <div class="media-content">
        <h3 class="title is-size-3">{{ $prismic.asText(post.data.title) }}</h3>
        <p class="subtitle is-size-5 has-text-grey">
          {{ post.data.description.substring(0, 100) + "..." }}
        </p>
        <b-taglist>
          <nuxt-link
            class="tag is-primary"
            v-for="tag in post.tags"
            :key="tag"
            :to="{ name: 'blog-tag-tag', params: { tag } }"
            >{{ tag }}</nuxt-link
          >
        </b-taglist>
        <small
          ><p class="is-italic">
            {{ formatDate(post.first_publication_date) }}
          </p></small
        >
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import ResponsiveImage from "./ResponsiveImage";
export default {
  components: {
    ResponsiveImage
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.box-transition {
  cursor: pointer;
  transition: all 0.6s ease;
}

.box-transition:hover {
  transform: scale(1.02);
}
</style>
