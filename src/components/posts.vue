<template>
  <div>
    <v-app>
      <v-card >
        <div class="content">
          <div class="left">
            <v-card>
              <v-card-text>Ubicación</v-card-text>
              <v-col cols="12" md="12">
                <v-autocomplete v-model="dep" :items="listDepartment" dense filled label="Departamento"></v-autocomplete>
              </v-col>
              <v-container>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-autocomplete v-model="city" :items="listCity" dense filled label="Ciudad"></v-autocomplete>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-autocomplete v-model="dist" :items="listDistrict" dense filled label="Distrito"></v-autocomplete>
                  </v-col>
                </v-row>
              </v-container>
              <v-card-text>Precio (S/.)</v-card-text>
              <v-card-text>
                <v-row>
                  <v-col class="px-4">
                    <v-range-slider v-model="range_p" :max="max_p" :min="min_p" class="align-center" step="100">
                      <template v-slot:prepend>
                        <v-text-field :value="range_p[0]" class="mt-0 pt-0" single-line type="number" style="width: 60px" @change="$set(range_p, 0, $event)"></v-text-field>
                      </template>
                      <template v-slot:append>
                        <v-text-field :value="range_p[1]" class="mt-0 pt-0" single-line type="number" @change="$set(range_p, 1, $event)"></v-text-field>
                      </template>
                    </v-range-slider>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-text>Superficie (m^2)</v-card-text>
              <v-card-text>
                <v-row>
                  <v-col class="px-4">
                    <v-range-slider v-model="range_s" :max="max_s" :min="min_s" class="align-center" step="10">
                      <template v-slot:prepend>
                        <v-text-field :value="range_s[0]" class="mt-0 pt-0" single-line type="number" style="width: 60px" @change="$set(range_s, 0, $event)"></v-text-field>
                      </template>
                      <template v-slot:append>
                        <v-text-field :value="range_s[1]" class="mt-0 pt-0" single-line type="number" @change="$set(range_s, 1, $event)"></v-text-field>
                      </template>
                    </v-range-slider>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-text>Cantidad de Habitaciones</v-card-text>
              <v-container fluid>
                <v-radio-group v-model="roomQuantity"  row>
                  <v-radio
                      label="1"
                      value="1"
                      id = "radio-button-1"
                  ></v-radio>
                  <v-radio
                      label="2"
                      value="2"
                      id = "radio-button-2"
                  ></v-radio>
                  <v-radio
                      label="3+"
                      value="3"
                      id = "radio-button-3"
                  ></v-radio>
                </v-radio-group>
              </v-container>
              <v-card-text>Cantidad de Baños</v-card-text>
              <v-container fluid>
                <v-radio-group v-model="bathroomQuantity" row>
                  <v-radio
                      label="1"
                      value="1"
                      id = "radio-button-4"
                  ></v-radio>
                  <v-radio
                      label="2"
                      value="2"
                      id = "radio-button-5"
                  ></v-radio>
                  <v-radio
                      label="3+"
                      value="3"
                      id = "radio-button-6"
                  ></v-radio>
                </v-radio-group>
              </v-container>
            </v-card>
          </div>
          <div class="right"  >
            <v-container fluid>
              <v-row dense>
                <v-col v-for="post in filteredPosts"  :key="post.id" :cols="4">
                  <v-card height="450px" style="position: relative">
                    <v-img :src="post.photo" height="200px" style="float: right; width: 100%">
                      <v-card-actions>
                        <v-btn icon color="white" @click="saveFavourite(getLeaseholderId, post.id)">
                          <v-icon>mdi-heart-outline</v-icon>
                        </v-btn>
                      </v-card-actions>
                    </v-img>
                    <v-card-title >S/ {{post.price}}</v-card-title>
                    <v-card-subtitle style="font-size: 130%; " class="pb-1">{{post.district}}, {{post.province}}</v-card-subtitle>
                    <v-card-subtitle class="my-0 text-sm-body-1 pt-1" v-text="post.description"></v-card-subtitle>
                    <v-card-text class="pb-0" style="position: absolute; top: 350px;">
                      <v-container fluid>
                        <v-row>
                          <v-col cols="12" sm="6">
                            <p>
                              <v-icon>
                                mdi-bed
                              </v-icon>
                              {{post.roomQuantity}} Dorm.</p>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <p>
                              <v-icon>
                                mdi-shower
                              </v-icon>
                              {{post.bathroomQuantity}} Baños</p>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                    <v-card-actions style="position: absolute; top: 399px;">
                      <v-btn color="deep-purple lighten-2" text @click="navigateToDetailedPostId(post.id)">Descripción</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
        <v-pagination
            class="pagination"
            v-model="page"
            :length="5"
            color="grey"
            circle
        ></v-pagination>
      </v-card>
    </v-app>
  </div>
</template>


<script>
import PostApiService from "@/services/posts-api.service";
import FavouritePostsApi from "../services/favourite-posts-api.service";

export default {
  name: "posts",


  data: () => ({

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

        listDepartment: ['Lima','Arequipa','Lambayeque', 'Tacna','Piura','Ica','La Libertad','Loreto'],
        listCity: ['Lima','Arequipa','Callao','Lambayeque','Tacna','Piura','Ica',],
        listDistrict: ['Surco','Chorrillos','Miraflores','San Isidro','Los Olivos'],


        posts:[],
        displayPosts: [],

        min_p: 0,
        max_p: 5000,
        range_p: [0, 5000],

        min_s: 0,
        max_s: 1000,
        range_s: [0, 1000],

        page: 1,

        roomQuantity: '2',
        bathroomQuantity: '2',
        dep:'',
        city:'',
        dist:''
      }
  ),

  created() {
    this.retrievePosts();
  },

  computed: {
    filteredPosts: function () {

      return this.filterPostsByPrice(this.filterPostsByArea(this.filterRoom((this.filterBathroom(this.filterPostByDist(this.filterPostByCity(this.filterPostByDep(this.posts))))))));
    },
    currentUser() {
      console.log("VEREMOS EL STORE STATE AUTH USER");
      console.log(this.$store.state.auth.user);


      return this.$store.state.auth.user;
    },
    getLeaseholderId(){
      return this.currentUser.result.id;
    },
  },

  methods: {
    retrievePosts(){
      console.log("AAAAAAAAAAAA")
      PostApiService.getAll()
          .then(response => {
            console.log(response)
            this.posts = response.data;
            console.log(this.posts)
            this.displayPosts = response.data.map(this.getDisplayPost);
            console.log(this.displayPosts)
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
        bathroomQuantity:post.bathroomQuantity
      };
    },

    navigateToDetailedPost() {
      this.$router.push({name: 'detailed-post'});
    },

    navigateToDetailedPostId(id) {
      this.$router.push({name: 'detailed-post', params: { id: id}});
    },

    filterRoom:function(posts){
      var v1=this.roomQuantity;
      return posts.filter(post => (post.roomQuantity > v1-1 && post.roomQuantity <= v1 ? post : ''))
    },

    filterBathroom:function(posts){
      var v1=this.bathroomQuantity;
      return posts.filter(post => (post.bathroomQuantity > v1-1 && post.bathroomQuantity <= v1 ? post : ''))
    },

    filterPostsByPrice: function(posts){

      return posts.filter(posts => (posts.price > this.range_p[0] && posts.price < this.range_p[1]) ? posts : '')
    },

    filterPostsByArea: function(posts){
      return posts.filter(posts => (posts.price*0.1 > this.range_s[0] && posts.price*0.1 < this.range_s[1]) ? posts : '')
    },

    filterPostByDist: function(posts) {
      return posts.filter(post => !post.district.indexOf(this.dist))
    },

    filterPostByCity: function(posts) {
      return posts.filter(post => !post.province.indexOf(this.city))
    },

    filterPostByDep: function(posts) {
      return posts.filter(post => !post.department.indexOf(this.dep))
    },
    saveFavourite(Id, postid) {
      console.log(Id)
      FavouritePostsApi.assign(Id, postid);
    }
  },

  mounted() {

  }
}

</script>

<style scoped>

.content {
  width: 100%;
}

.left {
  padding-left: 10px;
  padding-top: 10px;
  margin-left: 10px;
  float: left;
  position: relative;
  width: 30%;
  height: auto;
}

.right {
  padding-top: 5px;
  padding-left: 5px;
  margin-left: 5px;
  float: left;
  width: 65%;
  height: auto;
}

.pagination {
  padding-top: 30px;
  padding-bottom: 30px;
}


</style>