<template>
  <div>
    <div class="row">
      <div class="col-xs-12">
        <div>基础用法</div>
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
        <el-radio></el-radio>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: '1'
    }
  }
}
</script>

