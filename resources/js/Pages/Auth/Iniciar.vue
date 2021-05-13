<template>
  <div>
    <form @submit.prevent="submit">
      <input type="text" v-model="form.email" />
      <input type="text" v-model="form.contrasenya" />
      <input type="submit" value="sbumit" />
    </form>
  </div>
</template>

<script>
export default {
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
