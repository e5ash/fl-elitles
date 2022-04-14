<template>
  <header class="header">
    <div class="header__panel">
      <div class="case">
        <div class="header__contacts">
          <div class="header__contact">Ленинградская область, деревня Екатериновка, 8-Марта, 188</div>
          <div class="header__contact">Пн-Пт 9:00 - 18:00, Сб-Вс - выходной</div>
          <Crt />
        </div>
      </div>
    </div>
    <div class="header__inner">
      <div class="case">
        <div class="header__wrap">
          <Logo :classParent="header__logo" />
          <Nav :classParent="header__nav" />
          <div class="header__phone"><a href="tel:"></a></div>
        </div>
      </div>
    </div>
  </header>
</template>
<script src="./Header.js"></script>
<style src='./Header.scss'></style>
