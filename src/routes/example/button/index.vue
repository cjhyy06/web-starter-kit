<template>
  <div>
    <div class="row">
      <div class="col-xs-12">
        <el-button>默认按钮</el-button>
        <el-button class="fa fa-camera-retro fa-lg" type="primary">主要按钮</el-button>
        <el-button type="success" size="medium">成功按钮</el-button>
        <el-button type="info" size="small">信息按钮</el-button>
        <el-button type="warning" size="mini">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </div>

      <div class="col-xs-12 margin-t-10x">
        <el-button plain>默认按钮</el-button>
        <el-button class="fa fa-camera-retro fa-lg" type="primary" plain>主要按钮</el-button>
        <el-button type="success" size="medium" plain>成功按钮</el-button>
        <el-button type="info" size="small" plain disabled>信息按钮</el-button>
        <el-button type="warning" size="mini" plain>警告按钮</el-button>
        <el-button type="danger" plain>危险按钮</el-button>
      </div>

      <div class="col-xs-12 margin-t-10x">
        <el-button round>默认按钮</el-button>
        <el-button class="fa fa-camera-retro fa-lg" type="primary" round>主要按钮</el-button>
        <el-button type="success" size="medium" round>成功按钮</el-button>
        <el-button type="info" size="small" round>信息按钮</el-button>
        <el-button type="warning" size="mini" round>警告按钮</el-button>
        <el-button type="danger" round>危险按钮</el-button>
      </div>

      <div class="col-xs-12 margin-t-10x">
        <el-button icon="el-icon-search" circle></el-button>
        <el-button icon="el-icon-edit" class="fa fa-camera-retro fa-lg" type="primary" round></el-button>
        <el-button icon="el-icon-check" type="success" size="medium" round></el-button>
        <el-button icon="el-icon-message" type="info" size="small" round></el-button>
        <el-button icon="el-icon-star-off" type="warning" size="mini" round></el-button>
        <el-button icon="el-icon-delete" type="danger" round></el-button>
      </div>
      <div class="col-xs-12 margin-t-15x">
        <el-button type="text">文字按钮</el-button>
        <el-button type="text" disabled>文字按钮</el-button>
      </div>
      <div class="col-xs-12 margin-t-15x">
        <el-button type="primary" icon="el-icon-eidt"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="primary" icon="el-icon-upload">上传</el-button>
      </div>

      <div class="col-xs-12 margin-t-15x">
        <el-button-group>
          <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
          <el-button type="primary" icon="el-icon-arrow-right">下一页</el-button>
        </el-button-group>
        <el-button-group>
          <el-button type="primary" icon="el-icon-eidt"></el-button>
          <el-button type="primary" icon="el-icon-share"></el-button>
          <el-button type="primary" icon="el-icon-delete"></el-button>
        </el-button-group>
      </div>
      <div class="col-xs-12 margin-t-15x">
        <el-button type="primary" :loading="true">加载中</el-button>
      </div>
    </div>
  </div>
</template>
