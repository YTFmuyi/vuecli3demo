<template>
    <div>
        <!--当前页面用作刷新路由，即通过在进入本页面路由之前直接返回上一个路由达到刷新的目的-->
    </div>
</template>

<script>
    export default {
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.$router.replace(from.path)
            })
        }
    }
</script>

<style scoped>

</style>