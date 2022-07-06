<script setup>  
const submit = (e) => {
  e.preventDefault();
  swal({
    title: " ",
    text: "Berhasil Edit Data Purchase Order",
    button: {
      text: "Baik, mengerti!",
      value: true,
      visible: true,
      className: "btn btn-primary btn-sm",
      closeModal: true,
    },
  })
}
</script>

<template>
          <div class="card">
            <div class="card-header border-bottom py-3">
                <h1 class="text-lg mb-0 text-bolder text-dark">Edit Data</h1>
            </div>
            <div class="card-body">
                <form @submit="submit" id="formEdit" action="" method="post">
                    <div class="row">
                        <div class="col-md-6 col-lg-4">
                            <div class="form-group">
                                <label class="form-control-label">ID</label>
                                <input id="input-id" class="form-control" type="text" placeholder="ID">
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="form-group">
                                <label class="form-control-label">Kode Kantor Cabang</label>
                                <input id="input-code" class="form-control" type="text" placeholder="Kode Kantor Cabang">
                            </div>                
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="form-group">
                                <label class="form-control-label">Tanggal PO</label>
                                <input id="input-date" class="form-control" type="date" placeholder="Tanggal PO">
                            </div>                
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="form-group">
                                <label class="form-control-label">No PO</label>
                                <input id="input-id" class="form-control" type="text" placeholder="No PO">
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="form-group">
                                <label class="form-control-label">Suplier</label>
                                <input id="input-id" class="form-control" type="text" placeholder="Suplier">
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="form-group">
                                <label class="form-control-label">No FPP</label>
                                <input id="input-id" class="form-control" type="text" placeholder="No FPP">
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="form-group">
                                <label class="form-control-label">Pemesanan Barang</label>
                                <input id="input-id" class="form-control" type="text" placeholder="Pemesanan Barang">
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="form-group">
                                <label class="form-control-label">Keterangan</label>
                                <input id="input-id" class="form-control" type="text" placeholder="Keterangan">
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="form-group">
                                <label class="form-control-label">Keterangan Payment</label>
                                <input id="input-id" class="form-control" type="text" placeholder="Keterangan Payment">
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="form-group">
                                <label class="form-control-label">Kode Artikel</label>
                                <input id="input-id" class="form-control" type="text" placeholder="Kode Artikel">
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="form-group">
                                <label class="form-control-label">Nama Artikel</label>
                                <input id="input-id" class="form-control" type="text" placeholder="Nama Artikel">
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="form-group">
                                <label class="form-control-label">Kode Gudang</label>
                                <input id="input-id" class="form-control" type="text" placeholder="Kode Gudang">
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="form-group">
                                <label class="form-control-label">Status</label>
                                <select class="form-control" id="choices-button">
                                    <option value="">Status</option>
                                    <option value="1">All Active</option>
                                    <option value="2">Not Active</option>
                                    <option value="3">New Entry</option>
                                    <option value="4">Approved By Admin</option>
                                    <option value="5">Approved By SPV</option>
                                    <option value="6">Approved By Direktur Pembelian</option>
                                    <option value="7">Closed By PO</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="form-group">
                                <label class="form-control-label">Kode Material Group</label>
                                <input id="input-id" class="form-control" type="text" placeholder="Kode Material Group">
                            </div>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-md-6">
                            <button type="reset" class="btn btn-outline-success w-100">Reset</button>
                        </div>
                        <div class="col-md-6">
                            <button type="submit" class="btn btn-success w-100">Submit</button>
                        </div>
                    </div>
                </form>

                <div class="nav-wrapper position-relative end-0 mx-n4 tab-wrapper">
                  <ul class="nav nav-pills nav-fill p-1" role="tablist">
                    <li class="nav-item">
                      <a class="nav-link mb-0 px-0 py-1 active" data-bs-toggle="tab" href="#tabs-pajak" role="tab" aria-controls="preview" aria-selected="true">
                      <i class="ni ni-badge text-sm me-2"></i> Pajak
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link mb-0 px-0 py-1" data-bs-toggle="tab" href="#tabs-detail" role="tab" aria-controls="code" aria-selected="false">
                        <i class="ni ni-laptop text-sm me-2"></i> Detail
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link mb-0 px-0 py-1" data-bs-toggle="tab" href="#tabs-jasa" role="tab" aria-controls="code" aria-selected="false">
                        <i class="ni ni-laptop text-sm me-2"></i> Jasa
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link mb-0 px-0 py-1" data-bs-toggle="tab" href="#tabs-hasil" role="tab" aria-controls="code" aria-selected="false">
                        <i class="ni ni-laptop text-sm me-2"></i> Hasil
                      </a>
                    </li>
                  </ul>
<div class="tab-content px-4" id="pills-tabContent">
  <!-- start-div:tab-pane -->
  <div class="tab-pane fade show active" id="tabs-pajak" role="tabpanel" aria-labelledby="tabs-pajak-tab" tabindex="0">
    <div class="py-3 mb-1">
        <button class="btn btn-sm btn-success btn-icon btn-filter me-2">
            <span class="btn-inner--icon"><i class="fa fa-plus-circle fa-fw"></i></span>
            <span class="btn-inner--text">Add Data</span>
        </button>
        <button class="btn btn-sm btn-info btn-icon btn-filter me-2">
            <span class="btn-inner--icon"><i class="fa fa-save fa-fw"></i></span>
            <span class="btn-inner--text">Simpan</span>
        </button>
        <button class="btn btn-sm btn-danger btn-icon btn-filter">
            <span class="btn-inner--icon"><i class="fa fa-trash fa-fw"></i></span>
            <span class="btn-inner--text">Hapus</span>
        </button>
    </div>
    <div class="mx-n4">
        <table class="table table-flush datatable-basic">
            <thead class="thead-light">
            <tr>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Jenis Pajak</th>
            </tr>
            </thead>
            <tbody>
            <tr class="add-item-table">
                <td class="text-sm font-weight-normal ps-4">
                    <div style="max-width: 400px;">
                        <select class="form-control" id="choices-button2" name="item-table">
                            <option>Item Pajak 1</option>
                            <option>Item Pajak 2</option>
                        </select>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>

    </div>

  </div>
  <!-- end-div:tab-pane -->
  <!-- start-div:tab-pane -->
  <div class="tab-pane fade" id="tabs-detail" role="tabpanel" aria-labelledby="tabs-detail-tab" tabindex="0">
  
    <div class="py-3 mb-1">
        <button class="btn btn-sm btn-success btn-icon btn-filter me-2">
            <span class="btn-inner--icon"><i class="fa fa-plus-circle fa-fw"></i></span>
            <span class="btn-inner--text">Add Data</span>
        </button>
        <button class="btn btn-sm btn-info btn-icon btn-filter me-2">
            <span class="btn-inner--icon"><i class="fa fa-save fa-fw"></i></span>
            <span class="btn-inner--text">Simpan</span>
        </button>
        <button class="btn btn-sm btn-danger btn-icon btn-filter">
            <span class="btn-inner--icon"><i class="fa fa-trash fa-fw"></i></span>
            <span class="btn-inner--text">Hapus</span>
        </button>
    </div>
    <div class="table-responsive mx-n4">
        <table class="table table-flush datatable-basic">
            <thead class="thead-light">
            <tr>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Form Permohonan Pembelian</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Kode Jenis Material</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Nama Artikel</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Qty</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Satuan</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Qty 2</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Satuan 2</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Qty 3</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Satuan 3</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Qty 4</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Satuan 4</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Tgl Kedatangan</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Harga</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Total</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Toleransi Kirim Atas</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Toleransi Kirim Bawah</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Gudang Tujuan</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Pemesan Barang</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Keterangan</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Keterangan</th>
            </tr>
            </thead>
            <tbody>
            <tr class="add-item-table">
                <td class="text-sm font-weight-normal ps-4">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
            </tr>
            </tbody>
            <tfoot>
                <tr>
                <th class="text-secondary text-xs font-weight-bolder opacity-7"></th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7"></th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7 text-end">Total</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7 text-end">0,00</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7"></th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7 text-end">0,00</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7"></th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7 text-end">0,00</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7"></th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7 text-end">0,00</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7"></th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7"></th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7 text-end">0,00</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7 text-end">0,00</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7"></th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7"></th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7"></th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7"></th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7"></th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7"></th>
                </tr>
            </tfoot>
        </table>

    </div>
  </div>
  <!-- end-div:tab-pane -->
  <!-- start-div:tab-pane -->
  <div class="tab-pane fade" id="tabs-jasa" role="tabpanel" aria-labelledby="tabs-jasa-tab" tabindex="0">
  
    <div class="py-3 mb-1">
        <button class="btn btn-sm btn-success btn-icon btn-filter me-2">
            <span class="btn-inner--icon"><i class="fa fa-plus-circle fa-fw"></i></span>
            <span class="btn-inner--text">Add Data</span>
        </button>
        <button class="btn btn-sm btn-info btn-icon btn-filter me-2">
            <span class="btn-inner--icon"><i class="fa fa-save fa-fw"></i></span>
            <span class="btn-inner--text">Simpan</span>
        </button>
        <button class="btn btn-sm btn-danger btn-icon btn-filter">
            <span class="btn-inner--icon"><i class="fa fa-trash fa-fw"></i></span>
            <span class="btn-inner--text">Hapus</span>
        </button>
    </div>
    <div class="table-responsive mx-n4">
        <table class="table table-flush datatable-basic">
            <thead class="thead-light">
            <tr>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Form Permohonan Pembelian</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Kode Jenis Material</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Nama Artikel</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Qty</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Satuan</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Qty 2</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Satuan 2</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Qty 3</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Satuan 3</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Qty 4</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Satuan 4</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Harga</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Tgl Request</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Gudang Tujuan</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Mesin</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Keterangan</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Keterangan</th>
            </tr>
            </thead>
            <tbody>
            <tr class="add-item-table">
                <td class="text-sm font-weight-normal ps-4">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
                <td class="text-sm font-weight-normal">
                    <input class="form-control" type="text" name="item-table" />
                </td>
            </tr>
            </tbody>
        </table>

    </div>
  </div>
  <!-- end-div:tab-pane -->
  <!-- start-div:tab-pane -->
  <div class="tab-pane fade" id="tabs-hasil" role="tabpanel" aria-labelledby="tabs-hasil-tab" tabindex="0">
    <div class="table-responsive mx-n4">
        <table class="table table-flush datatable-basic">
            <thead class="thead-light">
            <tr>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Kode Jenis Material</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Nama Artikel</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Qty</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Satuan</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Qty 2</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Satuan 2</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Qty 3</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Satuan 3</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Qty 4</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Satuan 4</th>
                <th class="text-secondary text-xs font-weight-bolder opacity-7">Keterangan</th>
            </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
  </div>
  <!-- end-div:tab-pane -->
</div>
                </div>
            </div>
          </div>

      </div>

</template>