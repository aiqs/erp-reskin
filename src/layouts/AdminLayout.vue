<script setup>
import { useRoute } from 'vue-router'
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { createPerfectScrollbar } from '../helpers/perfect-scrollbar'
import NavSide from '../components/AdminNavSide.vue'
import Navbar from '../components/AdminNavbar.vue'
import Footer from '../components/AdminFooter.vue'

const route = useRoute();
const pageName = ref('');

pageName.value = route.name;
watch(route, val => {
  pageName.value = route.name;
});

onMounted(() => {
  document.body.className = 'g-sidenav-show bg-gray-100';
  createPerfectScrollbar();
})

onBeforeUnmount(() => {
  document.body.className = '';
})

</script>
<template>
  <div>
    <NavSide :pageName="pageName" />
    <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
      <Navbar :pageName="pageName" />
      <div class="container-fluid the-content pt-4 pb-2">
        <div class="row in-content">
          <div class="col-12 align-self-start">
            <router-view v-slot="{ Component }">
              <transition name="fade" appear mode="out-in">
                <component :is="Component" />
              </transition>
            </router-view>
          </div>
          <div class="col-12 align-self-end">
            <Footer />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>