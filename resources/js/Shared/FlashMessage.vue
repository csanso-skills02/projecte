<template>
  <div class="flash">
    <div v-if="flash.success">{{ flash.success }}</div>
    <div v-if="flash.error">{{ flash.error }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    flash() {
      return this.$page.props.flash;
    },
  },
};
</script>

<style lang="scss" scoped>
.flash {
  display: block;
  text-align: center;
  margin-top: 45px;
  margin-bottom: 25px;
}
</style>
