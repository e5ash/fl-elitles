<template>
  <header class="header bgw" id="header">
    <div class="header__panel">
      <div class="case">
        <div class="header__panel-wrap row">
          <div class="header__contacts row">
            <div class="header__contact">Ленинградская область, деревня Екатериновка, 8-Марта, 188</div>
            <div class="header__contact">Пн-Пт 9:00 - 18:00, Сб-Вс - выходной</div>
          </div>
          <Crt classParent="header__cart" />
        </div>
      </div>
    </div>
    <div class="header__inner">
      <div class="case">
        <div class="header__inner-wrap row">
          <Logo classParent="header__logo" />
          <Nav classParent="header__nav" mods="nav_row nav_white"/>
          <div class="header__phone"><a href="tel:+78129420095">(812) 942-00-95</a></div>
        </div>
      </div>
    </div>

    <template v-if="!isMain">
      <Breadcrumb />
      <div class="header__bg bg">
        <img src="~/assets/images/intro-bg.jpg" alt="">
      </div>
    </template>
  </header>
</template>
<script src="./Header.js"></script>
<style src='./Header.scss'></style>
