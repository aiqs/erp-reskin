<script setup>
defineProps({
  type: {
    type: String,
    default: 'text'
  },
  label: String,
  icon: {
    type: String,
    default: ''
  }
})

</script>

<template>
  <label>{{ label }}</label>
  <div class="mb-3">
    <input 
      :type="type"
      :class="icon == '' ? 'form-control' : 'form-control with-icon'" 
      :placeholder="label" 
      :aria-label="label" 
    />
    <span v-if="icon != ''" class="input-icon">
      <i :class="'fas fa-'+icon"></i>
    </span>
  </div>
</template>
