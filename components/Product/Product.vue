<template>
  <a class="product" :class="classParent" :href="to" @click.prevent="toLink(to)">
    <div class="product__img img">
      <img :src="image" alt="">
    </div>
    <div v-if="title" class="product__name">{{ title }}</div>
  </a>
</template>
<script src="./Product.js"></script>
<style src='./Product.scss'></style>
