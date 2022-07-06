<script setup>
import { ref } from 'vue'

const id = ref('');
const language = ref('');

const submitFormEditLanguage = (e) =>{
  e.preventDefault()
  swal({
    title: " ",
    text: "Berhasil Edit Data Bahasa",
    button: {
      text: "Baik, mengerti!",
      value: true,
      visible: true,
      className: "btn btn-primary btn-sm",
      closeModal: true,
    },
  }).then(()=>{

  });
}
</script>
<template>
  <div class="card">
    <div class="card-header border-bottom py-3">
        <h1 class="text-lg mb-0 text-bolder text-dark">Edit Data</h1>
    </div>
    <div class="card-body">
        <form @submit="submitFormEditLanguage" action="">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-control-label">ID</label>
                        <input v-model="id" id="input-id" class="form-control" type="text" placeholder="ID">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-control-label">Nama Bahasa</label>
                        <input v-model="language" id="input-language" class="form-control" type="text" placeholder="Nama Bahasa">
                    </div>                
                </div>
                <div class="col-md-6">
                    <button type="reset" class="btn btn-outline-success w-100">Reset</button>
                </div>
                <div class="col-md-6">
                    <button type="submit" class="btn btn-success w-100">Submit</button>
                </div>
            </div>
        </form>
    </div>
  </div>
</template>