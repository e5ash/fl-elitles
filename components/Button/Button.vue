<template>
  <a v-if="href" class="button" :class="[modsBEM]" :href="href" @click.prevent="toLink(href)"><slot/></a>
  <div v-else class="button" :class="[modsBEM]"><slot/></div>
</template>
<script src="./Button.js"></script>
<style src='./Button.scss'></style>
