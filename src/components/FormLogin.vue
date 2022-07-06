<script setup>
import LabelInput from './BaseLabelInput.vue'
import Switch from './BaseSwitch.vue'
import Button from './BaseButton.vue'
import { useRouter } from 'vue-router'


const router = useRouter();

const notifLogin = () => {	
  swal({
    title: " ",
    text: "Sign in successfully!",
    button: {
      text: "Ok, Got it!",
      value: true,
      visible: true,
      className: "btn btn-primary btn-sm",
      closeModal: true,
    },
  }).then(()=>{
    router.push('/admin/dashboard');
  });
}

</script>

<template>
  <form role="form">
    <LabelInput label="Email" type="email" />
    <LabelInput label="Password" type="password" />
    <Switch label="Remember me" ids="rememberMe" />

    <label>
      Forgot your password?
      <router-link to="reset-password" class="text-primary">Reset Password</router-link>
    </label>

    <div class="text-center">
      <Button label="Sign in" css="w-100" @click="notifLogin" />
    </div>
  </form>
</template>