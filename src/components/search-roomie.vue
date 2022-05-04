<template>
  <v-row>
    <v-card width="30%" style="margin: 25px; padding: 10px" height="100%" >
      <v-card-title>Mensajes</v-card-title>
      <hr>
      <v-list three-line>
        <template v-for="(item, index) in itemss">
          <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>
          <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>
          <v-list-item v-else :key="item.title">
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-card>
      <v-slide-group center-active class="mx-auto" v-model="model" show-arrows style="width: 40%;">
        <v-slide-item v-for="leaseholder in leaseholders" :key="leaseholder.id"  v-slot="{ active, toggle }">
          <v-card  style="width: 12%;height: 30em" class="my-auto mx-4" @click="toggle"  >
            <v-img :src="cards[leaseholder.id-8].src" style="width:100%;height: 65%"></v-img>
            <v-card-title >{{leaseholder.name}} {{leaseholder.lastName}} </v-card-title>
            <v-card-subtitle style="font-size: 120%;margin-top: 3px"  >{{leaseholder.department}}, {{leaseholder.district}}</v-card-subtitle>
            <div style="width: 80%" class="mx-auto">
            <v-btn block color="#FBA31A" class="mx-auto" >
              Contactar
            </v-btn>
            </div>
          </v-card>
        </v-slide-item>
      </v-slide-group>
  </v-row>
</template>

<script>
import LeaseholderApiService from "@/services/leaseholder-api.service";

export default {
  name: "search-roomie",
  data () {
    return {
      leaseholders:[],
      displayLeaseholders: [],
      itemss: [
        { header: 'Chats' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Bruce B',
          subtitle: `¿Nos encontramos en Barranco?`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Angel Correa',
          subtitle: `Hola! Un gusto en conocerte.`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Hernando Perez',
          subtitle: '¿Cuánto estás dispuesto a pagar por un departamento?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Andrea Vargas',
          subtitle: ' Está bien.',
        }
      ],
      cards: [
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
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          name: 'nombre1',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          name: 'nombre2',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          name: 'nombre3',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          name: 'nombre4',
        },
      ]
    }
  },

  created() {
    this.retrieveLeaseholders();
  },

  methods:{
    retrieveLeaseholders(){
      LeaseholderApiService.getAll()
          .then(response => {
            this.leaseholders = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
    },

  },

  mounted() {
    this.retrieveLeaseholders();
  }

}

</script>

<style scoped>

</style>