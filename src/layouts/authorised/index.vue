<template>
  <div class="container-fluid">
    <app-header></app-header>
    <app-slide></app-slide>
    <div class="content">
      <router-view id="app-container"></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script src="./component.js"></script>
<style scoped lang="scss" src="./style.scss"></style>
