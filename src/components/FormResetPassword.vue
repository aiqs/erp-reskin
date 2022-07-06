<script setup>
import LabelInput from '../components/BaseLabelInput.vue'
import Button from './BaseButton.vue'
import { useRouter } from 'vue-router'


const router = useRouter();

const notifSendSwal = () => {  
  swal({
    title: " ",
    text: "Intruksi Reset Password telah dikirimkan, silahkan cek email anda.",
    button: {
      text: "Baik, mengerti!",
      value: true,
      visible: true,
      className: "btn btn-primary btn-sm",
      closeModal: true,
    },
  }).then(()=>{
    router.push('/auth/resetting-password');
  });
}

</script>

<template>
  <form role="form">
    <LabelInput label="Email" type="email" />
    <div class="row">
      <div class="col-6 pt-2">
        <router-link to="sign-in"><i class="fas fa-angle-left"></i> Back</router-link>
      </div>
      <div class="col-6">
        <Button label="Sign in" css="float-end" @click="notifSendSwal" />
      </div>
    </div>
  </form>
</template>