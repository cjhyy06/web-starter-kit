<template>
  <div class="container-fluid">
    <app-header></app-header>
    <app-slide></app-slide>
    <div class="content padding-t-15x padding-b-15x">
      <router-view id="app-container"></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script src="./component.js"></script>
<style scoped lang="scss" src="./style.scss"></style>
