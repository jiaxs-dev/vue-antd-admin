<template>
  <div>
    <a-row style="margin: 0 -12px">
      <a-col style="padding: 0 12px" :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
        <div class="chartArea">
          <LineChart v-bind:chartData="LineChartData"/>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import LineChart from '../../components/charts/lineChart'

  export default {
    name: "ChartDemo",
    data() {
      return {
        LineChartData: {
          sourceData: [{month: 'Jan', Tokyo: 7.0, London: 3.9},
            {month: 'Feb', Tokyo: 6.9, London: 4.2},
            {month: 'Mar', Tokyo: 9.5, London: 5.7},
            {month: 'Apr', Tokyo: 14.5, London: 8.5},
            {month: 'May', Tokyo: 18.4, London: 11.9},
            {month: 'Jun', Tokyo: 21.5, London: 15.2},
            {month: 'Jul', Tokyo: 25.2, London: 17.0},
            {month: 'Aug', Tokyo: 26.5, London: 16.6},
            {month: 'Sep', Tokyo: 23.3, London: 14.2},
            {month: 'Oct', Tokyo: 18.3, London: 10.3},
            {month: 'Nov', Tokyo: 13.9, London: 6.6},
            {month: 'Dec', Tokyo: 9.6, London: 4.8}],
          type: 'fold',
          fields: ['Tokyo', 'London'],
          key: 'city',
          value: 'temperature',
          dataKey: 'month',
          height: 300
        }
      }
    },
    components: {
      LineChart
    },
    mounted() {
      //this.putData()
    },
    methods: {
      putData() {
        this.lineChartData = {
          sourceData: [{month: 'Jan', Tokyo: 7.0, London: 3.9},
            {month: 'Feb', Tokyo: 6.9, London: 4.2},
            {month: 'Mar', Tokyo: 9.5, London: 5.7},
            {month: 'Apr', Tokyo: 14.5, London: 8.5},
            {month: 'May', Tokyo: 18.4, London: 11.9},
            {month: 'Jun', Tokyo: 21.5, London: 15.2},
            {month: 'Jul', Tokyo: 25.2, London: 17.0},
            {month: 'Aug', Tokyo: 26.5, London: 16.6},
            {month: 'Sep', Tokyo: 23.3, London: 14.2},
            {month: 'Oct', Tokyo: 18.3, London: 10.3},
            {month: 'Nov', Tokyo: 13.9, London: 6.6},
            {month: 'Dec', Tokyo: 9.6, London: 4.8}],
          type: 'fold',
          fields: ['Tokyo', 'London'],
          key: 'city',
          value: 'temperature',
          dataKey: 'month',
          height: 200
        }
      }
    }
  }
</script>

<style scoped>
  .chartArea {
    min-height: 300px;
  }
</style>
