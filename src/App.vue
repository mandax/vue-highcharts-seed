<template>
  <div id="app">
    <h1>{{ title }}</h1>

    <highcharts :options="chartOptions" ref="highcharts"></highcharts>
  </div>
</template>

<script>
import chartOptions from './chart.options'

const title = 'Hey!'
const name = 'app'
const data = { title, chartOptions }

export default { name, data() { return data } }
</script>

<style>
h1 {
  font-weight: normal;
}
</style>
