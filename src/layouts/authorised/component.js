import appHeader from '../../components/app-header/index'
import appSlide from '../../components/app-slide/index'
import appFooter from '../../components/app-footer/index'

export default {
  components: {
    'app-header': appHeader,
    'app-slide': appSlide,
    'app-footer': appFooter
  },
  mounted () {
    let windowHeight = $(window).innerHeight()
    let headerHeight = 60
    let footerHeight = 40
    let contentHeight = windowHeight - headerHeight - footerHeight
    let slideEl = $('.slide-container')
    let mainContentEl = $('.content')
    slideEl.css('height', contentHeight)
    mainContentEl.css('height', contentHeight)
  }
}
