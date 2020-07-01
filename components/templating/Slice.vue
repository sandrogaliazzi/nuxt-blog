<template>
  <div class="slices">
      <div v-for="(slice, i) in slices" :key="i">
          <template v-if="slice.slice_type === 'text'">
              <text-slice :text="slice" />
          </template>
          <template v-if="slice.slice_type === 'image'">
              <responsive-image :image="slice.primary.image" />
          </template>
          <template v-if="slice.slice_type === 'code'">
              <code-slice :code="slice"/>
          </template>
      </div>
  </div>
</template>

<script>
import TextSlice from "./TextSlice"
import ResponsiveImage from "../UI/ResponsiveImage"
import CodeSlice from "./CodeSlice"
export default {
    components: {
        TextSlice,
        ResponsiveImage,
        CodeSlice
    },

    props: {
        slices: Array
    }
}
</script>

<style>

</style>