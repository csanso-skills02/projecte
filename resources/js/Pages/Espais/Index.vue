<template>
  <article class="page">
    <h1 class="title">
      <translation value="espais" />
    </h1>

    <div class="filters">
      <select v-model="form.municipi_id">
        <option value=""></option>
        <option
          v-for="municipi in municipis"
          :key="municipi.id"
          :value="municipi.id"
        >
          {{ municipi.nom }}
        </option>
      </select>

      <select v-model="form.tipu_id">
        <option value=""></option>
        <option v-for="tipu in tipus" :key="tipu.id" :value="tipu.id">
          {{ tipu.nom }}
        </option>
      </select>

      <input type="text" v-model="form.search" placeholder="Cercador" />
    </div>

    <div class="espais">
      <article v-for="espai in espais" :key="espai.id">
        <div class="left"></div>

        <div class="right">
          <div class="group">
            <h2 class="title">{{ espai.nom }}</h2>
            <p>
              {{ espai.tipu.nom }} <translation value="en" />
              {{ espai.municipi.nom }}
            </p>
          </div>
          <p>{{ espai.desc }}</p>
          <custom-link
            class="button"
            :href="$route('espais.show', { registre: espai.registre })"
          >
            <translation value="ver" />
          </custom-link>
        </div>
      </article>
    </div>
  </article>
</template>

<script>
import Translation from "../../Shared/Translation.vue";
import CustomLink from "../../Shared/CustomLink.vue";
import Layout from "../../Shared/Layout";
import pickBy from "lodash/pickBy";

export default {
  components: {
    Translation,
    CustomLink,
  },
  props: ["espais", "query", "tipus"],
  layout: Layout,
  data() {
    return {
      form: {
        search: this.query.search,
        municipi_id: this.query.municipi_id,
        tipu_id: this.query.tipu_id,
      },
    };
  },
  computed: {
    municipis() {
      return this.$page.props.municipis;
    },
    lang() {
      return this.$page.props.lang || "";
    },
  },
  watch: {
    form: {
      deep: true,
      handler() {
        this.refreshList();
      },
    },
  },
  methods: {
    refreshList() {
      this.$inertia.get(this.$route("espais.index"), pickBy(this.form), {
        preserveState: true,
      });
    },
  },
  filters: {
    descripcio(item, lang) {
      return item["desc_" + lang];
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

.filters {
  margin-top: 25px;
  width: 100%;
  display: flex;
  justify-content: center;
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
