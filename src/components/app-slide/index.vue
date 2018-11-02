<template>
  <div class="slide-container" ref="navMenu">
    <!-- <el-menu class="menu" background-color="#1f363d" text-color="#fff" active-text-color="#ffd04b" mode="vertical"> -->
    <el-menu class="app-slide-el-menu" mode="vertical">
      <template v-for="(item,index) in menus">
        <el-menu-item @click="selectMenu(item)" :key="index" v-if="!item.children||!item.children.length" :index="index.toString()">
          {{item.name}}
        </el-menu-item>
        <el-submenu :key="index" :index="index.toString()" v-else>
          <template slot="title">{{item.name}}</template>
          <el-menu-item @click="selectMenu(sItem)" v-for="(sItem,sIndex) in item.children" :index="sIndex.toString()" :key="sIndex">
            {{sItem.name}}
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script src="./component.js"></script>
<style scoped lang="scss" src="./style.scss"></style>
<style lang="scss">
@import '../../styles/common';
.app-slide-el-menu {
  a {
    color: #fff;
    text-decoration: none;
  }
  background-color: $menu-color !important;
  height: 100%;
  .el-menu-item {
    color: $menu-font-color !important;
    background-color: $menu-color !important;
  }
  .el-menu-item:focus,
  .el-menu-item:hover {
    outline: 0;
    background-color: $menu-hover-color !important;
  }
  .el-menu-item.is-active {
    color: $menu-active-color !important;
  }
  .el-submenu {
    .el-submenu__title {
      color: $menu-font-color !important;
    }
    .el-submenu__title:hover {
      background-color: $menu-hover-color !important;
    }
  }
}
</style>

