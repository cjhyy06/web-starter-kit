<template>
  <div class="container-fluid">
    <app-header></app-header>
    <app-slide></app-slide>
    <app-content>
      <router-view></router-view>
    </app-content>
    <app-footer></app-footer>
  </div>
</template>

<script src="./component.js"></script>
<style scoped lang="scss" src="./style.scss"></style>
