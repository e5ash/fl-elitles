<template>
  <div class="catalog block">
    <div class="case">
      <div class="catalog__title block__title h2">{{ title ? title : "Наша продукция" }}</div>
      <div class="catalog__list row">
        <template v-for="item in getItems()" :key="item.id">
          <Product classParent="catalog__item" :title="item.title" :image="item.image" :href="href"></Product>
        </template>
      </div>
    </div>
  </div>
</template>
<script src="./Catalog.js"></script>
<style src='./Catalog.scss'></style>
