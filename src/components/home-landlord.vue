<template>
  <div class="mainContent">
    <p class="text-center text-h4 pt-8">Bienvenido Arrendador</p>
    <p class="text-center text-h4 mb-5" ><b>{{currentuser.firstName + ' ' + currentuser.lastName}}</b></p>

    <v-card-text class="text-left text-h6">Última publicación realizada</v-card-text>

    <v-card max-width="auto"  style="height: 15em;margin: auto">
      <v-row dense>
        <v-col cols="12">
            <div class="d-flex flex-no-wrap justify-space-between align-self-center" style="margin: auto;background-color: #f8f4f4" >
              <div v-if="postsQ>0">
                <v-card-title  class="text-h5" >{{postsByLandlordId[length=postsByLandlordId.length-1].title}}</v-card-title>
                <v-card-subtitle >{{postsByLandlordId[length=postsByLandlordId.length-1].address}}</v-card-subtitle>
                <v-card-text class="text-justify text-subtitle-1">{{postsByLandlordId[length=postsByLandlordId.length-1].description}}</v-card-text>
                <v-card-actions>
                  <v-btn class="ml-2 mt-5"  medium elevation="3" style="background-color: #fba31a" > Ver mi anuncio </v-btn>
                </v-card-actions>
              </div>
              <div v-else>
                <v-card-title>Aún no tienes posts</v-card-title>
              </div>
              <v-avatar v-if="postsQ>0" class="mx-2"  size="240" tile >
                <v-img :src="postsByLandlordId[length=postsByLandlordId.length-1].photo" height="90%"></v-img>
              </v-avatar>
            </div>

        </v-col>
      </v-row>
    </v-card>

    <v-card-text class="text-left text-h6 pt-7">Últimos Reviews de tu publicación</v-card-text>
    <v-row justify="center">
      <v-expansion-panels popout>
        <v-expansion-panel v-for="review in reviews2" :key="review">
          <v-expansion-panel-header class="body-1">
            <v-row>
              <v-col>
                <a >{{review.leaseholder.name}} {{review.leaseholder.lastName}}</a>
                <v-icon class="align-self-end ml-3"
                        medium color="black">
                  mdi-message-text
                </v-icon>
              </v-col>
              <v-col class="text-right">
                <v-icon v-for="index in review.stars" :key="index"
                        class="align-self-end ml-1"
                        medium color="yellow darken-2">
                  mdi-star
                </v-icon>
              </v-col>
            </v-row>

          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <p v-text="review.date"></p>
            <p v-text="review.content"></p>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>

    <v-card-text class="text-left text-h6 pt-7 my-2">Inmuebles similares</v-card-text>
    <v-sheet class="mx-auto" elevation="8" >
      <v-slide-group class="pa-2" show-arrows>
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
              <v-btn color="deep-purple lighten-2" text @click="navigateToDetailedPostId(post.id)">
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
import LandlordPostsApiService from "@/services/landlord-posts-api.service";
import PostReviewsApiService from "@/services/post-reviews-api.service";
import PostApiService from "@/services/posts-api.service";
import UserApiService from "../services/users-api.service";
export default {
  name: 'main-content-landlord',

  computed: {
    currentUser() {
      console.log(this.$store.state.auth.user);
      return this.$store.state.auth.user;
    },
  },

  data () {
    return{
      postsByLandlordId:[],
      reviews2:[],
      length:0,
      profileId:0,
      postsQ:0,
      currentuser:'',
      item:
          {
            color: '#f0f0f0',
            src: 'https://img10.naventcdn.com/avisos/111/00/59/58/21/54/720x532/232252076.jpg',
            title: 'Inmueble con cocina,baño compartido, con 4 cuartos',
            dateCreation: '10/06/2021'
          },
      reviews: [
        {
          name: 'Mikel Abstred',
          stars: 2,
          description:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, " +
              "sed diam nonumy eirmod tempor invidunt ut labore et dolore " +
              "magna aliquyam erat, sed diam voluptua. At vero eos et accusam " +
              "et justo duo dolores et ea rebum. Stet clita kasd gubergren, " +
              "no sea takimata sanctus est Lorem ipsum dolor sit amet. " ,
          dateReviewed: '09/06/2021'

        },
        {
          name: 'Juax Garben',
          stars: 3,
          description:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, " +
              "sed diam nonumy eirmod tempor invidunt ut labore et dolore " +
              "magna aliquyam erat, sed diam voluptua. At vero eos et accusam " +
              "et justo duo dolores et ea rebum. Stet clita kasd gubergren, " +
              "no sea takimata sanctus est Lorem ipsum dolor sit amet. " ,
          dateReviewed: '08/06/2021'
        },
        {
          name: 'Zeno Sama',
          stars: 5,
          description:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, " +
              "sed diam nonumy eirmod tempor invidunt ut labore et dolore " +
              "magna aliquyam erat, sed diam voluptua. At vero eos et accusam " +
              "et justo duo dolores et ea rebum. Stet clita kasd gubergren, " +
              "no sea takimata sanctus est Lorem ipsum dolor sit amet. " ,
          dateReviewed: '11/06/2021'
        }
      ],
      roomies: [
        {
          name: 'Rio Roma',
          calification: 4.5,
          district: 'Miraflores',
          department: 'Lima',
          summary: 'Lorem asdsad ipsum iam nonumy eirmod tempor invidunt ' +
              'ut labore et dolore magna aliquyam erat, sed diam voluptua' +
              '. At vero eos et accusam et justo duo dolores et ea reb',
          profilePhoto: 'https://i.pinimg.com/originals/b9/69/76/b969765dd783e0989e23f2c9a634ac36.jpg'

        },
        {
          name: 'Ana Lopez',
          calification: 3.5,
          district: 'Barranco',
          department: 'Lima',
          summary: 'Lorem14221 ipsum iam nonumy eirmod tempor invidunt ' +
              'ut labore et dolore magna aliquyam erat, sed diam voluptua' +
              '. At vero eos et accusam et justo duo dolores et ea reb',
          profilePhoto: 'https://imagenes.milenio.com/5TTMebIc1A4YCdsMo3ebT6yutgk=/958x596/smart/https://www.milenio.com/uploads/media/2020/05/07/ariana-grande-interpuso-orden-alejamiento_0_21_705_437.jpg'
        },
        {
          name: 'Faarid Castro',
          calification: 4.5,
          district: 'Chorrillos',
          department: 'Lima',
          summary: 'Lorem i5235325psum iam nonumy eirmod tempor invidunt ' +
              'ut labore et dolore magna aliquyam erat, sed diam voluptua' +
              '. At vero eos et accusam et justo duo dolores et ea reb',
          profilePhoto: 'https://static4.abc.es/media/internacional/2021/04/19/pedrocastillo2-U301495321345P0G--1200x630@abc.jpg'

        },
        {
          name: 'Alfredo Palacios',
          calification: 2.5,
          district: 'San Isidro',
          department: 'Lima',
          summary: 'Lorem i12312312psum iam nonumy eirmod tempor invidunt ' +
              'ut labore et1 dolore magna aliquyam erat, sed diam voluptua' +
              '. At vero eos et accusam et justo duo dolores et ea reb',
          profilePhoto: 'https://madriddiferente.com/wp-content/uploads/2019/06/Moncloa-720x466.jpg'

        },
        {
          name: 'Bob Marley',
          calification: 4.2,
          district: 'Miraflores',
          department: 'Lima',
          summary: 'Lorem ip66767676sum iam nonumy eirmod tempor invidunt ' +
              'ut labore et dolore magna aliquyam erat, sed diam voluptua' +
              '. At vero eos et accusam et justo duo dolores et ea reb',
          profilePhoto: 'https://madriddiferente.com/wp-content/uploads/2019/06/Moncloa-720x466.jpg'

        }
      ],
      inmuebles: [
        {
          name: 'Calle Los Langostinos 458',
          district: 'San Juan de Miraflores',
          department: 'Lima',
          image:'https://img10.naventcdn.com/avisos/11/00/50/67/23/63/1200x1200/29572941.jpg',
          price:1500,
          calification:4,
          description: '今日はセックスしたい' +
              'でもあなたとだけ' +
              'どこにいますか' +
              'どこにいますか' +
              '今日はセックスしたい' +
              'でもあなたとだ'
        },
        {
          name: 'Calle Los Juanes 120',
          district: 'La Molina',
          department: 'Lima',
          image:'https://www.bienesonline.com/peru/photos/casa-salamanca-13722879290.jpg',
          price:950,
          calification:5,
          description: '今日はセックスしたい' +
              'でもあなたとだけ' +
              'どこにいますか' +
              'どこにいますか' +
              '今日はセックスしたい' +
              'でもあなたとだ'
        },
        {
          name: 'Av. El Sol 157',
          district: 'Chorrillos',
          department: 'Lima',
          description: '今日はセックスしたい' +
              'でもあなたとだけ' +
              'どこにいますか' +
              'どこにいますか' +
              '今日はセックスしたい' +
              'でもあなたとだ',

          image:'https://img10.naventcdn.com/avisos/111/00/60/46/98/52/720x532/246463138.jpg',
          price:1000,
          calification:3
        }
      ],
      posts:[],

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
  methods:{
    retrievePostsByLandlordId(){
      LandlordPostsApiService.getAll(this.profileId)
          .then(response => {
            this.postsByLandlordId = response.data;
            this.postsQ=response.data.length;
            console.log(response);
            this.retrievePosts();
          })
          .catch((e) => {
            console.log(e);
          });
    },

    retrieveReviewsByPostId(){
      PostReviewsApiService.getAll(1)
          .then(response => {
            this.reviews2 = response.data;
            console.log(this.postsByLandlordId[length-1].id);
          })
          .catch((e) => {
            console.log(e);
          });

    },
    retrievePosts(){
      PostApiService.getAll()
          .then(response => {
            this.posts = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
    },
    navigateToDetailedPostId(id) {
      this.$router.push({name: 'detailed-post', params: { id: id}});
    },

    getCurrentUser(){
      this.currentuser=this.currentUser;
      this.getCurrentProfile();
      console.log(this.currentuser);
    },
    getCurrentProfile(){
      UserApiService.getPerfilbyUserId(this.currentUser.id).then( (response) => {
        this.profileId=response.data.id;
        this.retrievePostsByLandlordId();
      });
    }
  },
  created(){
    this.getCurrentUser();
  },
  mounted() {
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
/**{*/
/*  border: 2px black solid;*/
/*}*/

</style>
