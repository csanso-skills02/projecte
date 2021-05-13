<template>
  <article class="page">
    <div class="inner">
      <h1 class="page-title">{{ nom }}</h1>
      <p class="municipi">{{ municipi }}</p>
      <p class="desc">{{ desc_cat }}</p>
    </div>
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
  display: flex;
  justify-content: center;
}

.inner {
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
}

.page-title {
  display: block;
  width: 100%;
  margin-bottom: 10px;
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
