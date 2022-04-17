<template>
  <div class="info block">
    <div class="case">
      <div class="info__title block__title h2">{{ title }}</div>
      <div class="info__wrap row">
        <div class="info__left">
          <slot name="left"></slot>
        </div>
        <div class="info__right">
          <slot name="right"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./Info.js"></script>
<style src='./Info.scss'></style>
