<template>
  <div>
    <carousel>
      <carousel-slide>
        hello
      </carousel-slide>
      <carousel-slide>
        bye
      </carousel-slide>
    </carousel>

  </div>
</template>

<script>
import carousel from './carousel/carousel.vue'
import carouselSlide from './carousel/carouselSlide.vue'

export default {
  
  components:
    carousel,
    carouselSlide
}
</script>

<style scoped>

</style>