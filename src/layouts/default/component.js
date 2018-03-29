import appHeader from '../../components/app-header/index'
import appSlide from '../../components/app-slide/index'
import appContent from '../../components/app-content/index'
import appFooter from '../../components/app-footer/index'

export default {
  components: {
    'app-header': appHeader,
    'app-slide': appSlide,
    'app-content': appContent,
    'app-footer': appFooter
  },
  mounted () {
    let slideEl = $('.slide-content')
    let mainContentEl = $('.content')
    let mainContentHeight = mainContentEl.height()
    let slideHeight = slideEl.height()
    if (slideHeight < mainContentHeight) {
      slideEl.height(mainContentHeight)
    } else if (slideHeight > mainContentHeight) {
      mainContentEl.height(slideHeight)
    }
  }
}
