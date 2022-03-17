<template>
  <div class="container" :style="style" :class="{handle: !ingredient.disabled}">
    <component :is="ingredient.image"></component>
  </div>
</template>

<script>
import { BASE_INGREDIENTS } from '../models/ingredients'
const Z_INDEX_INCREMENT = 2

export default {
  props: {
    name: String,
    index: Number
  },
  computed: {
    ingredient () {
      return BASE_INGREDIENTS.find(ingredient => ingredient.name === this.name)
    },
    style () {
      const { marginBottom, marginTop } = this.ingredient

      return {
        cursor: 'pointer',
        marginBottom: marginBottom + '%',
        marginTop: marginTop + '%',
        overflow: 'visible',
        position: 'relative',
        zIndex: this.index + Z_INDEX_INCREMENT
      }
    }
  }
}
</script>
