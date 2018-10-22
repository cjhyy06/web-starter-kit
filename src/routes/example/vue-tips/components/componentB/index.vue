<template>
  <div>
    <div class="row">
      <div class="col-xs-12">
        <div>
          <span>teacher name:</span>
          <span>{{teacher.name}}</span>
        </div>
        <div>
          <span>teacher gender:</span>
          <span>{{teacher.gender}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      teacher: {}
    }
  },
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  watch: {
    data: {
      handler(val) {
        console.log('xxxxxxxxxxxxxx')
        this.teacher = val
      },
      immediate: true, //在初始化的时候立即执行
      deep: true //让data对象属性的改变也触发watcher
    }
  }
}
</script>

