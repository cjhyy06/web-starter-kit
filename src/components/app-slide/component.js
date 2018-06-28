import menus from '../../../data/menu'
export default {
  data () {
    return {
      menus: menus
    }
  },
  mounted () {},
  methods: {
    selectMenu (item) {
      this.$router.push({ path: item.path })
    }
  }
}
