<template>
  <nav class="nav" :class="classParent">
    <template v-for="link in links" :key="link.id">
      <router-link :to="link.href" custom v-slot="{ navigate, href }">
        <a class="nav__item" :href="href" @click="navigate">{{ link.title }}</a>
      </router-link>
    </template>
  </nav>
</template>
<script src="./Nav.js"></script>
<style src='./Nav.scss'></style>
