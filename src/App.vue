<template>
 <the-main-page></the-main-page>
</template>



<script>
import TheMainPage from "./pages/TheMainPage.vue";
export default {
  components: {
    TheMainPage,
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Josefin Sans', sans-serif;

}

*:focus {
  background-color:  #f8e8f5;
  outline: none;
  outline-offset: 2px; /* 轮廓偏移 */
}
</style>