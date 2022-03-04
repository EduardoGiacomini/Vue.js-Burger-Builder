<template>
  <main>
    <Ingredient
      v-for="(name, index) in ingredients"
      :key="index"
      :name="name"
      :index="ingredients.length - index"
    />
  </main>
</template>

<script>
import Ingredient from './Ingredient'

export default {
  props: {
    ingredients: Array
  },
  components: {
    Ingredient
  }
}
</script>
