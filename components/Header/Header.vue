<template>
  <header class="header bgw" id="header">
    <div class="header__panel">
      <Case>
        <div class="header__panel-wrap row">
          <div class="header__contacts row">
            <div class="header__contact">
              Ленинградская область, деревня Екатериновка, 8-Марта, 188
            </div>
            <div class="header__contact">
              Пн-Пт 9:00 - 18:00, Сб-Вс - выходной
            </div>
          </div>
          <Crt classParent="header__cart" />
        </div>
      </Case>
    </div>
    <div class="header__inner">
      <Case>
        <div class="header__inner-wrap row">
          <Logo class="header__logo" />
          <Nav class="header__nav" :class="navOpen ? 'header__nav_show' : null" mods="nav_row nav_white" />
          <div class="header__phone">
            <a href="tel:+78129420095">
              <span>(812) 942-00-95</span>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.4062 1.78125L13.1562 1.03125C12.8125 0.9375 12.4375 1.125 12.2812 1.46875L10.7812 4.96875C10.6562 5.28125 10.75 5.625 11 5.84375L12.9062 7.40625C11.7812 9.78125 9.8125 11.7812 7.375 12.9375L5.8125 11.0312C5.59375 10.7812 5.25 10.6875 4.9375 10.8125L1.4375 12.3125C1.09375 12.4688 0.9375 12.8438 1 13.1875L1.75 16.4375C1.84375 16.7812 2.125 17 2.5 17C10.5 17 17 10.5312 17 2.5C17 2.15625 16.75 1.875 16.4062 1.78125Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
          <div class="header__ham" :class="navOpen ? 'header__ham_toggle' : null" @click="navOpen = !navOpen">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </Case>
    </div>

    <template v-if="!isMain">
      <Breadcrumb class="header__breadcrumb" />
      <div class="header__bg bg">
        <img src="~/assets/images/intro-bg.jpg" alt="" />
      </div>
    </template>
  </header>
</template>
<script src="./Header.js"></script>
<style src='./Header.scss'></style>
