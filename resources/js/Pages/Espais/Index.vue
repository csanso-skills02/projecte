<template>
  <article class="page">
    <h1 class="title">Espais</h1>

    <div class="espais">
      <article v-for="espai in espais" :key="espai.id">
        <div class="left"></div>

        <div class="right">
          <div class="group">
            <h2 class="title">{{ espai.nom }}</h2>
            <p>{{ espai.municipi.nom }}</p>
          </div>
          <p>{{ espai.desc_cat }}</p>
          <custom-link
            class="button"
            :href="$route('directori.show', { registre: espai.registre })"
          >
            Accedir
          </custom-link>
        </div>
      </article>
    </div>
  </article>
</template>

<script>
import CustomLink from "../../Shared/CustomLink.vue";
import Layout from "../../Shared/Layout";

export default {
  components: { CustomLink },
  props: ["espais"],
  layout: Layout,
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  padding: 25px;
}

.page > .title {
  display: block;
  width: 100%;
  text-align: center;
  font-size: "Open Sans";
  font-size: 1.3rem;
}

.espais {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  & article {
    width: 60%;
    box-shadow: 0 0 0 1px #ccc;
    padding: 25px;
    border-radius: 15px;

    & .right {
      display: flex;
      flex-direction: column;
      gap: 15px;

      & .group {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }

      & .title {
        font-size: 1.2rem;
      }
    }
  }
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 40px;
  border-radius: 5px;
  background-color: var(--colors-6);
  border: 1px solid transparent;

  &:hover {
    background-color: var(--colors-7);
  }

  &:active,
  &:focus {
    border: 1px solid var(--colors-1);
    box-shadow: 0 0 2px 1px var(--colors-3);
  }
}
</style>
