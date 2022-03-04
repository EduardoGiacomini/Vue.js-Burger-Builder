<template>
  <Burger :ingredients="ingredients" />
</template>

<script>
import Burger from './components/Burger'
import './assets/styles/index.css'

export default {
  name: 'app',
  data () {
    return {
      ingredients: [
        'bun-top',
        'onions',
        'meat',
        'cheese',
        'pickles',
        'salad',
        'bacon',
        'egg',
        'bun-bottom'
      ]
    }
  },
  components: {
    Burger
  }
}
</script>
