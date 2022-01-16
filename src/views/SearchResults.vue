<template>
<div>
  <div class="searchcard">
    <div style="float:left;cursor:pointer" @click="goBack()">
      <img style="width:15px" src="https://img.icons8.com/external-kmg-design-outline-color-kmg-design/32/000000/external-left-arrows-kmg-design-outline-color-kmg-design-1.png"/>

      Back</div>
   <h2 class="searchHeader"> Search Results for <span style="color:#78869a">"{{searchValue}}"</span> </h2>
  </div>
  <ImageGridSkeleton v-if="loading" :images="images" />
  <ImageGrid v-if="!loading" :images="images" />
  </div>
</template>

<script>
import ImageGridSkeleton from "../components/imageGridSkeleton.vue"
import ImageGrid from "../components/ImageGrid.vue"
import { mapState } from "vuex";


export default {
  name: 'Home',
  components: {
    ImageGrid,
    ImageGridSkeleton
  },

  data(){
  },

    computed: {
    ...mapState({
       images:"images",
       loading:"loading",
       searchValue:"searchValue"
    }),
  },

  methods:{
    goBack(){
      this.$router.go(-1)
    }
  }

}
</script>


<style>

 .searchHeader{
     color:#283a5a;
     font-weight:800 !important;
     font-size:34px;
     text-align:start
 }
  .searchcard{
    padding:48px 54px 48px 54px;
    background-color:#dde2e9;
    margin:-8px;
}



/* If screen size is 600px wide, or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
 .searchcard{
    padding:48px 20px 48px 20px;
    background-color:#dde2e9;
    margin:-8px
}
}



</style>