<template>

  <router-link :to="to" custom v-slot="{ navigate, href }">
  <!-- <router-link to="/catalog/category" custom v-slot="{ navigate, href }"> -->
    <a class="product" :class="classParent" :href="href" @click="navigate">
      <div class="product__img img">
        <img :src="image" alt="">
      </div>
      <div v-if="title" class="product__name">{{ title }}</div>
    </a>
  </router-link>
</template>
<script src="./Product.js"></script>
<style src='./Product.scss'></style>
