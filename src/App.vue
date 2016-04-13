<template>
<div>
   <h1 v-touch:swipedown="onSwipeDown">{{msg}}</h1>
   <p>{{ev}}</p>
   <comp-a></comp-a>
   <comp-b></comp-b>
   <counter></counter>
</div>
</template>

<script>
import CompA from './components/A.vue'
import CompB from './components/B.vue'
import Counter from './components/Counter.vue'
export default {
  data () {
    return {
      msg: 'Hello from vue-loader!',
      ev: '111'
    }
  },
  methods: {
    onSwipeDown: function (ev) {
      this.ev = ev
    }
  },
  components: {
    CompA,
    CompB,
    Counter
  }
}
</script>

<style>
    html,body {padding:0; margin:0;}
    h1 {color: pink;}
</style>
