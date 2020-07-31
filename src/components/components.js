import loading from './loading/loading.vue'
import edit from './edit/edit.vue'

export default Vue => {
    Vue.component('v-loading', loading);
    Vue.component('v-edit', edit);
}