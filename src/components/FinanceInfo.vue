<template>
  <a-table
    :columns="columns"
    :data-source="data"
    @change="onChange"
    :pagination="pagination"
    :key="data.id"
  />
  <a-list :grid="{ gutter: 16, column: 4 }" :data-source="listdata">
       <a-list-item slot="renderItem" slot-scope="item, index" :key="index">{{ item.content }}</a-list-item>
  </a-list>
</template>

<script>
const columns = [
  {
    title: "平台",
    dataIndex: "platform",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.platform - b.platform,
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

export default {
  data() {
    return {
      data: [],
      listdata: [],
      columns,
      szxTotal: 0,
      yxyTotal: 0,
      total: 0,
      pagination: { total: 100, pageSize: 100 },
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        name: "",
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  created() {
    this.initList();
  },
  mounted() {
    this.fetch();
  },
  methods: {
    onSubmit() {
      console.log("submit!", this.form);
    },
    jump() {
      router.push("/admin");
    },
    onChange() {
      console.log("params", pagination, filters, sorter);
    },
    initList() {
      this.listdata = [
        {
          title: "总计",
        },
      ];
    },
    fetch(params = {}) {
      
    },
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>