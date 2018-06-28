<template>
  <div class="slide-container">
    <el-menu class="menu" background-color="#1f363d" text-color="#fff" active-text-color="#ffd04b" mode="vertical">
      <template v-for="(item,index) in menus">
        <el-menu-item :key="index" v-if="!item.children||!item.children.length" :index="index.toString()">
          <router-link v-if="item.path" :to="item.path">{{item.name}}</router-link>
          <span v-else>{{item.name}}</span>
        </el-menu-item>
        <el-submenu :key="index" :index="index.toString()" v-else>
          <template slot="title">{{item.name}}</template>
          <el-menu-item v-for="(sItem,sIndex) in item.children" :index="index.toString()" :key="sIndex">
            <router-link v-if="sItem.path" :to="sItem.path">{{sItem.name}}</router-link>
            <span v-else>{{sItem.name}}</span>
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script src="./component.js"></script>
<style scoped lang="scss" src="./style.scss"></style>