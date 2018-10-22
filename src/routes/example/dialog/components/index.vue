<template>
  <div>
    <div class="row">
      <div class="col-xs-12">
        <el-dialog @close="close" title="提示" :visible.sync="dialogVisible" width="30%">
          <span>这是一段信息</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="save">确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    save() {
      Promise.resolve({ test: 'here is the bussiness data' }).then(data => {
        this.dialogVisible = false
        this.$promise.resolve()
      })
    }
  }
}
</script>

