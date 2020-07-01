<template>
  <footer class="footer has-background-dark">
    <div class="container">
      <div class="columns">
        <div class="column">
          <p class="title has-text-grey-lighter is-size-3-mobile">Inscreva-se na nossa NewsLetter</p>
          <b-field>
            <b-input
              type="email"
              icon="envelope"
              placeholder="seu email aqui..."
            ></b-input>
            <b-button type="is-link">Inscrever-se</b-button>
          </b-field>
        </div>
        <div class="column">
          <p class="title has-text-grey-lighter is-size-3-mobile">Sobre</p>
          <p class="has-text-grey">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sunt
            voluptatibus perferendis porro labore voluptas iusto impedit ab cum
            voluptates.
          </p>
        </div>
        <div class="column">
          <p class="title has-text-grey-lighter is-size-3-mobile">
            Siga-me nas redes sociais
          </p>
          <div class="social-media-whrapper">
            <icon :icon="['fab', 'facebook-square']" size="lg" />
            <icon :icon="['fab', 'whatsapp']" size="lg" class="mx-3" />
            <icon :icon="['fab', 'twitter']" size="lg" />
          </div>
        </div>
      </div>
      <div class="container mt-6">
        <p class="subtitle is-size-4 has-text-centered">
          Copyright 2020
        </p>
      </div>
    </div>
  </footer>
</template>

<style>
.footer {
  margin-top: auto;
}

.social-media-whrapper {
  display:flex;
  justify-content: start;
}
</style>
