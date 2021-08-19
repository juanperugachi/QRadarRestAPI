<template>
   <div>
      <v-row>
         <!-- <v-col v-show="chartOptionsAssets.series.length>0" cols="12" sm="12">
          <v-card>
            <v-card-text>
                  <highcharts :options="chartOptionsAssets" ></highcharts>
            </v-card-text>
         </v-card>
       </v-col> -->
         <v-col v-show="AssetsItems.length>0" cols="12" sm="12">
          <v-card >
             <v-card-title
          >
            Assets
               <v-spacer></v-spacer>
               <v-col cols="auto">
                  <v-text-field
                  v-model="searchAssets"
                  append-icon="mdi-magnify"
                  label="Buscar"
                  single-line
                  hide-details
                  filled
                  rounded
                  dense
               ></v-text-field>
               </v-col>

            </v-card-title>
       <v-card-text>
            <v-data-table
               dense
                :headers="headersAssets"
                :items="AssetsItems"
                :search="searchAssets"
                :items-per-page="10"
            >
            <template v-slot:item="row">
                <tr>
                    <td>{{row.item.interfaces[0].ip_addresses[0].value}}</td>
                     <td>{{row.item.users.length}}</td> 
                    <td>{{row.item.interfaces[0].ip_addresses[0].created}}</td>
                    <td>{{row.item.interfaces[0].ip_addresses[0].last_seen_profiler}}</td>
                    
                </tr>
            </template>
         </v-data-table> 
            </v-card-text>
         </v-card>
       </v-col> 
      </v-row>
   </div>
</template>
<script>
import moment from 'moment';
export default {
  
  name: "Ofensas",
  data() {
     return {
        loading:false,
        
        configHeaders : {
         "auth":{
                  "username": "jperugachi",
                  "password": "jk1609PV*"
               },
               //"Range": "items=0-50"
         },
        AssetsItems:[],
         searchAssets: "",
            headersAssets: [
                 { text: "IP", value: "ip_addresses" },
                  // { text: "Network", value: "network" },
                 { text: "Users", value: "users" },
                 { text: "Created", value: "created" },
                 { text: "Last Seen", value: "last_seen_profiler" },
            ],
            chartOptionsAssets: {
            chart: {
               type: 'column'
            },
            title: {
               text: 'Top 10 Offense categories'
            },
            series: [ ],
            yAxis:{
               title:{
                  text:'Ofensas'
               }
            }
         },
     }
  },
  mounted() {
      this.getData();
     
  },
  created() {
     
     
    // this.creaChart();
     
  },
  methods:{
     async getData(){
        await this.assets()
     },
     async assets() {
        this.loading=true;
         //this.axios.defaults.headers= '';
         this.axios.defaults.headers.common['Range'] = 'items=0-1500';
        await this.axios
            .get(`asset_model/assets?fields=interfaces,users&filter=domain_id=9`,this.configHeaders)
            .then(response => {
               //this.regla_136124=response.data;
               //console.log(response.data);
               this.AssetsItems=response.data;
                    //console.log(this.AssetsItems);
                  this.AssetsItems.forEach(element => {
                  //element.ip_addresses=element.interfaces.ip_addresses[0].value;
                  element.interfaces.forEach(interfaz =>{
                     interfaz.ip_addresses[0].created=moment(interfaz.ip_addresses[0].created).format("DD/MM/YYYY hh:mm")
                     interfaz.ip_addresses[0].last_seen_profiler=moment(interfaz.ip_addresses[0].last_seen_profiler).format("DD/MM/YYYY hh:mm")
                     this.chartOptionsAssets.series.push({name:element.interfaces[0].ip_addresses[0].value,data:[element.users.length]})

                  })
                  // element.users.forEach(users =>{
                     
                  //    console.log(users.username)

                  // })
                  //this.chartOptionsMostRecentOffense.series.push({name:element.description,data:[moment(element.start_time).format("DD/MM/YYYY hh:mm")]})
               });  
                console.log(this.AssetsItems);
            }).catch(err => console.log(err))
            .finally(() => {
               this.loading=false;

               
            });
            
     },
  }
}
</script>