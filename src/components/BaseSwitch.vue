<script setup>
defineProps({
  ids: String,
  label: String
})

</script>

<template>
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" :id="ids">
    <label class="form-check-label" :for="ids">{{ label }}</label>
  </div>
</template>
