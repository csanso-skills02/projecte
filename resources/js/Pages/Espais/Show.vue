<template>
  <article class="page">
    <div class="details">
      <div class="left">
        <img :src="imatge" alt="" />
      </div>

      <div class="right">
        <h1 class="page-title">{{ nom }}</h1>
        <p class="info">{{ tipu }} <translation value="en" /> {{ municipi }}</p>
        <p class="desc">{{ desc }}</p>
      </div>
    </div>

    <div class="comments-box">
      <h3><translation value="comentaris" /></h3>

      <div class="comments-list">
        <article v-for="comentari in comentaris" :key="comentari.id">
          <h3>
            {{ comentari.usuari.nom }} {{ comentari.usuari.llinatges }}
            <small>{{ comentari.data }} {{ comentari.hora }}</small>
          </h3>
          <p>{{ comentari.text }}</p>
        </article>
      </div>

      <div class="afegir-comentari" v-if="$page.props.user">
        <h3>Afegir comentari</h3>
        <form @submit.prevent="submit">
          <input type="text" v-model="form.comment" />
          <button type="submit">Afegir</button>
        </form>
      </div>
    </div>
  </article>
</template>

<script>
import Translation from "../../Shared/Translation.vue";
import Layout from "../../Shared/Layout";

export default {
  components: {
    Translation,
  },
  layout: Layout,
  data() {
    return {
      form: {
        comment: "",
      },
    };
  },
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
  methods: {
    submit() {
      this.$inertia.post(this.$route("comentari.afegir"), {
        text: this.form.comment,
        espai_id: this.espai.id,
      });
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

.comments-box {
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;

  & > h3 {
    font-size: 1.5rem;
  }
}

.comments-list {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  & article {
    display: flex;
    flex-direction: column;
  }
}

.afegir-comentari {
  margin-top: 25px;
  margin-bottom: 45px;
}
</style>
