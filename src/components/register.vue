<template>
  <v-stepper v-model="e1" style="margin: 20px">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">
        Términos y Condiciones
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 2" step="2">
        Elige tu tipo de usuario
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 3" step="3">
        Selecciona tu plan ideal
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="4">
        Ingresa tus datos
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card>
          <v-card-title></v-card-title>
          <v-card-text>
            <v-container>
              <div class="title-terms pb-3">Términos y Condiciones de Uso</div>
              <div>Esta sección establece los términos y condiciones (en adelante, las “Condiciones Generales”)
                para el uso de los contenidos y servicios (en adelante, los “Servicios”) del sitio web. El Sitio Web y
                los Servicios son prestados por la empresa (en adelante, “ROOMIES”) para cualquier persona que desee
                ingresar o utilizar los servicios que se ofrecen.</div>
              <div class="mt-2 mb-2">En caso de no estar de acuerdo con las Condiciones Generales, por favor, abandone el Sitio Web y
                absténgase de utilizar los Servicios que se ofrecen. La utilización por el usuario del Sitio Web se
                entenderá como aceptación plena y sin reservas de las Condiciones Generales aquí establecidas. </div>
              <div>En adelante, los términos “Usted” y “Usuario” serán utilizados para hacer referencia a todas las
                personas físicas y/o jurídicas que por cualquier razón accedan al Sitio Web.</div>
              <div class="subtitle-terms pt-3 pb-3">1. ACCESO AL SITIO WEB</div>
              <div class="term mb-2">1.1. Acceso al Sitio Web</div>
              <div class="mb-2">El acceso y utilización del Sitio Web no exige la previa suscripción o registro del Usuario.
                Sin embargo, es posible que la utilización de algunos de los Servicios ofrecidos a través del Sitio
                Web requiera la suscripción o registro del Usuario.</div>
              <div class="term mb-2">1.2 Utilización del Sitio Web</div>
              <div class="mb-2">1.2.1 El Usuario se compromete a utilizar el Sitio Web de conformidad con estas Condiciones
                Generales, las leyes aplicables y con la moral y buenas costumbres.</div>
              <div class="mb-2">1.2.2 El Usuario se obliga a abstenerse de utilizar el Sitio Web con fines o efectos ilícitos,
                contrarios a lo establecido en las Condiciones Generales, lesivos de los derechos e intereses de
                terceros, o que de cualquier forma puedan dañar, inutilizar, sobrecargar o deteriorar el Sitio Web
                o impedir la normal utilización del Sitio Web por parte de los Usuarios.</div>
              <div class="term mb-2">1.3 Contenido del Sitio Web</div>
              <div class="mb-2">1.3.1 Los contenidos de este Sitio Web, tales como texto, información, gráficos, imágenes, logos,
                marcas, programas de computación, bases de datos, diseños, arquitectura funcional y cualquier otro
                material (en adelante, el “Contenido”) están protegidos por las leyes aplicables en cada jurisdicción,
                pero sin limitación, las leyes sobre derechos de autor, patentes, marcas, modelos de utilidad, diseños
                industriales y nombres de dominio. </div>
              <div class="mb-2">1.3.2 Todo el Contenido es propiedad de ROOMIES y/o de cualquier otra sociedad vinculada y/o de sus
                proveedores de contenido. La compilación, interconexión, operatividad y disposición de los contenidos
                del Sitio Web es de propiedad exclusiva de ROOMIES y/o de sus empresas vinculadas. El uso, adaptación,
                reproducción y/o comercialización no autorizada del Contenido puede encontrarse penado por la
                legislación vigente en cada jurisdicción.</div>
              <div class="mb-2">1.3.3 Usted no copiará ni adaptará el código de programación desarrollado por, o por cuenta de,
                ROOMIES para generar y operar sus páginas, el cual se encuentra protegido por la legislación aplicable
                y vigente en cada jurisdicción.</div>
              <div class="term mb-2">1.4 Usos prohibidos</div>
              <div class="mb-2">1.4.1 El Sitio Web sólo podrá ser utilizado con fines lícitos, para acceder a información referida
                a los Servicios disponibles a través del mismo. ROOMIES prohíbe específicamente cualquier utilización
                del Sitio Web para:</div>
              <div class="mb-2">Anunciar datos biográficos incompletos, falsos o inexactos.</div>
              <div class="mb-2">Registrar más de una cuenta correspondiente a un mismo usuario.</div>
              <div class="mb-2">Usar cualquier mecanismo para impedir o intentar impedir el adecuado funcionamiento de este Sitio
                Web o cualquier actividad que se esté realizando en este Sitio Web.</div>
              <div class="mb-2">El uso o intento de uso de cualquier máquina, software, herramienta, agente u otro mecanismo para
                navegar o buscar en este Sitio Web que sean distintos a las herramientas de búsqueda provistos por
                ROOMIES en este Sitio Web.</div>
              <div class="mb-2">Intentar descifrar, descompilar u obtener el código fuente de cualquier programa de software de este
                Sitio Web.</div>
              <div class="mb-2">a) Utilizar lenguaje vulgar /obsceno, discriminatorio y/u ofensivo.</div>
              <div class="mb-2">b) Todo tipo de ataque personal contra Usuarios y/o terceros, incluyendo clientes de ROOMIES,
                mediante acoso, amenazas, insultos.</div>
              <div class="mb-2">c) Todo acto contrario a las leyes, la moral y las buenas costumbres.</div>
              <div class="mb-2">d) Publicar mensajes, imágenes e hipervínculos agraviantes, difamatorios, calumniosos, injuriosos,
                falsos, discriminatorios, pornográficos, de contenido violento, insultantes, amenazantes, incitantes a
                conductas ilícitas o peligrosas para la salud, y/o que vulneren de cualquier forma la privacidad de
                cualquier tercero como así también la violación directa o indirecta de los derechos de propiedad
                intelectual de ROOMIES y/o de cualquier tercero, incluyendo clientes de ROOMIES.</div>
              <div class="mb-2">e) Promocionar, comercializar, vender, publicar y/u ofrecer cualquier clase de productos,
                servicios y/o actividades por intermedio de o a través de la utilización de los Canales, excepto
                aquellas expresamente permitidas por ROOMIES.</div>
              <div class="mb-2">f) El uso o envío de virus informáticos, malware, spyware, ransomware y/o la realización de todo
                acto que cause o pudiera causar daños o perjuicios al normal funcionamiento de los Servicios y/o los
                Canales, o de los equipos informáticos o software de ROOMIES y/o de cualquier tercero, incluyendo
                clientes de ROOMIES.</div>
              <div class="mb-2">g) Todo acto dirigido a enmascarar y/o falsificar o disimular direcciones IP, correos electrónicos
                y/o cualquier otro medio técnico de identificación de los Usuarios o sus equipos informáticos.</div>
              <div class="mb-3">h) Todo acto que viole la privacidad de otros Usuarios, o que viole cualquiera de sus derechos bajo
                la Ley N° 25.326.</div>
              <div class="subtitle-terms mb-3">2. DATOS PERSONALES DEL USUARIO. REGISTRO EN EL SITIO WEB</div>
              <div class="mb-2">2.1 Cuando se registre en el Sitio Web, se le pedirá que aporte a ROOMIES cierta información que
                incluirá, entre otras, nombre y apellido, dirección y una dirección válida de correo electrónico,
                (de corresponder), entre otros. </div>
              <div class="mb-2">2.2 Por favor consulte la Política de Privacidad del Sitio Web para conocer los detalles respecto
                del tratamiento de sus Datos Personales.</div>
              <div class="mb-2">2.3 El Usuario será responsable de todos los usos de su cuenta, tanto si están autorizados o no por
                Usted. Usted deberá notificar inmediatamente a ROOMIES sobre cualquier uso sin autorización de su cuenta
                o contraseña.</div>
              <div class="mb-3">2.4 Los Usuarios registrados y/o que utilicen los Servicios de ROOMIES garantizan la veracidad,
                exactitud, vigencia y autenticidad de la información facilitada, y se comprometen a mantenerlos
                debidamente actualizados, informando a ROOMIES sobre cualquier modificación a través de la sección
                “Contacto” disponible en la página principal del Sitio Web.</div>
              <div class="subtitle-terms mb-3">3. RESPONSABILIDAD DEL USUARIO</div>
              <div class="mb-3">El Usuario declara y acepta que el uso del Sitio Web sus Servicios y los contenidos se efectúa bajo
                su única y exclusiva responsabilidad.</div>
              <div class="subtitle-terms mb-3">4. EXCLUSIÓN DE GARANTÍAS Y DE RESPONSABILIDAD.</div>
              <div class="mb-2">4.1 Atento al estado de la técnica y a la estructura y funcionamiento de las redes, el Sitio Web no
                puede confirmar que cada Usuario es quien dice ser. </div>
              <div class="mb-3">4.2 ROOMIES no garantiza la disponibilidad y continuidad del funcionamiento del Sitio Web y de los
                Servicios ofrecidos. No todos los Servicios y contenidos en general se encuentran disponibles para todas
                las áreas geográficas. Asimismo, ROOMIES no garantiza la utilidad del Sitio Web y de los Servicios para
                la realización de ninguna actividad en particular, ni su infalibilidad y, en particular, aunque no de
                modo exclusivo, que los Usuarios puedan efectivamente utilizar el Sitio Web, acceder a las distintas
                páginas web que forman el Sitio Web o a aquéllas desde las que se prestan los Servicios.</div>
              <div class="subtitle-terms mb-3">5. CANCELACIÓN.</div>
              <div class="mb-3">ROOMIES tiene la facultad, y no la obligación, de emitir advertencias, suspensiones temporales y
                cancelaciones permanentes (baja) de los Usuarios registrados por infracciones a las presentes
                Condiciones Generales, y/o cualquier aviso, reglamento de uso e instrucción puestos en conocimiento
                del Usuario por ROOMIES. </div>
              <div class="subtitle-terms mb-3">6. GENERAL.</div>
              <div class="mb-2">6.1 ROOMIES se reserva el derecho a modificar total o parcialmente estas Condiciones Generales en
                cualquier momento. En caso de llevar a cabo alguna modificación, ROOMIES notificará al Usuario a la
                dirección de correo electrónico registrada para utilizar el Sitio Web y los Servicios. El Usuario acepta
                que la notificación por parte de ROOMIES a dicha dirección de correo electrónico tendrá plena validez
                como notificación suficiente, y renuncia a cualquier tipo de impugnación respecto de las notificaciones
                cursadas por ROOMIES a tal dirección de correo electrónico. Asimismo, si el Usuario persiste en la
                utilización de los Servicios y/o el Sitio Web, se considerará que ha aceptado implícitamente las nuevas
                Condiciones Generales.
              </div>
              <div class="mb-3">6.2 En caso de declararse la nulidad de alguna de las cláusulas de estas Condiciones Generales, tal
                nulidad no afectará a la validez de las restantes, las cuales mantendrán su plena vigencia y efecto.
              </div>
              <div class="subtitle-terms mb-3">7. LOCALIZACIÓN Lima Perú.</div>
              <div class="mb-2">7.1 Estas Condiciones Generales se rigen por la las leyes de la República del Perú. El Usuario se
                somete a la jurisdicción de los Juzgados y Tribunales del Distrito Judicial de Lima, Perú, con renuncia
                expresa a cualquier otro fuero y/o jurisdicción.</div>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text to="/login"
                color="green darken-1"
            >
              Disagree
            </v-btn>
            <v-btn
                color="green darken-1"
                text
                @click="e1=2"
            >
              Agree
            </v-btn>
          </v-card-actions>
        </v-card>

      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12"  height="auto">
          <v-row justify="center">
            <v-card style="margin: 50px; padding: 30px" width="20%" color="#F8F2FE">
              <v-img src="https://d9hhrg4mnvzow.cloudfront.net/agentes.lamudi.com.mx/guia-para-comprar-propiedades/a5a948ca-preventa-1_10di09a0d609a00600001o.jpg" height="200px"></v-img>
              <v-card-title style="font-size: 25px">Arrendador</v-card-title>
              <v-card-text>¡Coloca el anuncio de tu inmueble fácilmente con Roomies y encuentra potenciales arrendatarios!</v-card-text>
              <v-btn color="#fba31a" @click="e1 = 3; tipo = 1">Seleccionar</v-btn>
            </v-card>
            <v-card style="margin: 50px; padding: 30px" width="20%" color="#F8F2FE">
              <v-img src="https://static1.abc.es/media/familia/2020/01/09/parejacasa-khMD--620x349@abc.jpg" height="200px"></v-img>
              <v-card-title style="font-size: 25px">Arrendatario</v-card-title>
              <v-card-text >¡Encuentra la propiedad de tus sueños y gente con quien compartirla! ¡Nuestros 'Roomies' esperan conocerte</v-card-text>
              <v-btn color="#fba31a" @click="e1 = 3; tipo = 0">Seleccionar</v-btn>
            </v-card>
          </v-row>
          <v-card-actions>
            <v-btn
                color="red darken-4"
                text
                @click="e1=1"
            >
              BACK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card v-if="tipo===1" class="mb-12" height="auto">
          <v-card-text style="font-size: 40px" align="center">
            <strong>Selecciona tu plan ideal</strong>
          </v-card-text>
          <v-card-subtitle align="center">¡Tu primer mes es gratis!</v-card-subtitle>
          <v-row justify="center">
            <v-card style="padding: 25px; margin: 30px" width="20%" color="#F8F2FE" height="455px">
              <v-card-title>Plan Básico</v-card-title>
              <v-card-text>
                <p>
                  <v-icon>mdi-check</v-icon>
                  Anuncios de 30 días de duración.
                </p>
              </v-card-text>
              <v-card-text>
                <p>
                  <v-icon>mdi-check</v-icon>
                  Recomendación de anuncio estándar.
                </p>
              </v-card-text>
              <v-card-text>
                <p>
                  <v-icon>mdi-check</v-icon>
                  El plan más económico
                </p>
              </v-card-text>
              <v-card-text class="plan-pricing" style="text-align: center">S/ 19.90 /mes</v-card-text>
              <div class="text-center">
                <v-btn class="select-button-landlord" color="#fba31a" @click="e1 = 4; planId = 3" >Seleccionar</v-btn>
              </div>
            </v-card>

            <v-card style="padding: 25px; margin: 30px" width="20%" color="#F8F2FE">
              <v-card-title>Plan Estándar</v-card-title>
              <v-card-text>
                <p>
                  <v-icon>mdi-check</v-icon>
                  Anuncios de 60 días de duración.
                </p>
              </v-card-text>
              <v-card-text>
                <p>
                  <v-icon>mdi-check</v-icon>
                  Visibilidad de anuncios destacada.
                </p>
              </v-card-text>
              <v-card-text>
                <p>
                  <v-icon>mdi-check</v-icon>
                  Genera más cantidad de interesados.
                </p>
              </v-card-text>
              <v-card-text class="plan-pricing" style="text-align: center">S/ 39.90 /mes</v-card-text>
              <div class="text-center">
                <v-btn class="select-button-landlord" color="#fba31a" @click="e1 = 4; planId = 4">Seleccionar</v-btn>
              </div>
            </v-card>

            <v-card style="padding: 25px; margin: 30px" width="20%" color="#F8F2FE">
              <v-card-title>Plan Premium</v-card-title>
              <v-card-text>
                <p>
                  <v-icon>mdi-check</v-icon>
                  Duración de anuncios ilimitada.
                </p>
              </v-card-text>
              <v-card-text>
                <p>
                  <v-icon>mdi-check</v-icon>
                  Máxima exposición de anuncios
                </p>
              </v-card-text>
              <v-card-text>
                <p>
                  <v-icon>mdi-check</v-icon>
                  Genera mayor cantidad de interesados
                </p>
              </v-card-text>
              <v-card-text class="plan-pricing" style="text-align: center">S/ 59.90 /mes</v-card-text>
              <div class="text-center">
                <v-btn class="select-button-landlord" color="#fba31a" @click="e1 = 4; planId = 5">Seleccionar</v-btn>
              </div>
            </v-card>
          </v-row>
          <v-card-actions>
            <v-btn
                color="red darken-4"
                text
                @click="e1=2"
            >
              BACK
            </v-btn>
          </v-card-actions>
        </v-card>

        <v-card v-if="tipo===0" class="mb-12 position-relative" height="auto">
          <v-card-text style="font-size: 40px" align="center">
            <strong>Selecciona tu plan ideal</strong>
          </v-card-text>
          <v-card-subtitle align="center">¡Tu primer mes es gratis!</v-card-subtitle>
          <v-row justify="center">
            <v-card style="padding: 25px; margin: 30px" width="20%" color="#F8F2FE" height="450px">
              <v-card-title align="center">Plan Básico</v-card-title>
              <v-card-text>
                <p>
                  <v-icon>mdi-check</v-icon>
                  Ve los detalles de cada anuncio.
                </p>
              </v-card-text>
              <v-card-text>
                <p>
                  <v-icon>mdi-check</v-icon>
                  Agrega anuncios a tu lista de favoritos.
                </p>
              </v-card-text>
              <v-card-text>
                <p>
                  <v-icon>mdi-check</v-icon>
                  Busca roomates y contáctalos.
                </p>
              </v-card-text>
              <v-card-text class="plan-pricing">Gratis</v-card-text>
              <div class="text-center">
                <v-btn class="select-button" color="#fba31a" @click="e1 = 4; planId = 1">Seleccionar</v-btn>
              </div>
            </v-card>

            <v-card style="padding: 25px; margin: 30px" width="20%" color="#F8F2FE">
              <v-card-title style="text-align: center">Plan Estándar</v-card-title>
              <v-card-text>
                <p>
                  <v-icon>mdi-check</v-icon>
                  Accede a la galería imágenes 360 de los anuncios.
                </p>
              </v-card-text>
              <v-card-text>
                <p>
                  <v-icon>mdi-check</v-icon>
                  Posibilidad de hacer videollamadas con los posibles roomates.
                </p>
              </v-card-text>
              <v-card-text>
                <p>
                  <v-icon>mdi-check</v-icon>
                  Colocar un vídeo de presentación en tu perfil.
                </p>
              </v-card-text>
              <v-card-text class="plan-pricing" style="text-align: center">S/ 19.90 /mes</v-card-text>
              <div class="text-center">
                <v-btn class="select-button" color="#fba31a" @click="e1 = 4; planId = 2">Seleccionar</v-btn>
              </div>
            </v-card>
          </v-row>
          <v-card-actions>
            <v-btn
                color="red darken-4"
                text
                @click="e1=2"
            >
              BACK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-row justify="center">
          <v-card class="mb-12" height="auto" width="60%" style="padding: 30px;" color="#F8F2FE" align="center">
            <v-form>
              <v-card-text style="text-align: center; font-size: 35px; margin: 10px">Ingresa tus datos para crear tu cuenta</v-card-text>
              <v-row>
                <v-text-field filled dense label="Username" v-model="user2.username" style="width: 35%; margin-right: 15px; margin-left: 15px"></v-text-field>
                <v-text-field filled dense label="Contraseña" v-model="user2.password" type="password" style="width: 35%; margin-right: 15px; margin-left: 15px"></v-text-field>
              </v-row>
              <v-row>
                <v-text-field filled dense label="Nombre" v-model="user2.firstName" style="width: 35%; margin-right: 15px; margin-left: 15px"></v-text-field>
                <v-text-field filled dense label="Apellidos" v-model="user2.lastName" style="width: 35%; margin-right: 15px; margin-left: 15px"></v-text-field>
              </v-row>
              <v-row>
                <v-text-field filled dense label="Celular" v-model="profile.cellPhone" style="width: 35%; margin-right: 15px; margin-left: 15px"></v-text-field>
                <v-text-field filled dense label="DNI" v-model="profile.idCard" style="width: 35%; margin-right: 15px; margin-left: 15px"></v-text-field>
              </v-row>
              <v-row>
                <v-text-field filled dense label="Descripcion" v-model="profile.description" style="width: 35%; margin-right: 15px; margin-left: 15px"></v-text-field>
                <v-text-field type="date" filled dense label="Fecha de nacimiento" v-model="profile.birthday" style="width: 35%; margin-right: 15px; margin-left: 15px"></v-text-field>
              </v-row>
              <v-row>
                <v-text-field filled dense label="Departamento" v-model="profile.department" style="width: 10%; margin-right: 15px; margin-left: 15px"></v-text-field>
                <v-text-field filled dense label="Provincia" v-model="profile.province" style="width: 10%; margin-right: 15px; margin-left: 15px"></v-text-field>
                <v-text-field filled dense label="Distrito" v-model="profile.district" style="width: 10%; margin-right: 15px; margin-left: 15px"></v-text-field>
              </v-row>
              <v-text-field filled dense label="Direccion" v-model="profile.address" style="width: 100%;"></v-text-field>
              <v-text-field filled dense label="Link de Foto de Perfil" v-model="profile.profilePicture" style="width: 100%;"></v-text-field>
              <v-btn color="#fba31a" @click="guardar">Registrarse</v-btn>
            </v-form>
            <v-card-actions>
              <v-btn
                  color="red darken-4"
                  text
                  @click="e1=3"
              >
                BACK
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import User from "../models/user";
import LandlordsApiService from '../services/landlords-api.service';
import LeaseholdersApiService from '../services/leaseholder-api.service';


export default {
  name: "register",
  data() {
    return {
      userId : 1,
      user2: new User('','','','',''),
      user: {
        "firstname":'',
        "lastName":'',
        "username":'',
        "password":'',
      },
      profile: {
        "cellPhone":'',
        "idCard":'',
        "description":'',
        "birthday":'',
        "department":'',
        "province":'',
        "district":'',
        "address":'',
        "profilePicture":'',
      },
      tipo: null,
      planId: null,
      e1: 1,
      plan: null,
    }
  },
  methods: {
    async guardar() {
      let new_profile = {
        "name": this.user2.firstName,
        "lastName": this.user2.lastName,
        "cellPhone":this.profile.cellPhone,
        "idCard":this.profile.idCard,
        "description":this.profile.description,
        "birthday":this.profile.birthday,
        "department":this.profile.department,
        "province":this.profile.province,
        "district":this.profile.district,
        "address":this.profile.address,
        "profilePicture":this.profile.profilePicture
      }
      console.log(new_profile)
      this.$store.dispatch('auth/register',this.user2).then(
          data=>{
            console.log(`Data: ${data}`)
            this.message=data.message;
            this.userId=data.id;
            console.log(`User Id: ${this.userId}`);
            this.SaveProfile(new_profile);
          },
          error=>{
            console.log(error)
            this.message=(error.response && error.response.data)
                || error.message || error.toString();
          }
      )
    },

    async SaveProfile(profile){
      console.log("Plan id:",this.planId)
      if (this.planId<=2){
        console.log("Entró a arrendatario:",this.planId)
        await LeaseholdersApiService.create(this.planId,this.userId,profile)
            .then((result)=>{
              console.log(result);
              this.handleLogin(result.data.id,result.data.planId);
            }).catch(error=>{
              console.log(error);
            })
      }
      else{
        console.log("Entró a arrendador:",this.planId)
        await LandlordsApiService.create(this.planId,this.userId,profile)
            .then((result)=>{
              console.log(result);
              this.handleLogin(result.data.id,result.data.planId);
            }).catch(error=>{
              console.log(error);
            })
      }
    },

    handleLogin(profileId) {
      console.log('Starting Login handling');
      if(profileId!==null){
        if (this.user2.username && this.user2.password) {
          console.log('Starting Request');
          this.$store.dispatch('auth/login', this.user2).then(
              (user) => {
                console.log('Logged In');
                console.log(user);
                if(this.planId<=2){

                  this.$router.push({name:"home-leaseholder", params:{profileId:profileId}});
                }
                else {
                  this.$router.push({name:"home-landlord", params:{profileId:profileId}});
                }
              },
              error => {
                console.log('Error');
                this.message = (error.response && error.response.data)
                    || error.message || error.toString();
              }
          ).
          catch(function (error){
            alert('El usuario o contraseña es incorrecto');
            this.message = (error.response && error.response.data)
                || error.message || error.toString();

          })
        }}
    },
  }}
</script>

<style scoped>

v-text-field {
  margin: 10px;
}

.title-terms {
  font-weight: bold;
  font-size: 24px;
}

.subtitle-terms {
  font-weight: bold;
  font-size: 20px;
}

.term {
  font-weight: bold;
  font-size: 16px;
}

.plan-pricing {
  font-weight: bold;
  font-size: 25px;
  position: absolute;
  top: 343px;
  right: 2px;
  text-align: center;
}

.position-relative {
  position: relative;
}

.select-button {
  position: absolute;
  top: 393px;
  right: 70px;
}

.select-button-landlord {
  position: absolute;
  top: 402px;
  right: 70px;
}

</style>
