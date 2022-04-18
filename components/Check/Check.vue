<template>
  <div class="check" :class="isChecked ? classChecked : null " @click="handleClick">
    <input ref="input" type="radio" :name="name">
    <div class="check__value">{{ value }}</div>
  </div>
</template>
<script src="./Check.js"></script>
<style src='./Check.scss'></style>
