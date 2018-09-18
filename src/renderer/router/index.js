import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/views/LandingPage'
import DownloadingView from '@/views/DownloadingView'
import QueuedView from '@/views/QueuedView'
import FinishedView from '@/views/FinishedView'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '',
            name: 'LandingPage',
            component: LandingPage
        },
        {
            path: '/downloading',
            name: 'DownloadingView',
            component: DownloadingView
        },
        {
            path: '/finished',
            name: 'FinishedView',
            component: FinishedView
        },
        {
            path: '/queued',
            name: 'QueuedView',
            component: QueuedView
        },
        {
            path: '*',
            redirect: '/downloading'
        }
    ]
})
