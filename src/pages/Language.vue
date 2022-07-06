<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { DataTable } from 'simple-datatables'

const router = useRouter()
const askToDel = () => {
  swal("Apakah kamu yakin ingin menghapus data ini ?",{
    buttons: {
      yes: {
        text: "Ya, hapus",
        value: true,
        className: "btn btn-primary btn-sm",
      },
      no: {
        text: "Batalkan",
        value: false,
        className: "btn btn-default btn-sm",
      }
    }
  })
  .then((yesDelete) => {
    if (yesDelete) {
      swal({
        title: " ",
        text: "Berhasil hapus data bahasa",
        button: {
          text: "Baik, mengerti!",
          value: true,
          visible: true,
          className: "btn btn-primary btn-sm",
          closeModal: true,
        },
      })
    }
  });
}

onMounted(() => {
  const theTable = document.querySelector("#datatable-basic");
  new DataTable(theTable, {
    searchable: false,
    fixedHeight: true
  }).on('datatable.init', function(args) {
    let els = document.getElementsByClassName("btn-url");
    for(let i = 0, len = els.length; i < len; i++){
      let targetUrl = els[i].attributes[0].nodeValue;
      els[i].addEventListener('click', () => {
        router.push(targetUrl);
      });
    }

    els = document.getElementsByClassName("btn-ask-del");
    for(let i = 0, len = els.length; i < len; i++){
      els[i].addEventListener('click', () => {
        askToDel();
      });
    }
  });

});
</script>

<template>
  <div>
    <div class="card">
      <div class="card-header border-bottom py-3">
          <div class="row">
              <div class="col-sm-6">
                  <h1 class="text-lg mb-0 text-bolder text-dark">Bahasa</h1>
              </div>
              <div class="col-sm-6 text-end">
                  <router-link to="/admin/add-language" class="btn btn-icon btn-sm btn-filter bg-gradient-primary me-2">
                      <span class="btn-inner--icon"><i class="fa fa-plus-circle fa-fw"></i></span>
                      <span class="btn-inner--text">Add Data</span>
                  </router-link>
                  <button class="btn btn-sm btn-filter btn-outline-primary me-2" data-bs-toggle="modal" data-bs-target="#modalImportFile">
                      IMPORT
                  </button>
                  <div class="dropdown btn-export">
                      <a href="javascript:;" class="btn btn-sm btn-filter btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" id="menuExport">
                          EXPORT
                      </a>
                    <ul class="dropdown-menu" aria-labelledby="menuExport">
                      <li class="mb-2">
                        <a class="dropdown-item border-radius-md" href="javascript:;">
                          <div class="d-flex">
                            <div class="my-auto">
                                <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                                  <i class="fa-2x fa fa-file-pdf-o" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div class="d-flex flex-column ps-3 justify-content-center">
                              <h6 class="text-sm font-weight-normal mb-1">
                                Export to PDF
                              </h6>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li class="mb-2">
                        <a class="dropdown-item border-radius-md" href="javascript:;">
                          <div class="d-flex">
                            <div class="my-auto">
                                <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                                  <i class="fa-2x fa fa-file-word-o" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div class="d-flex flex-column ps-3 justify-content-center">
                              <h6 class="text-sm font-weight-normal mb-1">
                                Export to Word
                              </h6>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item border-radius-md" href="javascript:;">
                          <div class="d-flex">
                            <div class="my-auto">
                                <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                                  <i class="fa-2x fa fa-file-excel-o" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div class="d-flex flex-column ps-3 justify-content-center">
                              <h6 class="text-sm font-weight-normal mb-1">
                                Export to Excel
                              </h6>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
              </div>
          </div>
      </div>
      <div class="card-body">
          <div class="row">
              <div class="col" style="max-width:150px">
                  <div class="form-group">
                      <div class="input-group">
                          <span class="input-group-text opacity-7">
                              <i class="fa fa-address-card"></i>
                          </span>
                          <input type="text" class="form-control form-control-sm" placeholder="ID">
                      </div>
                  </div>
              </div>

              <div class="col" style="max-width:200px">
                  <div class="form-group">
                      <div class="input-group">
                          <span class="input-group-text opacity-7">
                              <i class="fa fa-globe"></i>
                          </span>
                          <input type="text" class="form-control form-control-sm" placeholder="Nama Bahasa">
                      </div>
                  </div>
              </div>
          </div>

          <div class="mx-n4">
              
          <table class="table table-flush" id="datatable-basic">
          <thead class="thead-light">
          <tr>
              <th class="text-secondary text-xs font-weight-bolder opacity-7" width="100">ID</th>
              <th class="text-secondary text-xs font-weight-bolder opacity-7" width="220">Nama Bahasa</th>
              <th class="text-secondary text-xs font-weight-bolder opacity-7" width="120">Status</th>
              <th class="text-secondary text-xs font-weight-bolder opacity-7 text-end">
                  <span class="pe-4   ">Action</span>
              </th>
          </tr>
          </thead>
          <tbody>
          <tr>
              <td class="text-sm font-weight-normal">1</td>
              <td class="text-sm font-weight-normal">Indonesia</td>
              <td class="text-sm font-weight-normal text-center">
                  <span class="badge badge-circle badge-sm bg-green">
                      <i class="fa fa-check"></i>
                  </span>
              </td>
              <td class="text-sm font-weight-normal text-end">
                  <a targetUrl="/admin/edit-language" class="btn btn-action btn-url text-green me-3">
                      <i class="fa fa-pencil text-lg"></i>
                  </a>
                  <button class="btn btn-action btn-ask-del text-danger" @click="askToDel">
                      <i class="fa fa-trash text-lg"></i>
                  </button>
              </td>
          </tr>
          <tr>
              <td class="text-sm font-weight-normal">2</td>
              <td class="text-sm font-weight-normal">Indonesia</td>
              <td class="text-sm font-weight-normal text-center">
                  <span class="badge badge-circle badge-sm bg-green">
                      <i class="fa fa-check"></i>
                  </span>
              </td>
              <td class="text-sm font-weight-normal text-end">
                  <a to="/admin/edit-language" class="btn btn-action btn-url text-success me-3">
                      <i class="fa fa-pencil text-lg"></i>
                  </a>
                  <button class="btn btn-action btn-ask-del text-danger" @click="askToDel">
                      <i class="fa fa-trash text-lg"></i>
                  </button>
              </td>
          </tr>
          </tbody>
          </table>

          </div>


      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="modalImportFile" tabindex="-1" role="dialog" aria-labelledby="modal-title" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modal-title">Import</h5>
            <button type="button" class="btn-close text-dark" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            You can browse your computer for a file.
            <input type="file" class="form-control my-4" />
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="acceptExport" checked="">
              <label class="custom-control-label" for="acceptExport">I accept the term and conditions</label>
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-sm bg-gradient-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-sm bg-gradient-primary">Upload</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>