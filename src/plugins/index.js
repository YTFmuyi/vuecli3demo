import service from './axios/index'
import util from '@/libs/util'
import urlprefix from '@/config/config.url.js'
import Vue from 'vue'
Vue.use({
    async install (Vue) {
        Vue.prototype.$log={
            ...util.log,
        };
        Vue.prototype.$urlprefix={
            ...urlprefix,
        };
        Vue.prototype.$cookie={
            ...util.cookies,
        };
        Vue.prototype.$axios=service;
    }
})