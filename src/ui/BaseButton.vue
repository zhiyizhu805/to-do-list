<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <!-- <router-link :to="to" :class="mode" v-else>
    <slot></slot>
  </router-link > -->
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '/',
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  border: 2px solid #f72585;
  color: #f72585;
  cursor: pointer;
  margin-right: 0.5rem;
  display: inline-block;
  background-color: white;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #fee9f3;
  border-color: #fee9f3;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #270041;
  color: #270041;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #edd2ff;
}
</style>
