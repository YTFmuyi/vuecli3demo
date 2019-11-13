<template>
    <div>
        大家好我是VAE
        <router-view/>
    </div>
</template>

<script>
    import { createNamespacedHelpers } from 'vuex'
    const { mapState } = createNamespacedHelpers('publicStore')
    export default {
        name: "homepage",
        computed:{
            ...mapState({
                name:state=>state.name
            })
        },
        mounted(){
            console.log(this.name)
            //console.log(this.$store.getters['publicStore/getName']);
            this.getData();
        },
        methods:{
            async getData(){
              let a =  await this.$axios.post("http:////ads.dhgate.com/sailplatform/base/shopping/index",{a:1},{notShowLoading:true}).then(data=>data).catch((data)=>data);
              console.log(a)
            }
        }
    }
</script>

<style scoped>

</style>