<template>
  <div class="carousel">
    <slot></slot>
    <button class="carousel__nav carousel__next" @click.prevent="next"></button>
    <button class="carousel__nav carousel__prev" @click.prevent="prev"></button>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        index : 0,
        slides: [],
        direction: 'right'
      }
    },

    mounted() {
      this.slides = this.$children,
      this.slides.forEach((slide, i)=> {
        slide.index = i
      })
    },

    computed : {
      slidesCount () { return this.slides.length }

      },

    methods : {
      next () {
        this.index++
        this.direction = 'right'
        if (this.index > this.slidesCount) {
          this.index = 0
        }
      },
      prev () {
        this.index--
        this.direction = 'left'
        if (this.index <= 0) {
          this.index = this.slidesCount - 1

        }
      }

    }

  }
</script>

<<<<<<< HEAD
<style scoped>
  .carousel {
    position: relative;
  }

  .carousel__nav {
    position: absolute;
    top: 50%;
    left: 10%;
    margin-top: -31px;
    background: url(prev.png);
    width: 100px;
    height: 100px;
  }

.carousel__nav.carousel__next {
  right: 10px;
  left: auto;
  background: url(next.png);
=======
<style>
.carousel-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
}
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  
  /* width: 24em;
  min-height: 25em; */
}
.slide {
  flex: 0 0 20em;
  height: 20em;
  margin: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1em dashed #000;
  border-radius: 50%;
  transition: transform 0.3s ease-in-out;
}
.slide:first-of-type {
  opacity: 0;
}
.slide:last-of-type {
  opacity: 0;
>>>>>>> 2f8006c8cbed4bd4e763e93c8a0fc4b9dedeefb0
}
</style>
