<template>
  <transition-group name="list" tag="div" mode="out-in">
    <Ingredient
      v-for="(name, index) in ingredients"
      :key="name"
      :name="name"
      :index="ingredients.length - index" />
  </transition-group>
</template>

<script>
import Ingredient from './Ingredient'

export default {
  props: {
    ingredients: Array
  },
  methods: {
    handleMove ({ draggedContext }) {
      const { futureIndex } = draggedContext
      return !(futureIndex === 0 || futureIndex === this.ingredients.length - 1)
    }
  },
  components: {
    Ingredient
  }
}
</script>
