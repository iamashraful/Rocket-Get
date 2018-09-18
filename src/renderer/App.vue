<template>
    <div id="app">
        <side-navbar/>
        <top-navbar/>
        <router-view style="margin-left: 157px"></router-view>
    </div>
</template>

<script>
    import TopNavbar from "./views/TopNavbar";
    import SideNavbar from "./views/SideNavbar";

    export default {
        name: 'rocket-get',
        components: {SideNavbar, TopNavbar}
    }
</script>

<style lang="scss">
    #app {
        margin-top: -20px !important;
    }
</style>
