# vue-mixinClassStyle

## Use
*main.js*
```js
import mixinClassStyle from 'path/to/mixinClassStyle'

Vue.use(mixinClassStyle)
```

*tempate*
```html
<div v-mixinClassStyle="{class:['common', 'responsive']}" class="origin"></div>
```

## Render
```html
<div class="origin common responsive"></div>
```

## Soon
- ~~Class names mix~~
- Load style file dynamic
