<script setup>
import TheAuthBackgroundImage from '../components/TheAuthBackgroundImage.vue'
import Logo from '../components/BaseLogo.vue'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

const route = useRoute();
const onFirstForm = ref(true);
const onThirdForm = ref(false);

const onPageChanged = name => {
  onFirstForm.value = name == 'signIn';
  onThirdForm.value = name == 'resetingPasword';
}


onPageChanged(route.name);
watch(route, val => {
  onPageChanged(val.name);
});

</script>
<template>

  <main class="main-content  mt-0">
    <section>
      <div class="page-header min-vh-75">
        <div class="container">
          <div class="row">
            <div class="col-xl-5 col-lg-5 col-md-6 d-flex flex-column mx-auto">
              <div class="card card-plain mt-6">
                <div class="card-header pb-0 bg-transparent">
                  <div class="text-center mb-4">
                    <Logo />
                  </div>
                  <transition name="fade" appear mode="out-in">
                    <p v-if="onFirstForm" class="mb-0">Enter your email and password to sign in</p>
                    <p v-else-if="onThirdForm" class="mb-0">Set new Password</p>
                    <p v-else class="mb-0">Masukan email Anda untuk reset password.</p>
                  </transition>
                </div>
                <div class="card-body pt-3">
                  <router-view v-slot="{ Component }">
                    <transition name="fade" appear mode="out-in">
                      <component :is="Component" />
                    </transition>
                  </router-view>
                </div>
              </div>
            </div>
            <div class="col-md-6" style="height:100vh">
              <div class="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                <transition name="rotate" appear mode="out-in">
                  <TheAuthBackgroundImage v-if="onFirstForm" fileName="typing-1280.jpg" />
                  <TheAuthBackgroundImage v-else fileName="laptop-1280.jpg" />
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
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

@keyframes rotate {
  0% {
    opacity: 0;
    transform: scale(0) rotate(-180deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.rotate-enter-active {
  animation: rotate 0.2s;
}
.rotate-leave-active {
  animation: rotate 0.2s reverse;
}
</style>