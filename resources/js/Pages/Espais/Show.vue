<template>
  <article class="page">
    <div class="details">
      <div class="left">
        <img :src="imatge" alt="" />
      </div>

      <div class="right">
        <h1 class="page-title">{{ nom }}</h1>
        <p class="info">{{ tipu }} en {{ municipi }}</p>
        <p class="desc">{{ desc }}</p>
      </div>
    </div>

    <div class="comments">
      <article v-for="comentari in comentaris" :key="comentari.id">
        <h3>{{ comentari.usuari.nom }} {{ comentari.usuari.llinatges }}</h3>
        <p>{{ comentari.text }}</p>
      </article>
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
    comentaris() {
      return this.espai.comentaris;
    },
    nom() {
      return this.$page.props.item.nom || "";
    },
    municipi() {
      return this.$page.props.item?.municipi?.nom || "";
    },
    tipu() {
      return this.$page.props.item?.tipu?.nom || "";
    },
    desc() {
      return this.$page.props.item?.desc || "";
    },
    imatge() {
      return this.espai.imatges[0].imatge;
    },
  },
};
</script>

<style lang="scss" scoped>
.details {
  width: 100%;
  padding: 25px;
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-top: 25px;
}

.left {
  width: 500px;
}

.right {
  width: 500px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.page-title {
  display: block;
  width: 100%;
  font-size: "Open Sans";
  font-size: 1.3rem;
  margin-bottom: 10px;
}

.info {
  margin: 2px 0;
  display: block;
}

.desc {
  display: block;
  margin-top: 45px;
}

.comments {
  & article {
    display: flex;
    flex-direction: column;
  }
}
</style>
