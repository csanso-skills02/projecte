<template>
  <div class="page">
    <header>
      <div class="left">
        <div class="logo">
          <img :src="require('@/assets/logo.png').default" alt="logo" />
        </div>
        <nav>
          <custom-link :href="$route('home')">Inici</custom-link>
          <custom-link :href="$route('directori')">Directori</custom-link>
        </nav>
      </div>
      <div class="right"></div>
    </header>
    <slot />
  </div>
</template>

<script>
import CustomLink from "../Shared/CustomLink.vue";

export default {
  components: {
    CustomLink,
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
