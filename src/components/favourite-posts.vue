<template>
  <v-app>
    <h1 class="pt-5 ml-3 pb-5" style="font-size: x-large">Mis Anuncios Favoritos</h1>
    <v-divider></v-divider>
    <v-container fluid class="ma-3">
      <v-row dense>
        <v-col v-for="favouritePost in favouritePosts" :key="favouritePost.id" cols="12" sm="3" xs="1">
          <v-card height="450px">
            <v-img :src="cards[favouritePost.id]" height="200px" style="float: right; margin: 0px 0px 15px 15px;">
              <v-card-actions>
                <v-btn icon color="white" >
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-card-actions>
            </v-img>
            <v-card-title >S/ {{favouritePost.price}}</v-card-title>
            <v-card-subtitle style="font-size: 130%; " >{{favouritePost.district}}, {{favouritePost.province}}</v-card-subtitle>
            <v-card-subtitle class="my-0 text-sm-body-1" v-text="favouritePost.description"></v-card-subtitle>
            <v-card-actions>
              <v-btn color="deep-purple lighten-2" text @click="navigateToDetailedPostId(favouritePost.id)">Descripción</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

  </v-app>
</template>

<script>
import FavouritePostApiService from "@/services/favourite-posts-api.service";
import UsersApiService from "@/services/users-api.service";

export default {
  name: "favourite-posts",

  computed: {
    currentUser() {
      console.log(this.$store.state.auth.user);
      return this.$store.state.auth.user;
    },

    getCurrentUserId() {
      return this.currentUser.id;
    }
  },

  data: () => ({
    favouritePosts:[],
    displayFavouritePosts: [],
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
      { id: 11,src: 'https://img.nuroa.com/alquilo_lindo_departamento_amoblado_equipado_surco_8790124614867276716.jpg'},
      { id: 12,src: 'https://img10.naventcdn.com/avisos/11/00/00/50/79/95/1200x1200/3973715.jpg'},
    ],
  }),

  created() {
    this.retrieveFavouritePosts()
  },

  methods:{
    retrieveFavouritePosts(){
      UsersApiService.getPerfilbyUserId(this.getCurrentUserId)
          .then(response=>{
            console.log("Response data fp",response.data)
            FavouritePostApiService.getAllByLeaseholderId(response.data.id)
                .then(response => {
                  console.log(response.data)
                  this.favouritePosts = response.data.map(this.getDisplayPost);
                  console.log("Favourite Posts: ",this.favouritePosts);
                  return response.data;
                })
                .catch((e) => {
                  console.log(e);
                });
          }).catch((e)=>{
        console.log(e)
      });
    },
    navigateToDetailedPostId(id) {
      this.$router.push({name: 'detailed-post', params: { id: id}});
    },
    /*deleteFavourite(Id, postid) {
      console.log(Id)
      //FavouritePostsApi.unassign(Id, postid);
    }*/

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
        bathroomQuantity:post.bathroomQuantity
      };
    }

  },

  mounted() {
    this.retrieveFavouritePosts()
  }
}


</script>

<style scoped>

</style>>