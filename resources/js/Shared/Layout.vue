<template>
  <div class="page">
    <header>
      <div class="left">
        <div class="logo">
          <img :src="require('@/assets/logo.png').default" alt="logo" />
        </div>
        <nav>
          <custom-link :href="$route('home')">Inici</custom-link>
          <custom-link :href="$route('espais.index')">Espais</custom-link>
        </nav>
      </div>
      <div class="right">
        <div class="userInfo" v-if="$page.props.user">
          {{ $page.props.user.nom }}
        </div>
        <custom-link :href="$route('login')" v-if="!$page.props.user">
          Iniciar Sessió
        </custom-link>
        <custom-link :href="$route('logout')" v-else>
          Tancar Sessió
        </custom-link>
      </div>
    </header>
    <flash-message />
    <slot />
  </div>
</template>

<script>
import CustomLink from "../Shared/CustomLink.vue";
import FlashMessage from "./FlashMessage.vue";

export default {
  components: {
    CustomLink,
    FlashMessage,
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  width: 100%;
  height: 75px;
  border-bottom: 1px solid var(--colors-6);
}

header .left {
  display: flex;
  align-items: center;
  gap: 25px;
  height: 100%;

  & img {
    height: 100%;
    width: 50px;
    object-fit: contain;
  }

  & nav {
    display: flex;
    height: 100%;

    & a {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 25px;

      &:hover {
        background-color: var(--colors-hover);
      }
    }
  }
}
</style>
