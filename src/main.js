import { createApp } from 'vue'
import './style.css'
import App from '../src/layouts/App.vue'
import { Button } from 'vant'
import router from './plugins/router'
import { Tabbar, TabbarItem, Swipe, SwipeItem, Cell, CellGroup, NavBar, Field , Collapse, CollapseItem} from 'vant'
import 'vant/lib/index.css'
import './plugins/uc-flexible'
const app = createApp(App)
app.use(Button)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Swipe)
app.use(SwipeItem)
app.use(Cell)
app.use(CellGroup)
app.use(NavBar)
app.use(Field)
app.use(Collapse)
app.use(CollapseItem)
app.use(router)
app.mount('#app')
