<template>
  <div class="section error">
    <div class="container">
      <div class="columns is-multiline">
        <template v-if="error.statusCode === 404">
          <div class="column is-12 is-flex center">
            <img src="/404.png" width="600" alt="404 página não encontrada" />
            <h1 class="title has-text-centered has-text-grey is-size-1">
              <h1>Página não encontrada</h1>
            </h1>
          </div>
        </template>
        <template v-else>
          <div class="column is-flex center">
            <img width="500" src="/sad.png" alt="ocorreu um erro" />
            <h1 class="title has-text-centered has-text-grey is-size-1">
              Ops! algo de errado aconteceu
            </h1>
            <b-button class="mt-5" @click="reload()"
              >Tente Novamente</b-button
            >
          </div>
        </template>
        <div class="column is-12">
          <p class="subtitle has-text-centered">
            Voltar para navegação <nuxt-link to="/">Aqui</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: Object
  },

  head(){
    return {
      title: "Oops, algo aconteceu errado"
    }
  },

  layout: "errorLayout",

  methods: {
      reload(){
          location.reload()
      }
  }
};
</script>

<style>
.center {
  align-items: center;
  flex-direction: column;
}
</style>
