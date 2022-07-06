<script setup>
defineProps({
  fileName: String,
})

</script>

<template>
  <div
    class="blique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
    :style="'background-image:url(\'/assets/images/' + fileName + '\')'">
  </div>
</template>