<template>
  <div class="field" :class="modsBEM">
    <div class="field__title" v-if="title">{{ title }}</div>
    <div class="field__wrap">
      <input 
        v-if="type != textarea" 
        class="field__area" 
        :type="type ? type : 'text'" 
        :name="name"
        :placeholder="placeholder"
        :required="required ? 'required' : null"
      >
      <textarea 
        v-else
        class="field__area" 
        :type="type ? type : 'text'" 
        :name="name"
        :placeholder="placeholder"
        :required="required ? 'required' : null"
      ></textarea>
    </div>
  </div>
</template>
<script src="./Field.js"></script>
<style src='./Field.scss'></style>
