<!-- components/BarChart.vue -->
<script setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = {
  labels: ['Visitors', 'Borrowed', 'Overdue', 'Members'],
  datasets: [
    {
      label: 'Library Stats',
      backgroundColor: '#FF90BB',
      data: [1234, 168, 5, 600]
    }
  ]
}

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top'
    }
  }
}
</script>

<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>
