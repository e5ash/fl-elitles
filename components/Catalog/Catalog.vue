<template>
  <div class="catalog block">
    <Case>
      <H2 class="catalog__title block__title">{{ title ? title : "Наша продукция" }}</H2>
      <div class="catalog__list row">
        <template v-for="item in getItems()" :key="item.id">
          <Product classParent="catalog__item" :href="href" :title="item.title" :image="item.image"></Product>
        </template>
      </div>
    </Case>
  </div>
</template>
<script src="./Catalog.js"></script>
<style src='./Catalog.scss'></style>
