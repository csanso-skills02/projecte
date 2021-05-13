<template>
  <div class="page">
    <header>
      <div class="left">
        <div class="logo">
          <img :src="require('@/assets/logo.png').default" alt="logo" />
        </div>
        <nav>
          <custom-link :href="$route('home')">
            <translation value="inici" />
          </custom-link>
          <custom-link :href="$route('espais.index')">
            <translation value="espais" />
          </custom-link>
          <custom-link :href="$route('lang.change', { abbr: 'eng' })">
            English
          </custom-link>
          <custom-link :href="$route('lang.change', { abbr: 'cat' })">
            Catala
          </custom-link>
          <custom-link :href="$route('lang.change', { abbr: 'esp' })">
            Espanyol
          </custom-link>
        </nav>
      </div>
      <div class="right">
        <div class="userInfo" v-if="$page.props.user">
          {{ $page.props.user.nom }} {{ $page.props.user.llinatges }}
        </div>
        <custom-link :href="$route('login')" v-if="!$page.props.user">
          <translation value="iniciar-sessio" />
        </custom-link>
        <custom-link :href="$route('logout')" v-else>
          <translation value="tancar-sessio" />
        </custom-link>
      </div>
    </header>
    <flash-message />
    <slot />
  </div>
</template>

<script>
import Translation from "../Shared/Translation.vue";
import CustomLink from "../Shared/CustomLink.vue";
import FlashMessage from "./FlashMessage.vue";

export default {
  components: {
    Translation,
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

header .right {
  display: flex;
  gap: 20px;
}
</style>
