<template>
  <nuxt-link
    :to="{ name: 'blog-slug', params: { slug: post.uid } }"
    class="card full-height card-transition"
    tag="div"
  >
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="post.data.hero.tablet.url" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content content">
      <h3 class="title is-size-4">
        {{ $prismic.asText(post.data.title) }}
      </h3>
      <b-taglist>
        <nuxt-link class="tag is-primary" v-for="tag in post.tags" :key="tag"
          :to="{name:'blog-tag-tag', params: { tag }}"
        >{{ tag }}</nuxt-link>
      </b-taglist>
      <p class="is-italic has-text-grey">por {{ post.data.author_link.data.name }}</p>
      <small>
        <time class="has-text-grey">
          <icon icon="clock" size="sm" />
          {{ formatDate(post.first_publication_date) }}
        </time>
      </small>
    </div>
  </nuxt-link>
</template>

<script scoped>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.full-height {
  height: 100%;
}

.card-transition {
  cursor:pointer;
  transition: all 0.5s ease;
}

.card-transition:hover {
  transform: translateY(-3%);
}
</style>
