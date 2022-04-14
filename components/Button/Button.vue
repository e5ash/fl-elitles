<template>
  <router-link v-if="href" :to="href" custom v-slot="{ navigate, href }">
    <a class="button" :class="[classParent, modsBEM]" :href="href" @click="navigate"><slot/></a>
  </router-link>
</template>
<script src="./Button.js"></script>
<style src='./Button.scss'></style>
