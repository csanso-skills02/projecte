<template>
  <div v-frag>{{ text }}</div>
</template>

<script>
import cat from "./translations/cat.json";
import esp from "./translations/esp.json";
import eng from "./translations/eng.json";

export default {
  props: {
    value: String,
  },
  computed: {
    text() {
      const lang = this.$page.props.lang;

      if (lang === "cat") {
        return cat[this.value] || "N/A";
      }

      if (lang === "esp") {
        return esp[this.value] || "N/A";
      }

      if (lang === "eng") {
        return eng[this.value] || "N/A";
      }
    },
  },
};
</script>
