import './reactApp.jsx';
import my from './my.js'
import '../stylesheets/main.scss'

console.log(add(5, 9));
console.log('hoge');

import add from './add.ts';
import Vue from 'vue';
import VueApp from './VueApp.vue';

new Vue({
    el: '#vue-root',
    render: (h) => h(VueApp),
});

my();
