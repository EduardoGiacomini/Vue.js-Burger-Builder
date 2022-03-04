<template>
  <div class="container" :style="style" :class="{handle: !ingredient.disabled}">
    <img :src="ingredient.image" />
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
        marginBottom: marginBottom + '%',
        marginTop: marginTop + '%',
        zIndex: this.index + Z_INDEX_INCREMENT,
        overflow: 'visible'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  position: relative;

  &.handle {
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      filter: saturate(1.1) brightness(1.2);
    }
  }
}

img {
  width: 100%;
}
</style>
