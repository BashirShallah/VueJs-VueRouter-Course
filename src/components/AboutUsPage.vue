<template>
    <div>
        <h1>About Us Page</h1>

        <button @click="goToHome">Go To Home After 1 sec</button>
    </div>
</template>

<script>
export default {
    methods:{
        goToHome: function(){
            const self = this;

            setTimeout(function(){
                self.$router.push({path: "/"});
            }, 1000);
        }
    },
    beforeRouteEnter(to, from, next){
        console.log('beforeRouteEnter: inside aboutUs component');
        next();
    },
    beforeRouteLeave(to, from, next){
        console.log("beforeRouteLeave: inside aboutUs component");
        
        if( confirm("sure?") ){
            next();
        }
    }
}
</script>