<template>
  <div id="app" >
    <v-app >
    <div style="background-color: #f8f8f8" class="content flex" >
          <v-carousel hide-delimiters cycle>
            <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
          <div class="buttons-container flex" >
            <v-btn elevation="2" x-large>Fotos</v-btn>
            <v-btn elevation="2" x-large>Videos</v-btn>
            <v-btn elevation="2" x-large>360°</v-btn>
          </div>
          <div class="left">
            <v-container fluid>
              <v-card class="py-4">
                <v-card-title>{{item.title}}</v-card-title>
                <v-card-subtitle>{{item.address}}</v-card-subtitle>
                <v-card class="ma-3">
                  <v-simple-table >
                    <template >
                      <thead>
                      <tr>
                        <th class="text-left">
                          Precio
                        </th>
                        <th class="text-left">
                          Dormitorios
                        </th>
                        <th class="text-left">
                          Baños
                        </th>
                        <th class="text-left">
                          m2
                        </th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td class="text-center">{{ item.price }}</td>
                        <td class="text-center">{{item.roomQuantity}}</td>
                        <td class="text-center">{{item.bathroomQuantity}}</td>
                        <td class="text-center">{{item.price*0.1}}</td>
                      </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-card>
                <v-card-title>Descripción</v-card-title>
                <v-card-text>{{item.description}}</v-card-text>
                <v-card-title>Normas de convivencia</v-card-title>
                <v-col v-for="rule in rules" :key="rule.id">
                  <v-card-text class="ruleTitle">{{rule.title}}</v-card-text>
                  <v-card-text>{{rule.description}}</v-card-text>
                </v-col>
                <v-card-title>Ubicación</v-card-title>
                <br>
                <GmapMap
                    :center='center'
                    :zoom='12'
                    style='width:100%;  height: 400px;'
                />

                <v-card-title> Reseñas </v-card-title>

                <v-row dense>
                  <v-col v-for="review in reviews" :key="review.id" >
                    <v-card max-width="50%" class="mx-4 rounded-lg" >
                      <v-card-text>{{review.date}}</v-card-text>
                      <v-card-text>{{review.content}}</v-card-text>
                      <v-divider></v-divider>
                      <v-card-text class="font-weight-bold">¿Fue útil esta reseña?</v-card-text>
                      <v-btn icon color="black" @click="like">
                        <v-icon>mdi-heart-outline</v-icon>
                      </v-btn>
                    </v-card>
                  </v-col>
                </v-row>


                <v-card-title>Datos del Arrendador</v-card-title>
                <v-card max-width="40%" class="ma-3">
                  <v-card-subtitle>Nombre: {{ item.landlord.name }} {{item.landlord.lastName}}</v-card-subtitle>
                  <v-card-subtitle>DNI: {{item.landlord.idCard}}</v-card-subtitle>
                  <v-card-subtitle>Celular: {{ item.landlord.cellPhone }}</v-card-subtitle>
                </v-card>
              </v-card>
            </v-container>
          </div>
          <div class="right">
            <v-container fluid>
              <v-card>
                <v-card-title>Contacta al arrendador</v-card-title>
                <v-card-text>
                  <v-btn block
                         rounded
                         color=#FBA31A
                         elevation="3"
                  >Contactar</v-btn>

                </v-card-text>
              </v-card>
            </v-container>
          </div>
        </div>
    <div class="center">
      <v-row>
        <v-col cols="12" sm="12">
          <h1 class="text-h5">Propiedades que te puedan interesar</h1>
        </v-col>
        <v-container fluid>
          <v-row dense>
            <v-col v-for="post in posts.slice(0,4)" :key="post.id" :cols="3">
              <v-card>
                <v-img :src="cards[post.id]" height="200px" style="float: right; margin: 0px 0px 15px 15px;">
                  <v-card-actions>
                    <v-btn icon color="white" @click="favourite(post.id)">
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
            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </div>
    </v-app>
  </div>
</template>

<script>


import PostApiService from "@/services/posts-api.service";
import PostReviewsAPiService from "@/services/post-reviews-api.service";
import LeaseholderApiService from "@/services/leaseholder-api.service";
import UsersApiService from "@/services/users-api.service";

export default {
  name: "detailed-post",

  data() {

    return {
      posts:[],
      displayPosts: [],
      reviews:[],
      displayReviews:[],
      item:[],
      rules:[],
      profileId:0,

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

      center: { lat: 45.508, lng: -73.587 },
      show:false,
      items: [
        {
          src: 'https://www.ikea.com/images/a-seaside-inspired-living-room-with-light-blue-walls-a-yello-1eb4947d7347f27fd44899946f62c8f7.jpg',
        },
        {
          src: 'https://images.homify.com/images/a_0,c_fill,f_auto,h_900,q_auto,w_1920/v1441129273/p/photo/image/728897/1_-_Day_/fotos-de-banos-de-estilo-clasico-de-homify.jpg',
        },
        {
          src: 'https://cdn11.bigcommerce.com/s-31djhj4ixx/images/stencil/1280x1280/products/2086/2983/Mocka_Darcy_Bed_-_Grey_7__41202.1593664401.jpg?c=1',
        },
        {
          src: 'https://www.haecker-kuechen.com/fileadmin/images/kitchen-styles/classic/malaga/malaga_graphit_header.jpg',
        },
      ],
    }
  },

  created() {
    this.retrievePosts();
    this.retrievePost();
    this.retrieveReviews();
  },

  computed: {
    currentUser() {
      console.log(this.$store.state.auth.user);
      return this.$store.state.auth.user;
    },

    getCurrentUserId() {
      return this.currentUser.id;
    }
  },

  methods:{
    favourite(postId){
      console.log("Entro aca")
      console.log("Current user", this.currentUser);
      console.log("Current user Id",this.getCurrentUserId);
      UsersApiService.getPerfilbyUserId(this.getCurrentUserId)
        .then(response=>{
          console.log("Luego aca")
          console.log(response.data)
          this.profileId=response.data.id;
          console.log("Profile: ",this.profileId," Post: ",postId)
          LeaseholderApiService.assignPost(this.profileId,postId)
              .then(response=>{
                console.log(response);
              }).catch((e)=>{
            console.log(e);
          });
        }).catch((e)=>{
          console.log(e)
      });
    }
    ,
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

    retrievePost(id){
      PostApiService.get(id)
          .then(response => {
            this.item = response.data;
            this.retrieveRules(id);
          })
          .catch((e) => {
            console.log(e);
          });
    },
    retrieveRules(id){
      PostApiService.getRules(id)
          .then(response => {
            this.rules = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
    },

    retrieveReviews(id){
      PostReviewsAPiService.getAll(id)
          .then(response => {
            this.reviews = response.data;
            this.displayReviews = response.data.map(this.getDisplayReview);
          })
          .catch((e) => {
            console.log(e);
          });
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

    getDisplayReview(review) {
      return {
        id: review.id,
        content: review.content,
        date:review.date,
      };
    },

    navigateToDetailedPost() {
      this.$router.push({name: 'detailed-post'});
    },

    navigateToDetailedPostId(id) {
      this.$router.push({name: 'detailed-post', params: { id: id}});
    }
},

  mounted() {
    this.retrievePosts();
    this.retrievePost(this.$route.params.id);
    this.retrieveReviews(this.$route.params.id);
  }
}
</script>

<style scoped>

.ruleTitle{
  font-weight: bold;
  font-size: 15px;
}

.center {
  padding: 2%;
  float: none;
}

.right {
  padding-left: 10px;
  padding-top: 10px;
  margin-left: 10px;
  float: left;
  position: relative;
  width: 30%;
  height: 100%;
}

.buttons-container{
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
}

.first-information-container div p{
  padding-bottom: 0px;
  margin-bottom: 0px;
}

.content {
  width: 100%;
}

.left {
  padding-left: 10px;
  padding-top: 10px;
  margin-left: 10px;
  float: left;
  position: relative;
  width: 65%;
  height: auto;
}

tr:hover {
  background-color: transparent !important;
}

table td {
  border-top: none;
}

table th + th { border-left:1px solid #dddddd; }
table td + td { border-left:1px solid #dddddd; }

</style>