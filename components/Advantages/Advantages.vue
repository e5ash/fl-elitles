<template>
  <div class="advantages">
    <div class="case">
      <div class="advantages__list row">
        <div class="advantages__item" v-for="item in items" :key="item.id">
          <div class="advantages__icon">
            <img :src="item.image" alt="">
          </div>
          <div class="advantages__name" v-html="item.title"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./Advantages.js"></script>
<style src='./Advantages.scss'></style>
