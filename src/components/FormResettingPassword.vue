<script setup>
import LabelInput from '../components/BaseLabelInput.vue'
import Button from './BaseButton.vue'
import { useRouter } from 'vue-router'


const router = useRouter();

const notifSendSwal = () => {
  swal({
    title: " ",
    text: "Password berhasil direset",
    button: {
      text: "Baik, mengerti!",
      value: true,
      visible: true,
      className: "btn btn-primary btn-sm",
      closeModal: true,
    },
  }).then(()=>{
    router.push('/auth/sign-in');
  });
}

</script>

<template>
  <form role="form">
    <LabelInput label="New Password" type="password" icon="lock" />
    <LabelInput label="Confirm New Password" type="password" icon="lock" />
    <Button label="Send" css="w-100" @click="notifSendSwal" />
  </form>
</template>