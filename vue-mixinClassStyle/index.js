const mixinClassStyle = {
  install (vue) {
    vue.directive('mixinClassStyle', {
      bind (el, binding) {
        var bind = binding.value;
        var obj;
        if(typeof bind != "object") {
          obj = JSON.parse(bind.replace(/\'/gi, "\""))
          addClassNames(el, obj)
        } else {
          addClassNames(el, bind)
        }
      }
    })
  }
}

function addClassNames(el, obj) {
  console.log(obj)
  var classNames = obj.class
  if(classNames != undefined) {
    classNames.forEach(function(val) {
      el.classList.add(val)
    })
  }
}

export default mixinClassStyle
