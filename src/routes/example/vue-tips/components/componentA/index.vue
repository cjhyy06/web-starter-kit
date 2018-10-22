<template>
  <div>
    <div class="row">
      <div class="col-xs-12">
        <componentA1 :data="$attrs"></componentA1>
      </div>
    </div>
  </div>
</template>
<script>
import componentA1 from './components/componentA1'
export default {
  components: {
    componentA1
  }
}
</script>

