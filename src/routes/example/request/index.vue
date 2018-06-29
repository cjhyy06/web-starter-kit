<template>
  <div>
    <div class="row">
      <div class="col-xs-12">
        <div>请求结果：{{response}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import exampleService from '../../../service/example.js'
export default {
  data() {
    return {
      response: ''
    }
  },
  created() {
    exampleService
      .test()
      .then(data => {
        this.response = data
      })
      .catch(() => {})
  }
}
</script>



