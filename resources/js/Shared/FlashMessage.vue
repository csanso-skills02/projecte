<template>
  <div class="flash-container" v-if="flashMsg">
    <div class="flash" :class="{ success: success, error: !success }">
      {{ flashMsg }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      success: true,
    };
  },
  mounted() {
    if (this.flash.success) {
      this.success = true;
    } else {
      this.success = false;
    }
  },
  computed: {
    flash() {
      return this.$page.props.flash;
    },
    flashMsg() {
      return this.flash.success || this.flash.error;
    },
    success() {
      if (this.flash.success) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.flash-container {
  margin: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.flash {
  padding: 5px 25px;
  background: orange;
}

.success {
  background: greenyellow;
}

.error {
  background: orange;
}
</style>
