<template>
  <div class="offer block bgw">
    <div class="case">
      <div class="offer__title block__title h2">Спецпредложения</div>
      <div class="offer__list row">
        <template v-for="item in items" :key="item.id">
          <Product classParent="offer__item" :title="item.title" :image="item.image"></Product>
        </template>
      </div>
      <Button classParent="offer__button" mods="md, green" href="/catalog">Все предложения</Button>
    </div>
    <div class="offer__bg bg">
      <img src="~/assets/images/offer-bg.svg" alt="">
    </div>
  </div>
</template>
<script src="./Offer.js"></script>
<style src='./Offer.scss'></style>
