<script setup>
import Title from '../components/TheDashboardTitle.vue'
import CardInfo from '../components/TheDashboardCardInfo.vue'
import CardSales from '../components/TheDashboardCardTableSales.vue'
import CardStatistics from '../components/TheDashboardCardStatistics.vue'
import { ref } from 'vue';

const labels = ref(["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"])
const datasets = ref([{
    label: "Mobile apps",
    data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
  },
  {
    label: "Websites",
    data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
  },
]);
</script>

<template>
  <div>
    <Title label="General Statistics"/>

    <div class="row">
      <div class="col-xl-6">
          <div class="row">
              <div class="col-sm-6 mb-4">
                <CardInfo 
                  title="Total Sales"
                  value="Rp348.500.000"
                  icon="money" 
                />
              </div>
              <div class="col-sm-6 mb-4">
                <CardInfo 
                  title="Total Pelanggan"
                  value="1.248"
                  icon="user-o" 
                />
              </div>
              <div class="col-sm-6 mb-4">
                <CardInfo 
                  title="Total Piutang"
                  value="Rp97.400.000"
                  icon="credit-card" 
                />
              </div>
              <div class="col-sm-6 mb-4">
                <CardInfo 
                  title="Total Transaksi"
                  value="6.923"
                  icon="cart"
                  iconType="ni ni-" 
                />
              </div>
          </div>
      </div>
      <div class="col-xl-6">
        <CardSales />
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-lg-6 mb-4">
        <CardStatistics 
          title="Sales overview"
          ids="chart-line"
          :datasets="datasets"
          :labels="labels"
        />
      </div>
      <div class="col-lg-6 mb-4">
        <CardStatistics 
          title="Pelanggan Baru"
          ids="chart-line2"
          :datasets="datasets"
          :labels="labels"
        />
      </div>
    </div>

  </div>
</template>