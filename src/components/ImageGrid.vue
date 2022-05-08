<template>
  <div class="container">
    <div class="grid">
      <div v-for="(picture, i) in images" :key="i">
        <div
          class="imageContainer"
          :class="
            'animate__animated animate__slow animate__fadeInUp animate__delay-' +
            i +
            's'
          "
        >
          <img class="imageStyle" :src="picture.urls.small" />
          <div class="textInImageContainer">
            <div class="flexDownload" style="padding: 0px 14px 10px 14px">
              <div>
                <p class="pictureName">{{ picture.user.name }}</p>
                <p class="pictureLocation">{{ picture.user.location }}</p>
              </div>

              <div style="float: right">
                <button class="downloadButton" @click="downloadImage(picture)">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAbklEQVRIiWNgGEngKAMDw38oPkysJkYSLPhPjl4mEiwgC4xaMGoBbS0oZ0BkLPQ8wIAmV0+uA9AtwYbJNpwYSyg2HJ8lVDMcmyVEG85MggVHGSAF3EEGBoZGkpw2CvAB5EoDW2ai2GyaFxVDHwAAvJEmWknL71UAAAAASUVORK5CYII="
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal start-->
    <div id="myModal" ref="modal" v-if="modal" class="modal">
      <span @click="modal = false" class="close">&times;</span>
      <div class="imageCard">
        <img
          :src="singlePicture.urls.small"
          style="width: 100%; border-radius: 16px 16px 0px 0px"
        />
        <div class="cardtext">
          <p>{{ singlePicture.user.name }}</p>
          <span>{{ singlePicture.user.location }}</span>
        </div>
      </div>
    </div>
    <!--Modal end -->
  </div>
</template>

<script>

export default {
  name: "ImageGrid",
  data() {
    return {
      modal: false,
      singlePicture: "",
    };
  },
  props: {
    images: {
      type: Array,
    },
  },

  created() {
    window.addEventListener("click", (e) => {
      if (e.target == this.$refs.modal) {
        this.modal = false;
      }
    });
  },
  methods: {
    showImage(e) {
      this.modal = true;
      this.singlePicture = e;
    },
    async downloadImage(e) {
       const image = await fetch(e.urls.regular)
      const imageBlog = await image.blob()
      const imageURL = URL.createObjectURL(imageBlog)
       var element = document.createElement('a');
       element.href=imageURL;
       element.setAttribute('download', e.user.name+".jpg");
       element.style.display = 'none';
       document.body.appendChild(element);
       element.click();
       document.body.removeChild(element)
         this.$swal({
        title:"Download Successful!",
        icon:"success",
        text:"Are you ready to tell a story about this picture? Then get started by tapping the button below",
        confirmButtonText:"Tell a Story",
      }).then((result) => {
        if(result.isConfirmed){
          window.open("https://tell.africa/write","_blank");
        }
      }).catch((error)=>{
        this.$swal({
          title:"Download Failed!",
          icon:"error",
          text:error.message,
        })
      })
     
    },
  },
};
</script>

<style lang="scss">
$white-color: white;

.pictureName {
  font-size: 17px;
}

.pictureLocation {
  font-size: 14px;
  margin-top: -5px;
}

/* for sm to md screens */
@media only screen and (max-width: 900px) {
  .container {
    display: flex;
    margin-top: -50px;
    justify-content: center;
    text-align: center;
    overflow-anchor: hidden;
  }

  .imageContainer {
    position: relative;
    text-align: start;
    color: $white-color;
    width: 100%;
    margin-bottom: 25px;
  }
  .imageStyle {
    border-radius: 16px;
    width: 100%;
  }
  .textInImageContainer {
    position: absolute;
    bottom: 4px;
    width: 100%;
    padding: 10px 0px 17px 0px;
    margin: 0px -7px 0px 0px;
    background: linear-gradient(to bottom, rgba(255, 0, 0, 0), rgb(12, 11, 11));
    border-radius: 16px;
  }

  .textInImageContainer p {
    margin: 0;
  }

  .textInImageContainer span {
    text-align: start;
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
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  }

  .close {
    display: none;
    color: black;
    font-size: 30px;
    font-weight: bold;
    float: right;
    margin: 2px;
    bottom: 10;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }

  .imageCard {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    background: $white-color;
    width: 90%;
    border-radius: 16px;
    margin: auto auto 130px auto;
  }

  .imageCard .cardtext {
    padding: 20px;
    text-align: start;
  }

  .imageCard .cardtext p {
    margin: 0;
    padding: 0;
    font-size: 20px;
    font-weight: 600;
  }
}

@media only screen and (min-width: 901px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 900px;
    margin: -50px auto;
  }

  .imageContainer {
    position: relative;
    text-align: start;
    color: $white-color;
  }
  .imageStyle {
    border-radius: 16px;
  }
  .textInImageContainer {
    position: absolute;
    bottom: 5px;
    width: 89%;
    padding: 10px 0px 17px 0px;
    margin: 0px -7px 0px 0px;
    background: linear-gradient(to bottom, rgba(255, 0, 0, 0), rgb(12, 11, 11));
    border-radius: 16px;
  }

  .textInImageContainer p {
    margin: 0;
  }

  .textInImageContainer span {
    text-align: start;
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
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  }

  .close {
    color: black;
    font-size: 50px;
    font-weight: bold;
    float: right;
    margin: 0px 50px 0px 50px;
    bottom: 10;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }

  .imageCard {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    background: $white-color;
    width: 40%;
    border-radius: 16px;
    margin: auto auto 130px auto;
  }

  .imageCard .cardtext {
    padding: 20px;
    text-align: start;
  }

  .imageCard .cardtext p {
    margin: 0;
    padding: 0;
    font-size: 20px;
    font-weight: 600;
  }
}

@media only screen and (min-width: 1366px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 1100px;
    grid-gap: 13px;
    margin: -50px auto;
  }

  .imageContainer {
    position: relative;
    text-align: start;
    color: $white-color;
  }
  .imageStyle {
    border-radius: 16px;
    width: 90%;
  }
  .textInImageContainer {
    position: absolute;
    bottom: 3px;
    width: 90%;
    padding: 10px 0px 17px 0px;
    margin: 0px -7px 0px 0px;
    background: linear-gradient(to bottom, rgba(255, 0, 0, 0), rgb(12, 11, 11));
    border-radius: 16px;
  }

  .textInImageContainer p {
    margin: 0;
  }

  .textInImageContainer span {
    text-align: start;
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
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  }

  .close {
    color: black;
    font-size: 50px;
    font-weight: bold;
    float: right;
    margin: 0px 50px 0px 50px;
    bottom: 10;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }

  .imageCard {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    background: $white-color;
    width: 40%;
    border-radius: 16px;
    margin: auto auto 130px auto;
  }

  .imageCard .cardtext {
    padding: 20px;
    text-align: start;
  }

  .imageCard .cardtext p {
    margin: 0;
    padding: 0;
    font-size: 20px;
    font-weight: 600;
  }
}

.flexDownload {
  display: flex;
  justify-content: space-between;
}

.downloadButton {
  border: 1px solid white;
  border-radius: 50px;
  padding: 16px 18px;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>
