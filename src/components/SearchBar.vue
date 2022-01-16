<template>
    <div class="searchcard">
        <div class="searchcard">
        <form @submit.prevent="searchStuff()">
        <input type="text" v-model="search" label="Search" placeholder="Search for photo" />
        </form>
        </div>
    </div>
</template>





<script>


export default{
    data(){
        return{
            search:""
        }
    },
    methods:{
        searchStuff(){
            this.$store.dispatch("searching",this.search)
            this.$router.push('/search-results')
        }
    }
}
</script>



<style lang="scss">
input[type=text]{
  width: 100%;
  box-sizing: border-box;
  border: 2px solid white;
  border-radius: 4px;
  font-size: 16px;
  font-family:"Poppins";
  background-color: white;
  background:white;
  background-image: url('../assets/icons8-search-30.png');
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  padding: 16px 20px 16px 50px;
  border-radius:7px;
  box-shadow: 0 4px 8px 0 rgba(109, 109, 158, 0.2);
}

::-webkit-input-placeholder { /* Edge */
  color: black;
}

input[type=text]:focus{
    outline:none;
}



</style>