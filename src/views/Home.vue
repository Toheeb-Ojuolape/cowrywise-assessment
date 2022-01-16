<template>
<div>
  <div class="searchcard">
    <SearchBar />
  </div>
  <ImageGridSkeleton v-if="loading" :images="images"/>
  <ImageGrid v-if="!loading" :images="images" />
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue"
import ImageGrid from "../components/ImageGrid.vue"
import ImageGridSkeleton from "../components/imageGridSkeleton.vue"
import { mapState } from "vuex";



export default {
  name: 'Home',
  components: {
    SearchBar,
    ImageGrid,
    ImageGridSkeleton
  },

  data(){
  },


    computed: {
    ...mapState({
       images:"images",
       loading:"loading"
    }),
  },

  created(){
    this.$store.dispatch("fetchPictures")
  }
}
</script>


<style lang="scss">
$primary-color:#dde2e9;

  .searchcard{
    padding:48px;
    background-color:$primary-color;
    text-align: center;
    margin:-8px;
}



/* If screen size is 600px wide, or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
 .searchcard{
    padding:48px auto 48px auto;
    background-color:$primary-color;
    text-align: center;
    margin:70px
}
}



</style>