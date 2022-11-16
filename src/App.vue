<script setup>
import API from '@/api/api.js';

const getHomePageData = async () => {
  await API.get('/homepage').then((response) => console.log(response));
}

getHomePageData()
</script>

<template>
  <p>Hello</p>
</template>
