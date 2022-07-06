<script setup>
defineProps({
  width: {
    type: String,
    default: '90'
  },
  height:{
    type: String,
    default: '60'
  }
})

</script>

<template>
  <img 
    src="/assets/images/logo_erp3.png" 
    :style="'filter: brightness(95%);width:' + width + 'px;height:' + height + 'px'"
  />
</template>