<template>
  <div>
    <div class="row">
      <div class="col-xs-12">
        <el-button @click="show">弹框</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import dialog from './components'
import uiHelper from '../../../core/ui-helper'
export default {
  data() {
    return {}
  },
  methods: {
    show() {
      uiHelper.dialog.showDialog(dialog)
    }
  }
}
</script>

