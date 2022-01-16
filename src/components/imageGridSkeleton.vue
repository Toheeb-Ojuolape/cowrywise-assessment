<template>
   <div class="container">
       <div class="grid">
        <div v-for="(picture, i) in images"
        :key="i">
        <div class="imageContainer" :class="'animate__animated  animate__fadeInUp'">
        <img class="imageStyle" :src="picture.urls.small">
        <div class="textInImageContainer">
        <div style="padding:0px 16px 19px 16px;position:fixed;bottom:0">
        <p class="pictureName">{{picture.user.name}} </p>
        <p class="pictureLocation">{{picture.user.name}}</p>
        </div>
        </div>
        </div>
        </div>
        </div>
      


<!-- Modal start-->
<div id="myModal" ref="modal" v-if="modal" class="modal">
    <span @click="modal=false" class="close">&times;</span>
  <div class="imageCard">
    <img :src="singlePicture.urls.small" style="width:100%;border-radius:16px 16px 0px 0px"/>
    <div class="cardtext">
    <p>{{singlePicture.user.name}} </p>
        <span>{{singlePicture.user.location}}</span>
   </div>
  </div>
   </div>
<!--Modal end -->

 </div>

    
</template>




<script>

export default{
    name:"ImageGrid",
    data(){
     return{
         modal:false,
         singlePicture:""
     }
    },
    props:{
        images:{
            type:Array
        }
    },

    created(){
        
        window.addEventListener('click',(e)=>{
        if(e.target == this.$refs.modal){
            this.modal = false
        }
        })
    },
    methods:{
        showImage(e,i){
            this.modal = true
            this.singlePicture = e
            console.log(i)
        },
      
    }
}


</script>

<style scoped>

.pictureName{
    font-size:17px;
    padding:5px;
    width:100%;
    border-radius:4px;
    background:#e6e6e6;
    color:#e6e6e6;
    margin-bottom:5px !important
}

.pictureLocation{
   font-size:14px;
   background:#e6e6e6;
   padding:4px;
   border-radius:4px;
   width:80%;
   color:#e6e6e6

}

/* for sm to md screens */
@media only screen and (max-width:900px) {
    .container{
    display:flex;
    margin:-50px 0px 0px 0px;
    justify-content: center;
    text-align:center;
    overflow-anchor: hidden;
}

.imageContainer{
  position: relative;
  text-align: start;
  color: white;
  width:100%;
  margin-bottom:25px
}
.imageStyle{
    border-radius:16px;
    width:100%
}
.textInImageContainer{
  position: absolute;
  bottom: 3px;
  width:100%;
  height:95%;
  padding:10px 0px 17px 0px;
  margin:0px -7px 0px 0px;
  background:#f5f5f5;
  border-radius:16px
}

.textInImageContainer p {
    margin:0
}

.textInImageContainer span{
    text-align:start;
}


.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}




.close {
  display:none;
  color: black;
  font-size: 30px;
  font-weight: bold;
  float:right;
  margin:2px;
  bottom:10
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.imageCard{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background: white;
    width:90%;
    border-radius:16px;
   margin:auto auto 130px auto
}

.imageCard .cardtext{
    padding:20px;
    text-align: start
}

.imageCard .cardtext p{
    margin:0;
    padding:0;
    font-size:20px;
    font-weight:600
}

 

 
}


@media only screen and (min-width:901px) {
   .grid{
       display:grid;
       grid-template-columns: repeat(2,1fr);
       max-width:900px;
       margin:-50px auto
   }


.imageContainer{
  position: relative;
  text-align: start;
  color: white;
  margin-bottom:25px
}
.imageStyle{
    border-radius:16px
}
.textInImageContainer{
  position: absolute;
  bottom: 3px;
  width:95%;
  height:96%;
  padding:10px 0px 17px 0px;
  margin:0px -7px 0px 0px;
  background:#f5f5f5;
  border-radius:16px
}

.textInImageContainer p {
    margin:0
}

.textInImageContainer span{
    text-align:start;
}


.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}




.close {
  color: black;
  font-size: 50px;
  font-weight: bold;
  float:right;
  margin:0px 50px 0px 50px;
  bottom:10
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.imageCard{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background: white;
    width:40%;
    border-radius:16px;
    margin:auto auto 130px auto
}

.imageCard .cardtext{
    padding:20px;
    text-align: start
}

.imageCard .cardtext p{
    margin:0;
    padding:0;
    font-size:20px;
    font-weight:600
}

 

 
}


@media only screen and (min-width:1366px) {
   .grid{
       display:grid;
       grid-template-columns: repeat(3,1fr);
       max-width:1100px;
       grid-gap:18px;
       margin:-50px auto
   }


.imageContainer{
  position: relative;
  text-align: start;
  color: white;
}
.imageStyle{
    border-radius:16px;
    width:90%
}
.textInImageContainer{
  position: absolute;
  bottom: 3px;
  width:90%;
  height:94%;
  padding:10px 0px 17px 0px;
  margin:0px -7px 0px 0px;
  background:#f5f5f5;
  border-radius:16px
}

.textInImageContainer p {
    margin:0
}

.textInImageContainer span{
    text-align:start;
}


.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}




.close {
  color: black;
  font-size: 50px;
  font-weight: bold;
  float:right;
  margin:0px 50px 0px 50px;
  bottom:10
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.imageCard{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background: white;
    width:40%;
    border-radius:16px;
    margin:auto auto 130px auto
}

.imageCard .cardtext{
    padding:20px;
    text-align: start
}

.imageCard .cardtext p{
    margin:0;
    padding:0;
    font-size:20px;
    font-weight:600
}

 

 
}




</style>