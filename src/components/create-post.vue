<template>
  <v-container fluid>
    <v-row class="pb-10 pt-7 d-flex justify-center">
      <h1 class="text-h2">¡Da a conocer tu propiedad!</h1>
      <h2 class="text-h6 pt-3">Llena los siguientes datos de tu propiedad y comparte tu inmueble con todos nuestro Roomies.</h2>
    </v-row>

    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">Ubicación</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">Detalles</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">Multimedia</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="4">Confirmación</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-12" height="250px">
            <v-card-text class="text-center text-h4">¿Donde se encuentra ubicado tu inmueble? </v-card-text>
            <v-container fill-heigth fluid>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field v-model="address" filled rounded dense label="Calle y número"  hide-details="auto"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field v-model="department" filled rounded dense label="Departamento"  hide-details="auto"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field v-model="city" filled rounded dense label="Ciudad"  hide-details="auto"></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field v-model="district" filled rounded dense label="Distrito" hide-details="auto"></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card>

          <v-btn color="amber lighten-1" @click="e1 = 2">SIGUIENTE</v-btn>
          <v-btn class="cancel-btn" text>CANCELAR</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card class="mb-12" height="810px">
            <v-card-title primary-title class="justify-center text-h4" >Brinda más detalles de tu inmueble</v-card-title>
            <v-container fluid>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-card-text>Dormitorios</v-card-text>
                  <v-slider v-model="roomQuantity" color="orange" min="1" max="10" thumb-label></v-slider>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card-text>Baños</v-card-text>
                  <v-slider v-model="bathroomQuantity" color="orange" min="1" max="10" thumb-label></v-slider>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card-text>Medio Baños</v-card-text>
                  <v-slider v-model="halfBathroomQuantity" color="orange" min="1" max="10" thumb-label></v-slider>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card-text>Superficie</v-card-text>
                  <v-text-field v-model="area" filled rounded dense suffix="m^2"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card-text>Título</v-card-text>
                  <v-text-field v-model="title" filled rounded dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card-text>Descripción del Inmueble</v-card-text>
                  <v-text-field v-model="description" filled rounded dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card-text>Piso en el que se encuentra</v-card-text>
                  <v-text-field v-model="floorNumber" filled rounded dense></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card-text>Precio</v-card-text>
                  <v-text-field v-model="price" filled rounded dense prefix="S/."></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card-text>Antiguedad</v-card-text>
                  <v-radio-group class="pt-0 mt-0 pl-3" v-model="antiquity">
                    <v-radio-group column>
                      <v-radio label="A estrenar" value="radio-1"></v-radio>
                      <v-radio label="Usada" value="radio-2"></v-radio>
                    </v-radio-group>
                  </v-radio-group>
                </v-col>
              </v-row>
            </v-container>
          </v-card>

          <v-btn color="amber lighten-1" @click="e1 = 3">SIGUIENTE</v-btn>
          <v-btn class="cancel-btn" @click="e1 = 1" text>VOLVER</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card class="mb-12" height="465px">
            <v-card-title primary-title class="justify-center text-h3" >Multimedia</v-card-title>
            <v-spacer/>
            <v-card-text class="text-center text-h6">¡Agrega fotos y/o vídeos a tu anuncio!</v-card-text>
            <v-container fluid>
              <v-row class="pl-3 pr-3">
                <v-col cols="12" sm="12">
                  <v-text-field
                      v-model="photo"
                      placeholder="Link de la foto"
                      prepend-icon="mdi-camera"
                      label="Fotos de la propiedad"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12">
                  <v-file-input
                      filled
                      accept="video/mp4, video/avi, video/flv"
                      placeholder="Escoja un vídeo"
                      prepend-icon="mdi-video"
                      label="Vídeos de presentación"
                  ></v-file-input>
                </v-col>
                <v-col cols="12" sm="12">
                  <v-file-input
                      filled
                      accept="image/png, image/jpeg, image/bmp"
                      placeholder="Escoja una foto en 360 grados"
                      prepend-icon="mdi-camera-flip"
                      label="Fotos 360"
                  ></v-file-input>
                </v-col>
              </v-row>
            </v-container>
          </v-card>

          <v-btn color="amber darken-1"  @click="savePost();e1=4">PUBLICAR</v-btn>
          <v-btn class="cancel-btn" @click="e1 = 2" text>VOLVER</v-btn>
        </v-stepper-content>

        <v-stepper-content step="4" >
          <v-card max-width="60%"  id="succed-back" style="background-color: #f0f0f0" class="ma-auto justify-center align-center">
            <div>
              <v-card-title class="justify-center">¡Tu propiedad se publicó exitosamente!</v-card-title>
              <v-img class="mx-auto" max-width="90%" :src="cards[9]" height="300" ></v-img>
              <v-card-actions class="d-flex justify-center">
                <v-btn text @click="navigateToDetailedPostId(post)" class="my-4" elevation="2" style="color: white"  x-large id="button-back" >Ver Publicación</v-btn>
              </v-card-actions>
            </div>
          </v-card>
        </v-stepper-content>

      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script>
import PostApiService from '../services/posts-api.service';
import UserApiService from "../services/users-api.service";
// import posts from "@/components/posts";
export default {
  name: "create-post",
  data() {
    return {
      e1: 1,
      plans:[],
      displayPlans: [],
      post:0,
      displayPosts: [],
      profileId:0,
      address:'',
      department:'',
      city:'',
      district:'',
      roomQuantity:'',
      bathroomQuantity:'',
      halfBathroomQuantity:'',
      area:'',
      title:'',
      description:'',
      floorNumber:'',
      price:'',
      antiquity:'',
      photo:'',

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

  computed: {
    currentUser() {
      console.log(this.$store.state.auth.user);
      return this.$store.state.auth.user;
    },
  },
  methods:{
  async savePost(){
    await PostApiService.create(this.profileId,{
          title: this.title,
          description:this.description,
          address:this.address,
          department:this.department,
          province:this.city,
          district:this.district,
          roomQuantity:this.roomQuantity,
          bathroomQuantity:this.bathroomQuantity,
          price:this.price,
          photo:this.photo
        }).then((result)=>{
          console.log(result)
           this.post=result.data.id
          console.log(this.post)
        })
    },
    navigateToDetailedPost() {
      this.$router.push({name: 'unlogged-home'});
    },
    navigateToDetailedPostId(id) {
      this.$router.push({name: 'detailed-post', params: { id: id}});
    },
    getCurrentProfile(){
      UserApiService.getPerfilbyUserId(this.currentUser.id).then( (response) => {
        this.profileId=response.data.id;
      });
    }
  },
  created(){
    this.getCurrentProfile();
  },

}
</script>

<style scoped>

.cancel-btn {
  color: #DA1111;
}
#button-back{
  background-color: #742d5f;
}
</style>