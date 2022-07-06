<script setup>
</script>

<template>
  <div class="card">
    <div class="card-header border-bottom pt-3 pb-0">
        <div class="row">
            <div class="col-sm-4 mb-3">
                <h1 class="text-lg mb-0 text-bolder text-dark">Report Purchasing</h1>
            </div>
            <div class="col-sm-4 mb-3 text-end">
                <div class="dropdown btn-export2">
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
            <div class="col-sm-4 mb-3">
                <div class="form-group mb-0">
                    <div class="input-group">
                        <span class="input-group-text opacity-7">
                            <i class="fa fa-search"></i>
                        </span>
                        <input type="text" class="form-control form-control-sm" placeholder="Search">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card-body">
        <form id="formAdd" action="" method="post">
            <div class="row">

                <div class="col-md-6 col-lg-6">
                    <div class="form-group">
                        <label class="form-control-label">Jenis Laporan</label>
                        <select class="form-control choices-button">
                            <option value="">Jenis Laporan</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                            <option value="4">Option 4</option>
                        </select>
                    </div>
                </div>

                <div class="col-md-6 col-lg-6">
                    <div class="form-group">
                        <label class="form-control-label">Perusahaan</label>
                        <select class="form-control choices-button">
                            <option value="">Perusahaan</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                            <option value="4">Option 4</option>
                        </select>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="form-group">
                        <label class="form-control-label">Kantor Cabang</label>
                        <select class="form-control choices-button">
                            <option value="">Kantor Cabang</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                            <option value="4">Option 4</option>
                        </select>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="form-group">
                        <label class="form-control-label">Gudang</label>
                        <select class="form-control choices-button">
                            <option value="">Gudang</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                            <option value="4">Option 4</option>
                        </select>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="form-group">
                        <label class="form-control-label">Suplier</label>
                        <select class="form-control choices-button">
                            <option value="">Suplier</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                            <option value="4">Option 4</option>
                        </select>
                    </div>
                </div>

                <div class="col-md-6 col-lg-6">
                    <div class="form-group">
                        <label class="form-control-label">Group Material</label>
                        <select class="form-control choices-button">
                            <option value="">Group Material</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                            <option value="4">Option 4</option>
                        </select>
                    </div>
                </div>

                <div class="col-md-6 col-lg-6">
                    <div class="form-group">
                        <label class="form-control-label">Material</label>
                        <select class="form-control choices-button">
                            <option value="">Material</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                            <option value="4">Option 4</option>
                        </select>
                    </div>
                </div>

                <div class="col-md-6 col-lg-8">
                    <div class="form-group">
                        <label class="form-control-label">Tanggal</label>
                        <div class="row">
                            <div class="col-6"> 
                                <input class="form-control" type="date" placeholder="" />
                            </div>
                            <div class="col-6"> 
                                <input class="form-control" type="date" placeholder="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </form>
    </div>
  </div>

</template>