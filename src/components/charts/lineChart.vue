<template>
  <v-chart :force-fit="true" :height="height" :data="data" :scale="scale">
    <v-tooltip/>
    <v-axis/>
    <v-legend/>
    <v-line position="month*temperature" color="city"/>
    <v-point position="month*temperature" color="city" :size="4" :v-style="style" :shape="'circle'"/>
  </v-chart>
</template>

<script>
  import 'viser-vue'

  const DataSet = require('@antv/data-set');

  export default {
    name: "lineChart",
    props: ['chartData'],
    data() {
      return {
        dataDemo: {
          sourceData: [],
          type: '',
          fields: [],
          key: '',
          value: '',
          dataKey: '',
          height: 400
        },
        data: [],
        scale: [],
        height: [],
        style: {stroke: '#fff', lineWidth: 1},
      }
    },
    mounted() {
      console.log(this.chartData)
      const dv = new DataSet.View().source(this.chartData.sourceData);
      dv.transform({
        type: this.chartData.type,
        fields: this.chartData.fields,
        key: this.chartData.key,
        value: this.chartData.value,
      });
      const data = dv.rows;

      const scale = [{
        dataKey: this.chartData.dataKey,
        min: 0,
        max: 1,
      }];

      this.data = data;
      this.scale = scale;
      this.height = this.chartData.height;
    },
    methods: {},
    beforeCreate() {
    }
  }
</script>

<style scoped>

</style>
