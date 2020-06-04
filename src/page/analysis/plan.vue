<template>
  <div>
    <a-card :bordered="false" :body-style="{padding: '24px'}">
      <a-form-model layout="inline" :model="formInline" @submit.native.prevent>
        <a-form-model-item label="时间：">
          <a-range-picker
            :format="dateFormat"
            :ranges="{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }"
            @change="queryTimeChange"
          />
        </a-form-model-item>
        <a-form-model-item v-if="checked">
          <a-range-picker
            :format="dateFormat"
            :ranges="{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }"
            @change="compareTimeChange"
          />
        </a-form-model-item>
        <a-form-model-item>
          <a-checkbox :checked="checked" @change="checkSelected">
            {{ label }}
          </a-checkbox>
        </a-form-model-item>
      </a-form-model>

    </a-card>
    <a-card :bordered="false" :body-style="{padding: '24px'}">
      <v-chart :forceFit="true" :height="height" :width="width" :data="data" :scale="scale">
        <v-tooltip/>
        <v-axis/>
        <v-legend/>
        <v-smooth-line position="month*temperature" color="city" shape="smooth"/>
        <v-point position="month*temperature" color="city" shape="circle"/>
      </v-chart>
    </a-card>
    <a-card :bordered="false" :body-style="{padding: '24px'}">
      <Table
        :columns="columns"
        :dataSource="dataSource"
        :selectedRows="selectedRows"
        @change="onchange"
      />
    </a-card>
  </div>
</template>

<script>
  import Table from '../../components/table/table'
  import moment from 'moment'

  const DataSet = require('@antv/data-set')

  const sourceData = [
    {month: 'Jan', Tokyo: 7.0, London: 3.9},
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
    {month: 'Dec', Tokyo: 9.6, London: 4.8},
  ];

  const dv = new DataSet.View().source(sourceData);
  dv.transform({
    type: 'fold',
    fields: ['Tokyo', 'London'],
    key: 'city',
    value: 'temperature',
  });
  const data = dv.rows;

  const scale = [{
    dataKey: 'month',
    min: 0,
    max: 1,
  }];

  const columns = [
    {
      title: '规则编号',
      dataIndex: 'no'
    },
    {
      title: '描述',
      dataIndex: 'description'
    },
    {
      title: '服务调用次数',
      dataIndex: 'callNo',
      sorter: true,
      needTotal: true,
      customRender: (text) => text + ' 次'
    },
    {
      title: '状态',
      dataIndex: 'status',
      needTotal: true
    },
    {
      title: '更新时间',
      dataIndex: 'updatedAt',
      sorter: true
    }
  ]

  const dataSource = []

  for (let i = 0; i < 100; i++) {
    dataSource.push({
      key: i,
      no: 'NO ' + i,
      description: '这是一段描述',
      callNo: Math.floor(Math.random() * 1000),
      status: Math.floor(Math.random() * 10) % 4,
      updatedAt: '2018-07-26'
    })
  }
  export default {
    name: "plan",
    components: {
      Table
    },
    data() {
      return {
        data,
        scale,
        height: 400,
        width: "100%",
        columns: columns,
        dataSource: dataSource,
        selectedRowKeys: [],
        selectedRows: [],
        dateFormat: "YYYY-MM-DD",
        checked: false,
        label: "对比时间段",
        formInline: {
          queryTime: {
            startTime: '',
            endTime: ''
          },
          compareTime: {
            startTime: '',
            endTime: ''
          }
        }
      }
    },
    methods: {
      moment,
      queryTimeChange(date, dateString) {
        this.formInline.queryTime.startTime = dateString[0];
        this.formInline.queryTime.endTime = dateString[1];
      },
      compareTimeChange(date, dateString) {
        this.formInline.compareTime.startTime = dateString[0];
        this.formInline.compareTime.endTime = dateString[1];
      },
      checkSelected(e) {
        this.checked = e.target.checked;
      },
      onchange(selectedRowKeys, selectedRows) {
        this.selectedRowKeys = selectedRowKeys
        this.selectedRows = selectedRows
      }
    }
  }
</script>

<style scoped>
  
</style>
