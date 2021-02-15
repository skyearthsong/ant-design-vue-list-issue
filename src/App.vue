<template>
  <a-config-provider :locale="locale">
    <FinanceInfo />
  </a-config-provider>
</template>

<script setup>
import FinanceInfo from "./components/FinanceInfo.vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import "moment/dist/locale/zh-cn";
import { ref } from "vue";
const locale = ref(zhCN);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>