<template>
    <div class="top-navbar">
        <!-- test code will remove soon-->
        <a class="active" href="#home"><font-awesome-icon icon="coffee" /></a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
    </div>
</template>

<script>
    export default {
        name: "TopNavbar"
    }
</script>

<style scoped lang="scss">
    .top-navbar {
        margin-left: 157px;
        padding-top: 5px;
        overflow: hidden;

        a {
            float: left;
            color: #020117;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 17px;
            &:hover {
                background-color: #ddd;
                color: black;
            }
            &:active {
                background-color: #4CAF50;
                color: white;
            }
        }
    }
</style>