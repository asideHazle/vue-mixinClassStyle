const mixinClassStyle = {
  install (vue) {
    vue.directive('mixinClassStyle', {
      bind (el, binding) {
        var classNames = binding.value.class
        classNames.forEach(function (value) {
          el.classList.add(value)
        })
      }
    })
  }
}

export default mixinClassStyle
