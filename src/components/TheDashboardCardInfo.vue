<script setup>
defineProps({
  title: String,
  value: String,
  icon: String,
  iconType: {
    type: String,
    default: 'fa fa-'
  }
})

</script>

<template>
  <div class="card">
    <div class="card-body p-3">
      <div class="row">
        <div class="col-8">
          <div class="numbers">
            <p class="text-sm mb-0 text-capitalize font-weight-bold">{{ title }}</p>
            <h5 class="font-weight-bolder mb-0 text-success text-lg">
                {{ value }}
            </h5>
          </div>
        </div>
        <div class="col-4 text-end">
          <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
            <i :class="iconType + icon + ' text-lg opacity-10'" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
