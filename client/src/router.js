import Vue from 'vue';
import Router from 'vue-router';
import Search from './components/Search';
import Players from './components/Players';
import Matches from './components/Matches';
Vue.use(Router);

export default new Router({
    mode:'history',
    routes:[
        {
            path: '/',
            name: 'search',
            component: Search
        },
        {
            path: '/players/:account_id',
            name: 'players',
            component: Players
        },
        {
            path: '/matches/:match_id',
            name: 'matches',
            component: Matches
        },
        
    ]
});