<template>
  <div class="breadcrumb">
    <Case>
      <div class="breadcrumb__list" itemscope itemtype="http://schema.org/BreadcrumbList">
        <div class="breadcrumb__item" v-for="(crumb, index) in crumbs" :key="index" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
          <router-link :to="crumb" v-if="index < crumbs.length - 1" :title="crumb.meta.title" itemprop="item">
            <span itemprop="name">{{ crumb.meta.title }}</span>
          </router-link>
          <u v-else itemprop="item">
            <span itemprop="name">{{ crumb.meta.title }}</span>
          </u>
          <meta itemprop="position" :content="index + 1">
        </div>
      </div>
    </Case>
  </div>
</template>
<script src="./Breadcrumb.js"></script>
<style src='./Breadcrumb.scss'></style>
