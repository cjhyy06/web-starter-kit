import Vue from 'vue'

const showDialog = (component, data, options) => {
  return new Promise((resolve, reject) => {
    let constructor = Vue.extend(component)
    let modal = new constructor({
      data () {
        return data || {}
      },
      methods: {
        close () {
          $(modal.$el).remove()
        }
      }
    })
    modal._data.dialogVisible = true
    let instance = modal.$mount()
    instance.$promise = { resolve, reject }
    $('body').append(instance.$el)
  })
}
export default {
  showDialog
}
