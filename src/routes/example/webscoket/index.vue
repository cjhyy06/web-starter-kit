<template>
  <div>
    <div class="row">
      <div class="col-xs-12">
        <div class="col-xs-4">
          <div>我是用户1</div>
          <el-input type="textarea" :rows="20" placeholder="请输入内容" v-model="message1">
          </el-input>
          <input type="text" v-model="toSendMsg1" />
          <el-button @click="send1">发送</el-button>
        </div>
        <div class="col-xs-4">
          <div>我是用户2</div>
          <el-input type="textarea" :rows="20" placeholder="请输入内容" v-model="message2"> </el-input>
          <input type="text" v-model="toSendMsg2" />
          <el-button @click="send2">发送</el-button>
        </div>
        <div class="col-xs-4">
          <div>我是用户3</div>
          <el-input type="textarea" :rows="20" placeholder="请输入内容" v-model="message3"> </el-input>
          <input type="text" v-model="toSendMsg3" />
          <el-button @click="send3">发送</el-button>
        </div>
        <div class="col-xs-12">
          <div>等待服务器状态：</div>
          <div class="data">{{status}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./component2.js"></script>


