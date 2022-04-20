<template>
  <div class="fcont">
    <div class="fcont__item" v-for="item in items" :key="item.id">
      <div class="fcont__icon" v-html="item.icon"></div>
      <div class="fcont__title" v-html="item.value"></div>
    </div>
  </div>
</template>
<script src="./Fcont.js"></script>
<style src='./Fcont.scss'></style>
