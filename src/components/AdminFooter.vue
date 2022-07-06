<script setup>
import { ref } from 'vue'

const year = ref(new Date().getFullYear());
</script>
<template>
  <footer class="footer pt-3">
    <div class="container-fluid">
      <div class="row align-items-center justify-content-lg-between">
        <div class="col-lg-6 mb-2">
          <div class="copyright text-center text-sm text-muted text-lg-start">
            © {{ year }},
            made with <i class="fa fa-heart"></i> by
            <a href="#" class="font-weight-bold" target="_blank">Neosantara</a>
            for a better web.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
