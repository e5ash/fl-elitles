<template>
  <div class="card block">
    <div class="case">
      <div class="card__title block__title h2">Доска обрезная сосна, ель</div>
      <div class="card__wrap row">
        <div class="card__img img">
          <img src="~/assets/images/card-image.jpg" alt="">
        </div>
        <div class="card__content row">
          <div class="card__settings">
            <div class="card__settings-line" v-for="setting in settings" :key="setting.title">
              <div class="card__settings-name">{{ setting.title }}</div>
              <div v-if="setting.items" class="card__settings-list">
                <Check 
                  class="card__settings-item" 
                  v-for="(item, index) in setting.items.list" 
                  :key="item.id" 
                  :index="index" 
                  :name="setting.items.name" 
                  :value="item"
                  v-model:checked="setting.items.value">
                </Check>
              </div>
              <div v-else class="card__settings-desc">{{ setting.desc }}</div>
            </div>
          </div>
          <div class="card__stock">
            <div class="card__stock-title">В наличии на складе</div>
            <div class="card__stock-text">Ленинградская область, деревня Екатериновка, 8-Марта, 188</div>
            <Button classParent="card__stock-button" mods="xs, green" href="/contacts">НА карте</Button>
          </div>
          <div class="card__data row">
            <div class="card__price">
              <div class="card__price-main">{{ toPriceFormat(prices.main) }} руб.</div>
              <div class="card__price-list" v-if="prices.items">
                <div class="card__price-item" v-for="price in prices.items" :key="price.id">{{ toPriceFormat(price[0]) }} {{ price[1] }}</div>
              </div>
            </div>
            <div class="card__desc">*  сумма товара высчитывается поштучно</div>
            <div class="card__controls row">
              <Incdec classParent="card__incdec" max="1000" />
              <Button classParent="card__button-add" mods="sm, green">в корзину</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./Card.js"></script>
<style src='./Card.scss'></style>
