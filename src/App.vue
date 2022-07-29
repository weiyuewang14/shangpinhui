<template>
    <div>
        <Header/>
        <!--路由组件的出口-->
        <router-view></router-view>
        <!-- Footer组件在Home和Search显示，其他的不显示 -->
        <Footer v-show="$route.meta.show"></Footer>
    </div>
</template>

<script>
    import Header from './components/Header/Header'
    import Footer from './components/Footer/Footer'

    export default {
        name: 'App',
        components: {
            Header,
            Footer
        },
        mounted() {
            //派发一个action，获取三级列表的仓库数据
            this.$store.dispatch('categoryList')
        }
    }
</script>

<style>
</style>
