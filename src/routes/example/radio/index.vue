<template>
  <div>
    <div class="row">
      <div class="col-xs-12">
        <div>基础用法</div>
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2" disabled>备选项</el-radio>
      </div>
      <div class="col-xs-12 margin-t-15x">
        <el-radio-group v-model="radio2">
          <el-radio label="1">备选项</el-radio>
          <el-radio label="2">备选项</el-radio>
          <el-radio label="3">备选项</el-radio>
        </el-radio-group>
      </div>
      <div class="col-xs-12 margin-t-15x">
        <el-radio-group v-model="radio3">
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
      <div class="col-xs-12 margin-t-15x">
        <el-radio-group v-model="radio4" size="mini">
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="上海" disabled></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: '1',
      radio2: '',
      radio3: '',
      radio4: ''
    }
  }
}
</script>

