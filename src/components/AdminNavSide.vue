<script setup>
import Logo from './BaseLogo.vue'
import { ref, watch } from 'vue'
import { navSelected } from '../helpers/nav-names'

const props = defineProps({
  pageName: String
})


const selectedPage = ref('');
const selectedParent = ref('');

const onPageChanged = name => {
    let temp = navSelected(name);
    selectedPage.value = temp.self;
    selectedParent.value = temp.parent;
}

onPageChanged(props.pageName);
watch(() => props.pageName, name => {
    onPageChanged(props.pageName);
});
</script>
<template>
  <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 " id="sidenav-main">
    <div class="sidenav-header">
      <i class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
      <router-link class="navbar-brand m-0" to="/admin/dashboard">
        <Logo width='auto' height='auto' />
      </router-link>
    </div>
    <hr class="horizontal dark mt-0">
    <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
      <ul class="navbar-nav">
        <li class="nav-item">
            <a
                data-bs-toggle="collapse"
                href="#dashboardsExamples"
                class="nav-link"
                :class="{'active': selectedParent == 'Dashboard'}"
                aria-controls="dashboardsExamples"
                role="button"
                :aria-expanded="selectedParent == 'Dashboard' ? true : false"
            >
                <div class="icon icon-shape icon-sm border-radius-md d-flex align-items-center me-2">
                    <i class="fa fa-th-large"></i>
                </div>
                <span class="nav-link-text ms-1">Menu</span>
            </a>
            <div
                class="collapse"
                :class="{'show': selectedParent == 'Dashboard'}" 
                id="dashboardsExamples"
            >
                <ul class="nav ms-4 ps-3">
                    <li class="nav-item" :class="{'active': selectedPage == 'Dashboard'}">
                        <router-link
                            class="nav-link"
                            :class="{'active': selectedPage == 'Dashboard'}"
                            to="/admin/dashboard"
                        >
                            <span class="sidenav-mini-icon"> D </span>
                            <span class="sidenav-normal"> Dashboard </span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </li>
        <li class="nav-item">
            <a
                data-bs-toggle="collapse"
                href="#adminExpand"
                class="nav-link"
                :class="{'active': selectedParent == 'Language'}"
                aria-controls="adminExpand"
                role="button"
                :aria-expanded="selectedParent == 'Language' ? true : false"
            >
                <div class="icon icon-shape icon-sm border-radius-md d-flex align-items-center me-2">
                    <i class="fa fa-check-circle"></i>
                </div>
                <span class="nav-link-text ms-1">Admin</span>
            </a>
            <div 
                class="collapse"
                :class="{'show': selectedParent == 'Language'}"
                id="adminExpand"
            >
                <ul class="nav ms-4 ps-3">
                    <li class="nav-item" :class="{'active': selectedPage == 'Language'}">
                        <router-link
                            class="nav-link"
                            :class="{'active': selectedPage == 'Language'}"
                            to="/admin/language"
                        >
                            <span class="sidenav-mini-icon"> B </span>
                            <span class="sidenav-normal"> Bahasa </span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </li>
        <li class="nav-item">
            <a data-bs-toggle="collapse" href="#generalExpand" class="nav-link" aria-controls="generalExpand" role="button" aria-expanded="false">
                <div class="icon icon-shape icon-sm border-radius-md d-flex align-items-center me-2">
                    <i class="fa fa-briefcase"></i>
                </div>
                <span class="nav-link-text ms-1">Umum</span>
            </a>
            <div class="collapse " id="generalExpand">
                <ul class="nav ms-4 ps-3">
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <span class="sidenav-mini-icon"> J </span>
                            <span class="sidenav-normal"> Jenis Alamat </span>
                        </a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="nav-item">
            <a data-bs-toggle="collapse" href="#akuntansiExpand" class="nav-link" aria-controls="akuntansiExpand" role="button" aria-expanded="false">
                <div class="icon icon-shape icon-sm border-radius-md d-flex align-items-center me-2">
                    <i class="fa fa-calendar"></i>
                </div>
                <span class="nav-link-text ms-1">Akuntansi</span>
            </a>
            <div class="collapse " id="akuntansiExpand">
                <ul class="nav ms-4 ps-3">
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <span class="sidenav-mini-icon"> J </span>
                            <span class="sidenav-normal"> Jenis Akun </span>
                        </a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="nav-item">
            <a
                data-bs-toggle="collapse"
                href="#purchaseExpande"
                class="nav-link" 
                :class="{'active': selectedParent == 'PurchaseOrder'}"
                aria-controls="purchaseExpande"
                role="button"
                :aria-expanded="selectedParent == 'PurchaseOrder' ? true : false"
            >
                <div class="icon icon-shape icon-sm border-radius-md d-flex align-items-center me-2">
                    <i class="fa fa-shopping-cart"></i>
                </div>
                <span class="nav-link-text ms-1">Pembelian</span>
            </a>
            <div
                class="collapse"
                :class="{'show': selectedParent == 'PurchaseOrder'}"
                id="purchaseExpande"
            >
                <ul class="nav ms-4 ps-3">
                    <li class="nav-item" :class="{'active': selectedPage == 'PurchaseOrder'}">
                        <router-link
                            class="nav-link"
                            :class="{'active': selectedPage == 'PurchaseOrder'}"
                            to="/admin/purchase-order"
                        >
                            <span class="sidenav-mini-icon"> P </span>
                            <span class="sidenav-normal"> Purchase Order </span>
                        </router-link>
                    </li>
                    <li class="nav-item" :class="{'active': selectedPage == 'PurchasingReport'}">
                        <router-link
                            class="nav-link"
                            :class="{'active': selectedPage == 'PurchasingReport'}"
                            to="/admin/purchasing-report"
                        >
                            <span class="sidenav-mini-icon"> R </span>
                            <span class="sidenav-normal"> Purchasing Report </span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </li>
        <li class="nav-item">
            <a data-bs-toggle="collapse" href="#depotExpand" class="nav-link" aria-controls="depotExpand" role="button" aria-expanded="false">
                <div class="icon icon-shape icon-sm border-radius-md d-flex align-items-center me-2">
                    <i class="fa fa-home"></i>
                </div>
                <span class="nav-link-text ms-1">Gudang</span>
            </a>
            <div class="collapse " id="depotExpand">
                <ul class="nav ms-4 ps-3">
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <span class="sidenav-mini-icon"> F </span>
                            <span class="sidenav-normal"> Form Permintaan Barang </span>
                        </a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="nav-item">
            <a data-bs-toggle="collapse" href="#suportSystemExpand" class="nav-link" aria-controls="suportSystemExpand" role="button" aria-expanded="false">
                <div class="icon icon-shape icon-sm border-radius-md d-flex align-items-center me-2">
                    <i class="fa fa-headphones"></i>
                </div>
                <span class="nav-link-text ms-1">Sistem Pendukung</span>
            </a>
            <div class="collapse " id="suportSystemExpand">
                <ul class="nav ms-4 ps-3">
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <span class="sidenav-mini-icon"> R </span>
                            <span class="sidenav-normal"> Repair Stock </span>
                        </a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="nav-item">
            <a data-bs-toggle="collapse" href="#salesExpand" class="nav-link" aria-controls="salesExpand" role="button" aria-expanded="false">
                <div class="icon icon-shape icon-sm border-radius-md d-flex align-items-center me-2">
                    <i class="fa fa-shopping-cart"></i>
                </div>
                <span class="nav-link-text ms-1">Penjualan</span>
            </a>
            <div class="collapse " id="salesExpand">
                <ul class="nav ms-4 ps-3">
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <span class="sidenav-mini-icon"> S </span>
                            <span class="sidenav-normal"> Sales </span>
                        </a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="nav-item">
            <a data-bs-toggle="collapse" href="#HRExpand" class="nav-link" aria-controls="HRExpand" role="button" aria-expanded="false">
                <div class="icon icon-shape icon-sm border-radius-md d-flex align-items-center me-2">
                    <i class="fa fa-user-md"></i>
                </div>
                <span class="nav-link-text ms-1">HR</span>
            </a>
            <div class="collapse " id="HRExpand">
                <ul class="nav ms-4 ps-3">
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <span class="sidenav-mini-icon"> P </span>
                            <span class="sidenav-normal"> Posisi </span>
                        </a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="nav-item">
            <a data-bs-toggle="collapse" href="#productionExpand" class="nav-link" aria-controls="productionExpand" role="button" aria-expanded="false">
                <div class="icon icon-shape icon-sm border-radius-md d-flex align-items-center me-2">
                    <i class="fa fa-gift"></i>
                </div>
                <span class="nav-link-text ms-1">Produksi</span>
            </a>
            <div class="collapse " id="productionExpand">
                <ul class="nav ms-4 ps-3">
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <span class="sidenav-mini-icon"> K </span>
                            <span class="sidenav-normal"> Komposisi Bahan </span>
                        </a>
                    </li>
                </ul>
            </div>
        </li>
      </ul>
    </div>
  </aside>
</template>