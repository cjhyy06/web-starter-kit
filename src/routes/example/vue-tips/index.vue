<template>
  <div>
    <div class="row">
      <div class="col-xs-12">
        <componentA :data="teacher"></componentA>
        <component-B :data="teacher"></component-B>
      </div>
    </div>
  </div>
</template>
<script>
import componentA from './components/componentA'
import componentB from './components/componentB'
export default {
  components: {
    componentA,
    componentB
  },
  data() {
    return {
      teacher: {
        name: 'chen xue song',
        gender: 'male'
      }
    }
  },
  created() {
    this.teacher.name = 'modified teacher name!'
  }
  // mounted() {
  //   this.teacher.name = 'modified teacher'
  //   // this.$forceUpdate()
  // }
}
</script>

