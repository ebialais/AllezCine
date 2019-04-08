<template>
  <div class="carousel">
    <slot></slot>
    <!-- <i class="far fa-angle-right" width="30px"></i> -->
    <div class="logo"><img alt="logo Allez Ciné" src="/assets/logoAllezCine.png"></div>
    
    <button class="carousel__nav carousel__next" @click.prevent="next"></button>
    <button class="carousel__nav carousel__prev" @click.prevent="prev"></button>
    <div class="carousel__pagination">
      <button v-for="(n, index) in slidesCount" :key="index" @click="goto(n-1)" :class="{active: n-1 ==index}"></button>
    </div>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        index : 0,
        slides: [],
        direction: null
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
        if (this.index >= this.slidesCount) {
          this.index = 0; 
          
          
        }
    
      },
      prev () {
        this.index--
        this.direction = 'left'
        if (this.index < 0) {
          this.index = this.slidesCount - 1

        }
      },
      goto(index) {
        this.direction = index > this.index ? 'right' : 'left'
        this.index = index
      }

    }

  }
</script>

<style scoped>

  * {
  border: 0;
  }

  .logo{
    position: absolute;
    top: 40%;
    margin-top: -150px;
    padding-left: 10px;
  }

  .carousel__prev{
    position: absolute;
    left: 10px;
    top: 157px;
    /* margin-top: -31px; */
    background: url(/assets/prev.png);
    width: 55px;
    height: 77px;
  }

  /* .carousel__nav {
    position: absolute;
    top: 50%;
    margin-top: -31px;
    background: url(/assets/prev.png);
    width: 55px;
    height: 77px;
  } */

.carousel__next {
  position: absolute;
  right: 10px;
  top: 157px;
  background: url(/assets/next.png);
  width: 55px;
  height: 77px;
  /* margin-top: -31px; */
}

.carousel__pagination {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
}

.carousel__pagination button {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #000;
  opacity: 0.8;
  border-radius: 10px;
  margin: 0 2px;
}

.carousel__pagination button.active {
  background-color: #fff;
} 

</style>
