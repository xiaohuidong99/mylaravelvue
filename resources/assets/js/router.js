import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            name:"index",
            path:'/',
            component: resolve =>void(require(['./components/ExampleComponent.vue'], resolve))
        },
        {
            name:"test",
            path:'/test',
            component: resolve =>void(require(['./components/TestComponent.vue'], resolve))
        },
        {
            name:"testone",
            path:'/testone',
            component: resolve =>void(require(['./components/TestoneComponent.vue'], resolve))
        },
        {
            name:"testtwo",
            path:'/testtwo',
            component: resolve =>void(require(['./components/TesttwoComponent.vue'], resolve))
        },
    ]
})