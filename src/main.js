// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

require('font-awesome/css/font-awesome.css')
require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss')

Vue.directive('click-outside', {
  bind: function (el, binding, vNode) {
    // Provided expression must evaluate to a function.
    if (typeof binding.value !== 'function') {
      const compName = vNode.context.name
      let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
      if (compName) { warn += `Found in component '${compName}'` }

      console.warn(warn)
    }
    // Define Handler and cache it on the element
    const bubble = binding.modifiers.bubble
    const handler = (e) => {
      var key = e.which || e.keyCode
      if (bubble || (!el.contains(e.target) && el !== e.target) || key === 13) {
        binding.value(e, bubble)
      }
    }
    el.__vueClickOutside__ = handler

    // add Event Listeners
    document.addEventListener('click', handler)
    document.addEventListener('keypress', handler)
  },

  unbind: function (el, binding) {
    // Remove Event Listeners
    document.removeEventListener('click', el.__vueClickOutside__)
    el.__vueClickOutside__ = null
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
