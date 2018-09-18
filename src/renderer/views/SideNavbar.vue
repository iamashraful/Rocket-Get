<template>
    <div class="sidenav">
        <div class="logo">
            <img src="/static/logo.png" width="75" alt="RocketGET Logo"/>
        </div>
        <div class="inline-link">
            <a>Processing</a>
            <a>Finished</a>
            <a>Queued</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SideNavbar"
    }
</script>

<style scoped>
    .sidenav {
        height: 100%;
        width: 156px;
        position: fixed;
        left: 0;
        background-color: #170b40 !important;
        overflow-x: hidden;
        padding-top: 20px;
    }

    .sidenav a {
        padding: 6px 8px 6px 16px;
        text-decoration: none;
        font-size: 22px;
        color: #818181;
        display: block;
    }

    .sidenav a:hover {
        color: #f1f1f1;
    }

    @media screen and (max-width: 450px) {
        .sidenav {
            padding-top: 15px;
        }

        .sidenav a {
            font-size: 13px;
            padding-left: 3px;
        }
    }

    .logo {
        width: 75px;
        margin: 0 auto;
    }
</style>