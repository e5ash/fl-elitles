<template>
  <router-link to="/catalog/category" custom v-slot="{ navigate, href }">
    <a class="product" :class="classParent" :href="href" @click="navigate">
      <div class="product__img img">
        <img src="~/assets/catalog/{{ image }}" alt="">
      </div>
      <div class="product__name">{{ title }}</div>
    </a>
  </router-link>
</template>
<script src="./Product.js"></script>
<style src='./Product.scss'></style>
