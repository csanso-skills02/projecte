<template>
  <article class="page">
    <h1 class="title">{{ nom }}</h1>
    <p class="municipi">{{ municipi }}</p>
    <p class="desc">{{ desc_cat }}</p>
  </article>
</template>

<script>
import Layout from "../../Shared/Layout";

export default {
  layout: Layout,
  computed: {
    espai() {
      return this.$page.props.item || {};
    },
    nom() {
      return this.$page.props.item.nom || "";
    },
    municipi() {
      return this.$page.props.item?.municipi?.nom || "";
    },
    desc_cat() {
      return this.$page.props.item?.desc_cat || "";
    },
  },
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

.municipi {
  display: block;
  text-align: center;
}

.desc {
  display: block;
  margin-top: 45px;
}
</style>
