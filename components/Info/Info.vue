<template>
  <div class="info block">
    <Case>
      <H2 class="info__title block__title">{{ title }}</H2>
      <div class="info__wrap row">
        <div class="info__left">
          <slot name="left"></slot>
        </div>
        <div class="info__right">
          <slot name="right"></slot>
        </div>
      </div>
    </Case>
  </div>
</template>
<script src="./Info.js"></script>
<style src='./Info.scss'></style>
