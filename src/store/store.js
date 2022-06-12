import { createStore } from "vuex";
import axios from "axios";



export default createStore({
  state: {
    images: [],
    searchValue:"",
    loading:true,
    page:1
  },
  mutations: {
    fetchPictures (state) {
      state.loading = true
      axios({
          method:"GET",
          url:"https://api.unsplash.com/search/photos?client_id=aJ--0d1eYOAJW7tN1X1kx1wZfXMYTMsyKfNEV1FlwIU&query=african&per_page=20&page="+state.page,
          headers: {
            ContentType: "application/json",
          }
      }).then((response)=>{
        console.log(response)
         state.images =response.data.results
      })
      setTimeout(()=>{
        state.loading = false
      },2000)
    },
    searching (state,value){
        state.loading = true
        state.searchValue = value
        axios({
          method:"GET",
          url:"https://api.unsplash.com/search/photos?client_id=aJ--0d1eYOAJW7tN1X1kx1wZfXMYTMsyKfNEV1FlwIU&query="+value+"&query=african&per_page=20&page="+state.page,
          headers: {
            ContentType: "application/json",
          }
      }).then((response)=>{
        console.log(response)
         state.images =response.data.results
      })
          setTimeout(()=>{
            state.loading = false
          },1000)
    },

    prevPage(state){
      state.loading = true
      if(state.page > 1){
        state.page--
      axios({
        method:"GET",
        url:"https://api.unsplash.com/search/photos?client_id=aJ--0d1eYOAJW7tN1X1kx1wZfXMYTMsyKfNEV1FlwIU&query=african&per_page=20&page="+state.page,
        headers: {
          ContentType: "application/json",
        }
    }).then((response)=>{
      console.log(response)
       state.images =response.data.results
    })
    setTimeout(()=>{
      state.loading = false
    },2000)
    }
    else{
      return
    }
  },


  prevSearch(state){
    state.loading = true
    if(state.page > 1){
      state.page--
    axios({
      method:"GET",
      url:"https://api.unsplash.com/search/photos?client_id=aJ--0d1eYOAJW7tN1X1kx1wZfXMYTMsyKfNEV1FlwIU&query="+state.searchValue+"&query=african&per_page=20&page="+state.page,
      headers: {
        ContentType: "application/json",
      }
  }).then((response)=>{
    console.log(response)
     state.images =response.data.results
  })
  setTimeout(()=>{
    state.loading = false
  },2000)
  }
  else{
    return
  }
},

  nextPage(state){
    state.loading = true
      state.page++
    axios({
      method:"GET",
      url:"https://api.unsplash.com/search/photos?client_id=aJ--0d1eYOAJW7tN1X1kx1wZfXMYTMsyKfNEV1FlwIU&query=african&per_page=20&page="+state.page,
      headers: {
        ContentType: "application/json",
      }
  }).then((response)=>{
    console.log(response)
     state.images =response.data.results
  })
  setTimeout(()=>{
    state.loading = false
  },2000)
},


nextSearch(state){
  state.loading = true
    state.page++
  axios({
    method:"GET",
    url:"https://api.unsplash.com/search/photos?client_id=aJ--0d1eYOAJW7tN1X1kx1wZfXMYTMsyKfNEV1FlwIU&query="+state.searchValue+"&query=african&per_page=20&page="+state.page,
    headers: {
      ContentType: "application/json",
    }
}).then((response)=>{
  console.log(response)
   state.images =response.data.results
})
setTimeout(()=>{
  state.loading = false
},2000)
}

  },

  actions:{
    fetchPictures: (context) => {
        context.commit("fetchPictures");
      },
    searching: (context,value) =>{
        context.commit("searching",value)
    },
    prevPage: (context) => {
      context.commit("prevPage");
    },
    prevSearch: (context) => {
      context.commit("prevSearch");
    },

    nextPage: (context) =>{
      context.commit("nextPage");
    },
    nextSearch: (context) =>{
      context.commit("nextSearch");
    }
  }
})


