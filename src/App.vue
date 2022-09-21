<script setup>
import CabecalhoComp from "@/components/CabecalhoComp.vue";
import RodapeComp from "@/components/RodapeComp.vue";
</script>
<template>
  <CabecalhoComp />
  <main>
    <RouterView />
  </main>
  <RodapeComp />
</template>

<style>
@import "@/assets/base.css";
@import "@/assets/main.css";
#app {
  max-width:5000px;
  max-height: 1000px;
  margin: 0 auto;
  height: 100vh;
  font-weight: normal;
}
header,
footer {
  background-color: rgb(126, 73, 126);
  color: white;
  height: 15%;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  padding-left: 2rem;
}
</style>
