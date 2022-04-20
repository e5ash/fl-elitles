<template>
  <nav class="nav" :class="[mods]">
    <a class="nav__item" v-for="link in links" :key="link.id" :href="link.href" @click.prevent="toLink(link.href, closeNav)">{{ link.title }}</a>
  </nav>
</template>
<script src="./Nav.js"></script>
<style src='./Nav.scss'></style>
