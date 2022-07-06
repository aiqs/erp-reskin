<script setup>
import { setCart } from '../helpers/set-cart'
import { onMounted, toRefs } from 'vue'

const props = defineProps({
  title: String,
  ids: String,
  datasets: Object,
  labels: Object
})

onMounted(() => {
  setCart(props.ids, props.labels, props.datasets);
})

</script>

<template>
  <div class="card z-index-2">
    <div class="card-header pb-0">
      <h6>{{ title }}</h6>
    </div>
    <div class="card-body p-3">
      <div class="chart">
        <canvas :id="ids" class="chart-canvas" height="300"></canvas>
      </div>
    </div>
  </div>
</template>
