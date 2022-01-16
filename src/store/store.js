import { createStore } from "vuex";
import axios from "axios";



export default createStore({
  state: {
    images: [],
    searchValue:"",
    loading:true
  },
  mutations: {
    fetchPictures (state) {
      state.loading = true
      axios({
          method:"GET",
          url:"https://api.unsplash.com/search/photos?client_id=aJ--0d1eYOAJW7tN1X1kx1wZfXMYTMsyKfNEV1FlwIU&query=african",
          headers: {
            ContentType: "application/json",
          }
      }).then((response)=>{
         state.images =response.data.results.slice(0,8)
      })
      setTimeout(()=>{
        state.loading = false
      },2000)
    },
    searching (state,value){
        state.loading = true
        state.searchValue = value
        const searchImage = value.toLowerCase().trim();
          if (!searchImage){
            state.images
          } else{
            state.images =   state.images.filter(
                (image) =>
                  image.user.name.toLowerCase().indexOf(searchImage) > -1 
              )
          }
          setTimeout(()=>{
            state.loading = false
          },1000)
    }
  },

  actions:{
    fetchPictures: (context) => {
        context.commit("fetchPictures");
      },
    searching: (context,value) =>{
        context.commit("searching",value)
    }
  }
})


