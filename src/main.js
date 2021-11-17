import Vue from "vue";
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/en";
import "element-ui/lib/theme-chalk/index.css";
import ECharts from "vue-echarts";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import { GridComponent, TooltipComponent } from "echarts/components";

use([CanvasRenderer, BarChart, GridComponent, TooltipComponent]);
Vue.component("v-chart", ECharts);

Vue.config.productionTip = true;
Vue.use(ElementUI, { locale });
Vue.use(VueAxios,axios)

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
