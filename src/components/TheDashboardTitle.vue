<script setup>
defineProps({
  label: String
})

</script>

<template>
  <div class="card card-plain mb-4">
    <div class="card-body p-3">
      <div class="row">
        <div class="col-lg-3">
          <div class="d-flex flex-column h-100">
            <h2 class="font-weight-bolder mb-0">{{ label }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
