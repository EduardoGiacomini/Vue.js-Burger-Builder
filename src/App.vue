<template>
  <Burger :ingredients="decodedIngredients" />
</template>

<script>
import Burger from './components/Burger'
import './assets/styles/index.css'

export default {
  name: 'app',
  props: {
    ingredients: {
      type: String,
      default: ''
    }
  },
  computed: {
    decodedIngredients () {
      return this.ingredients.split(' ')
    }
  },
  components: {
    Burger
  }
}
</script>
