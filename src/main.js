import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Antd from 'ant-design-vue';
import { Button, Card, Checkbox, ConfigProvider, DatePicker, Form, Input, List, Pagination, Radio, Select, Switch, Table } from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
const app = createApp(App)
const ListItem = List.Item;
app.config.productionTip = false;
app.use(router)
app.use(Select);
app.use(Switch);
app.use(Card);
app.use(ConfigProvider);
app.use(Radio);
app.use(DatePicker);
app.use(Checkbox);
app.use(Input);
app.use(List);
app.use(ListItem);
app.use(Table);
app.use(Pagination);
app.use(Form);
app.use(Button);
app.mount('#app')