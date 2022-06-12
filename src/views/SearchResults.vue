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
   <div class="buttonContainer">
  <button v-if="page > 1" @click="prevSearch()" class="button">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA9ElEQVRIie3WMUpDQRAG4A9BrOwEwcrCA9hYWqVKq43ewXgJ4yGs9Ao5gJJGUPEMgoFUYieCKHkWz8DbJaCoO49Afth2P2bZnR0WmZOs4hbV17qKQJcwaKAV7iPg0wx9xlZpdB+TBvqOTml0Gy/Sao9Ko+sYZeh5aXQZwwy9xkpp+CxDH9UnUDTHGfqKndJoR31rp+gEB6XRTTxJqz0pjcJdhg7UHevP+W6T6j+Q32TWUfej8F28SS/XYRTe08JzmiZvIGNsRMCttUxYw0OGX0TAzP4We1H4nnQQ+EA3Cu9Lqw4ZfWhx2KMeb28a8GUUvMiP8wl+P2e4Vi0+4AAAAABJRU5ErkJggg=="/>
    </button>
  <button @click="nextSearch()" class="button"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAlklEQVRIie3UsQ3CUAyE4U/MQKCCYUCipSFMEwYKFYvAFCAhGCIUoUieoLMrOMmddb98z8/8FaQlLrhhnQFo0L3rgSoasBkAOhyjAdAWkDoaMMV9AHhiHg3ZGk9xigbQ558aVaXfpNStqo2nOHxrnESTI5QeUeoj7wvzNtL800ebRQLKaHaR5unHLv1cL3DGFato8x/XCwFMPpf5ayxcAAAAAElFTkSuQmCC"/></button>
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
       page:"page",
       searchValue:"searchValue"
    }),
  },

  methods:{
    goBack(){
      this.$router.go(-1)
    },
    prevSearch(){
      if(this.page > 1){
      window.scroll(0,0)
      this.$store.dispatch("prevSearch")
      }
    },
    nextSearch(){
      window.scroll(0,0)
      this.$store.dispatch("nextSearch")
    }
  }

}
</script>


<style lang="scss">

$primary-color:#dde2e9;

 .searchHeader{
     color:#283a5a;
     font-weight:800 !important;
     font-size:34px;
     text-align:start
 }
  .searchcard{
    padding:48px 54px 48px 54px;
    background-color:$primary-color;
    margin:-8px;
}



/* If screen size is 600px wide, or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
 .searchcard{
    padding:48px 20px 48px 20px;
    background-color:$primary-color;
    margin:-8px
}
}



</style>