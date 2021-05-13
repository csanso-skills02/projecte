<template>
  <div class="page">
    <div class="inner">
      <h1>Iniciar Sessió</h1>

      <form @submit.prevent="submit">
        <div class="input-group">
          <label for="login-email">Email</label>
          <input type="text" id="login-email" v-model="form.email" />
        </div>
        <div class="input-group">
          <label for="login-contrasenya">Contrasenya</label>
          <input
            type="password"
            id="login-contrasenya"
            v-model="form.contrasenya"
          />
        </div>
        <button type="submit">Iniciar Sessió</button>
      </form>
    </div>
  </div>
</template>

<script>
import Layout from "../../Shared/Layout.vue";

export default {
  layout: Layout,
  data() {
    return {
      form: this.$inertia.form({
        email: "",
        contrasenya: "",
      }),
    };
  },
  mounted() {
    console.log(this.$inertia);
  },
  methods: {
    submit() {
      this.form.post(this.$route("login.intent"));
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
}

.inner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  width: 100%;
  max-width: 550px;
  border-radius: 15px;
  box-shadow: 0 0 0 2px var(--colors-6);
  gap: 15px;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

input {
  display: flex;
  padding: 5px 10px;
}
</style>
