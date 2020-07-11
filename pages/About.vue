<template>
  <section id="about" class="hero is-fullheight">
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="image-whrapper">
              <figure class="image">
                <img class="is-rounded" width="400px" src="/eu.jpg" />
              </figure>
            </div>
            <div class="section">
              <div class="content has-text-centered">
                <h1 class="title">Sobre mim</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quidem voluptas illo quos totam, sint earum ab odit
                  voluptatibus voluptatum nisi debitis dicta aliquam dolor
                  magnam in a quae dolore labore. Incidunt doloremque debitis
                  tempore facilis animi fugiat vero repellat quas fugit. Qui
                  dicta quam, vero eius sapiente impedit, at deserunt nobis
                  reiciendis vel veniam esse exercitationem. Minima accusamus
                  aliquid nostrum incidunt sunt. Nisi obcaecati, laborum
                  voluptatum illo eaque itaque expedita libero unde rerum non
                  placeat quia ex atque hic minus possimus iste assumenda
                  voluptas neque ab. Corporis reprehenderit fugiat deleniti
                  asperiores ducimus aspernatur cupiditate, provident
                  consectetur doloremque soluta perspiciatis optio!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "Sobre mim",
      meta: [
        {
          name: "description",
          content:
            "sit amet consectetur adipisicing elit. Quidem voluptas illo quos totam"
        }
      ]
    };
  }
};
</script>

<style>
.image-whrapper {
  display: flex;
  justify-content: center;
}

.image-whrapper img {
  width: 400px;
}
</style>
