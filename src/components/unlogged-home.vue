<template>
  <div class="mainContent" >
    <section class="banner">
      <v-container fluid class="d-flex align-center">
        <div class="centerBanner mt-16">
          <v-row class="d-flex justify-center">
            <v-col cols="12" sm="12">
              <h1 class="text-center text-h4 pt-8 font-weight-regular white-text">Bienvenido a Roomies!</h1>
              <h2 class="text-center text-h4 pt-4 pb-3 font-weight-thin white-text">Encuentra tu lugar ideal</h2>
            </v-col>
            <v-col class="d-flex pr-1" cols="12" sm="3">
              <v-select label="Departamento" solo></v-select>
            </v-col>
            <v-col class="d-flex pl-1 pr-1" cols="12" sm="3">
              <v-select label="Provincia" solo></v-select>
            </v-col>
            <v-col class="d-flex pl-1" cols="12" sm="3">
              <v-select label="Distrito" solo></v-select>
            </v-col>
            <v-col class="pb-6" cols="12" sm="5">
              <v-btn color="amber lighten-1" elevation="2" x-large>BUSCAR</v-btn>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </section>
    <v-container fluid id="background">
      <p class="text-center text-h4 mb-8 mt-8"><b>Compartida la vida es más bonita</b></p>
      <v-row class="d-flex justify-center pb-5">
        <v-col cols="12" sm="4">
          <v-card id="roomie-back">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">Tu compañero ideal</v-card-title>
                <hr>
                <v-card-subtitle class="text--white">Roomies cuenta con una variedad de filtros para
                  encontrar al roomate que tenga mayor compatibilidad contigo.</v-card-subtitle>
              </div>
              <v-avatar class="ma-3" size="125" tile>
                <v-img src="https://cathriel.github.io/Aplicaciones_Web/img/friends.png"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card id="home-back">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">Tu hogar soñado</v-card-title>
                <hr>
                <v-card-subtitle>Roomies te ofrece una gran cantidad de anuncios de
                  inmuebles para compartir con tu roomate, en alquiler.</v-card-subtitle>
              </div>
              <v-avatar class="ma-3" size="125" tile>
                <v-img src="https://cathriel.github.io/Aplicaciones_Web/img/home.png"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>

    </v-container>

    <v-card-text class="text-left text-h6 pt-7">Últimas publicaciones</v-card-text>
    <v-sheet class="mx-auto" elevation="8" >
      <v-slide-group  class="pa-2" show-arrows>
        <v-slide-item v-for="post in posts" :key="post.id"  v-slot="{ active, toggle }">
          <v-card   class="ma-3 " width="10%" @click="toggle" >
            <v-img :src="post.photo" height="200px" style="float: right; margin: 0px 0px 15px 15px;">
              <v-card-actions>
                <v-btn icon color="white" >
                  <v-icon>mdi-heart-outline</v-icon>
                </v-btn>
              </v-card-actions>
            </v-img>
            <v-card-title >S/ {{post.price}}</v-card-title>
            <v-card-subtitle style="font-size: 120%; " >{{post.district}}, {{post.province}}</v-card-subtitle>
            <v-card-subtitle class="my-0 text-sm-body-1" v-text="post.description"></v-card-subtitle>
            <v-card-text>
            </v-card-text>
            <v-card-actions>
              <v-btn color="deep-purple lighten-2" text @click="navigateToDetailedPostId()">
                Descripción
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
import PostApiService from "@/services/posts-api.service";
export default {
  name: 'unlogged-home',

  data () {
    return{
      posts:[],
      displayPosts: [],

      cards: [
        { id: 1,src: 'https://q-ec.bstatic.com/images/hotel/max1024x768/193/193401125.jpg'},
        { id: 2,src: 'https://d3rny71whgunfp.cloudfront.net/eyJidWNrZXQiOiJyZXNlbS1wZSIsImtleSI6IjE2MDEzMzE2NzY4MDhfLTc2ODY1OTE0My5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjM1NCwiaGVpZ2h0IjoyNDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlfX19' },
        { id: 3,src: 'https://d3rny71whgunfp.cloudfront.net/eyJidWNrZXQiOiJyZXNlbS1wZSIsImtleSI6IjE1ODk2MTExOTE3MTFfMzkzMTY5OTk2LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODQwLCJoZWlnaHQiOjYzMCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOnRydWV9fX0=' },
        { id: 4,src: 'https://www.requieromicasaventas.com/wp-content/uploads/2019/09/Departamentos-en-venta-en-Surco.jpg'},
        { id: 5,src: 'https://static.tokkobroker.com/pictures/109555395905328607171649885392781135955452625865933643697834565602442661197831.jpg'},
        { id: 6,src: 'https://thumbs4.properati.com/VnfJV5Z3MC5uQENtv8wm9AtIvOU=/360x270/filters:strip_icc()/https%3A%2F%2Fcdn-us.inmokey.com%2Fproperties%2F8%2F3%2Fp-664283-010221102612-885390.jpeg' },
        { id: 7,src: 'https://d2f2b72of8fmj1.cloudfront.net/1562901965801_15602006.jpeg'},
        { id: 8,src: 'https://img-us-1.trovit.com/img1pe/X1hs10l16B1Y/X1hs10l16B1Y.1_11.jpg' },
        { id: 9,src: 'https://www.bienesonline.com/peru/photos/venta-de-iluminado-y-espacioso-departamento-en-surco-DEV333171618799274-324.jpg'},
        { id: 10,src: 'https://static.tokkobroker.com/pictures/47168099978317268818807495368407560918424258965754953793026510610240177842409.jpg'},
      ],

    }
  },

  created() {
    this.retrievePosts();
  },

  methods:{
    retrievePosts(){
      PostApiService.getAll()
          .then(response => {
            this.posts = response.data;
            this.displayPosts = response.data.map(this.getDisplayPost);
          })
          .catch((e) => {
            console.log(e);
          });
    },

    navigateToDetailedPost() {
      this.$router.push({name: 'detailed-post'});
    },

    navigateToDetailedPostId() {
      this.$router.push({name: 'login'});
    },

    getDisplayPost(post) {
      return {
        id: post.id,
        title: post.title,
        address: post.address,
        province:post.province,
        district:post.district,
        department:post.department,
        price:post.price,
        roomQuantity:post.roomQuantity,
        bathroomQuantity:post.bathroomQuantity,
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
        landlordId:post.landlordId,
      };
    },

  },

  mounted() {
    this.retrievePosts();
  }

}
</script>

<style scoped>
#background {
  background-color: #F8F2FE;
}

#roomie-back{
  background-color: #AC8AA8;
}

#home-back{
  background-color: #FDC84C;
}

.white-text {
  color: white;
}

.banner{
  width: 100%;
  height: 560px;
  background-image: url('../assets/Fondo.jpg');
  background-position: center;
  background-size: cover;
}

.centerBanner{
  max-width: 80%;
  align-content: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  background-color: rgba(0,0,0,0.3);
  position: center;
  border-radius: 10px;
  height: 60%;
}
</style>
