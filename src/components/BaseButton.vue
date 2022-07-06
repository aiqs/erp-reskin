<script setup>
defineProps({
  label: String,
  type: {
    type: String,
    default: 'button'
  },
  css:{
    type: String,
    default: ''
  }
})

</script>

<template>
  <button :type="type" class="btn bg-gradient-primary mt-1 mb-0" :class='css'>
    Sign in
  </button>
</template>
