<template>
  <div class="mainContent">
    <p class="text-center text-h4 pt-8">Bienvenido Arrendatario</p>
    <p class="text-center text-h4 mb-5"><b>{{ currentUser.firstName + ' ' + currentUser.lastName }} </b></p>

    <v-card-text class="text-left text-h6">Inmuebles similares a los que visitaste</v-card-text>

    <v-sheet class="mx-auto" elevation="8" >
      <v-slide-group  class="pa-2" show-arrows>
        <v-slide-item v-for="post in posts" :key="post.id"  v-slot="{ active, toggle }">
          <v-card   class="ma-3 " width="10%" @click="toggle" >
            <v-img :src="post.photo" height="200px" style="float: right; margin: 0px 0px 15px 15px;">
              <v-card-actions>
                <v-btn icon color="white" @click="saveFavourite(getCurrentUserId, post.id)">
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
              <v-btn color="deep-purple lighten-2" text @click="navigateToDetailedPostId(post.id)">
                Descripción
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>


    <v-card-text class="text-left text-h6 pt-7">Roomies que quizás quieras conocer</v-card-text>
    <v-sheet class="mx-auto" elevation="8" >
      <v-slide-group  class="pa-2" show-arrows>
        <v-slide-item v-for="roomie in roomies2" :key="roomie.id"  v-slot="{ active, toggle }">
          <v-card   class="ma-3 " width="10%" @click="toggle" >
            <v-img :src="roomie.profilePicture" height="200px" style="float: right; margin: 0px 0px 15px 15px;">
              <v-card-actions>
              </v-card-actions>
            </v-img>
            <v-card-title >{{roomie.name}} {{roomie.lastName}}</v-card-title>
            <v-card-subtitle style="font-size: 120%; " >{{roomie.department}}, {{roomie.district}}</v-card-subtitle>
            <v-card-subtitle class="my-0 text-sm-body-1" >{{roomie.description}}</v-card-subtitle>
            <v-card-text>
            </v-card-text>
            <v-card-actions>
              <v-btn color="deep-purple lighten-2">
                Contactar
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
import LeaseholderApiService from "@/services/leaseholder-api.service";
import FavouritePostsApi from "../services/favourite-posts-api.service";

export default {
  name: 'main-content-leaseholder',

  computed: {
    currentUser() {
      console.log(this.$store.state.auth.user);
      return this.$store.state.auth.user;
    },

    getCurrentUserId() {
      return this.currentUser.result.id;
    }
  },

  data () {
    return{
      posts:[],
      roomies2:[],

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
      cards2: [
        { id: 8,src: 'https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg'},
        { id: 9,src: 'https://image.freepik.com/foto-gratis/apuesto-joven-deportista-alegre-tiene-cuerpo-deportivo-brazos-musculosos-viste-camiseta-blanca-simulada-tiene-pelo-corto-oscuro-sonrisa-atractiva-dientes-sobre-pared-purpura-espacio-copia-blanco-lado_273609-26661.jpg' },
        { id: 10,src: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/FD27/production/_101970846_aubreyblanche.jpg' },
        { id: 12,src: 'https://images.unsplash.com/photo-1605038593290-475661bfbba3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'},
        { id: 13,src: 'https://image.freepik.com/foto-gratis/retrato-guapo-sonriente-elegante-hipster-lumbersexual-empresario-modelo-hombre-vestido-ropa-chaqueta-jeans_158538-1736.jpg'},
        { id: 14,src: 'https://images.unsplash.com/photo-1605038593290-475661bfbba3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' },
        // { id: 15,src: 'https://d2f2b72of8fmj1.cloudfront.net/1562901965801_15602006.jpeg'},
        // { id: 16,src: 'https://img-us-1.trovit.com/img1pe/X1hs10l16B1Y/X1hs10l16B1Y.1_11.jpg' },
        // { id: 17,src: 'https://www.bienesonline.com/peru/photos/venta-de-iluminado-y-espacioso-departamento-en-surco-DEV333171618799274-324.jpg'},
        // { id: 18,src: 'https://static.tokkobroker.com/pictures/47168099978317268818807495368407560918424258965754953793026510610240177842409.jpg'},
      ],

    }
  },
  created() {
    this.retrievePosts();
    this.retrieveLeaseholders();
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
    navigateToDetailedPostId(id) {
      this.$router.push({name: 'detailed-post', params: { id: id}});
    },
    retrieveLeaseholders(){
      LeaseholderApiService.getAll()
          .then(response => {
            this.roomies2 = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
    },
    saveFavourite(Id, postid) {
      console.log(Id)
      FavouritePostsApi.assign(Id, postid);
    }
  },
  mounted() {
    this.retrievePosts();
    this.retrieveLeaseholders();
  }

}
</script>

<style scoped>
.buttons-container{
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
}

.first-information-container{
  padding-top: 25px;
  display: flex;
}

.first-information-container div p{
  padding-bottom: 0px;
  margin-bottom: 0px;
}
#similar-background{
  background-color: #FFDC4F;
  border-radius: 10px;
}

</style>
