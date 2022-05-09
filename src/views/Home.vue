<template>
<div>
  <div class="searchcard">
    <SearchBar />
  </div>
  <ImageGridSkeleton v-if="loading" :images="images"/>
  <ImageGrid v-if="!loading" :images="images" />
  
  <div class="buttonContainer">
  <button v-if="page > 1" @click="prevPage()" class="button">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA9ElEQVRIie3WMUpDQRAG4A9BrOwEwcrCA9hYWqVKq43ewXgJ4yGs9Ao5gJJGUPEMgoFUYieCKHkWz8DbJaCoO49Afth2P2bZnR0WmZOs4hbV17qKQJcwaKAV7iPg0wx9xlZpdB+TBvqOTml0Gy/Sao9Ko+sYZeh5aXQZwwy9xkpp+CxDH9UnUDTHGfqKndJoR31rp+gEB6XRTTxJqz0pjcJdhg7UHevP+W6T6j+Q32TWUfej8F28SS/XYRTe08JzmiZvIGNsRMCttUxYw0OGX0TAzP4We1H4nnQQ+EA3Cu9Lqw4ZfWhx2KMeb28a8GUUvMiP8wl+P2e4Vi0+4AAAAABJRU5ErkJggg=="/>
    </button>
  <button @click="nextPage()" class="button"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAlklEQVRIie3UsQ3CUAyE4U/MQKCCYUCipSFMEwYKFYvAFCAhGCIUoUieoLMrOMmddb98z8/8FaQlLrhhnQFo0L3rgSoasBkAOhyjAdAWkDoaMMV9AHhiHg3ZGk9xigbQ558aVaXfpNStqo2nOHxrnESTI5QeUeoj7wvzNtL800ebRQLKaHaR5unHLv1cL3DGFato8x/XCwFMPpf5ayxcAAAAAElFTkSuQmCC"/></button>
  </div>
  <footer>
    <div class="center">
      <p class="footerText">Built with APIs from</p> <img  src="https://unsplash.com/blog/content/images/max/2560/1-vQ5EsgnJkANWb5fktHPwnw.jpeg" alt="unsplashlogo"/>
    </div>

  </footer>
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
       loading:"loading",
       page:"page"
    }),
  },

  created(){
    this.$store.dispatch("fetchPictures")
  },

  methods:{
    prevPage(){
      if(this.page > 1){
      window.scroll(0,0)
      this.$store.dispatch("prevPage")
      }
    },
    nextPage(){
      window.scroll(0,0)
      this.$store.dispatch("nextPage")
    }
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


.buttonContainer{
    display:flex;
    justify-content: space-between;
    width:75%;
    margin:90px auto
}

.buttonContainer .button{
  border:1px solid black;
  color:#000000;
  padding:30px 36px;
  background:white;
  cursor: pointer;
  border-radius:10px;
  margin-right:10px;
  display:flex
}

.center{
  display:flex;
  justify-content: center;
}

.center img{
  height:90px;
  width:150px;
  object-fit: cover;
}

.center .footerText{
  margin:40px 20px 0px 0px
}
</style>