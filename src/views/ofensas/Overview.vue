<template>
  <div>
    
    
    <v-row  >
       <v-col v-show="chartOptionsOffenseCategories.series.length>0" cols="12" sm="6">
          <v-card>
       <v-card-text>
            <highcharts :options="chartOptionsOffenseCategories" ></highcharts>
       </v-card-text>
    </v-card>
       </v-col>
       <v-col v-show="chartOptionsTopLogSource.series.length>0" cols="12" sm="6">
          <v-card>
            <v-card-text>
                  <highcharts :options="chartOptionsTopLogSource" ></highcharts>
            </v-card-text>
         </v-card>
       </v-col>
       <v-col v-show="sourceAddressItems.length>0" cols="12" sm="6">
          <v-card>
             <v-card-title
          >
            Top Source Addresses
               <v-spacer></v-spacer>
               <v-col cols="auto">
                  <v-text-field
                  v-model="searchSourceAddress"
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
                :headers="headersSourceAddress"
                :items="sourceAddressItems"
                :search="searchSourceAddress"
                :items-per-page="5"
            >
            <template v-slot:item="row">
                <tr>
                    <td>{{row.item.source_ip}}</td>
                    <!-- <td>{{row.item.network}}</td> -->
                    <td>{{row.item.event_flow_count}}</td>
                    <td>{{row.item.last_event_flow_seen}}</td>
                    
                </tr>
            </template>
    </v-data-table> 
       </v-card-text>
    </v-card>
       </v-col>
       <v-col v-show="chartOptionsTopSourceAddress.series.length>0" cols="12" sm="6">
          <v-card>
            <v-card-text>
                  <highcharts :options="chartOptionsTopSourceAddress" ></highcharts>
            </v-card-text>
         </v-card>
       </v-col>
       <v-col v-show="LocalDestinationItems.length>0" cols="12" sm="6">
          <v-card>
             <v-card-title
          >
            Top Local Destination Addresses
               <v-spacer></v-spacer>
               <v-col cols="auto">
                  <v-text-field
                  v-model="searchLocalDestination"
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
                :headers="headersLocalDestination"
                :items="LocalDestinationItems"
                :search="searchLocalDestination"
                :items-per-page="5"
            >
            <template v-slot:item="row">
                <tr>
                    <td>{{row.item.local_destination_ip}}</td>
                    <!-- <td>{{row.item.network}}</td> -->
                    <td>{{row.item.event_flow_count}}</td>
                    <td>{{row.item.last_event_flow_seen}}</td>
                    
                </tr>
            </template>
    </v-data-table> 
       </v-card-text>
    </v-card>
       </v-col>
       <v-col v-show="chartOptionsTopDestinationAddress.series.length>0" cols="12" sm="6">
          <v-card>
            <v-card-text>
                  <highcharts :options="chartOptionsTopDestinationAddress" ></highcharts>
            </v-card-text>
         </v-card>
       </v-col>
        
    </v-row>
   <!--  <v-row>
       <v-col cols="12" sm="6">
          <v-card elevation="2" :loading="loading">
        <v-card-title
          >
            Most recent offenses
          <v-spacer></v-spacer>
          <v-col cols="auto">
              <v-text-field
              v-model="searchOfensas"
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
                :headers="headersRecentOffenses"
                :items="mostRecentOffensesItems"
                :search="searchOfensas"
                :items-per-page="5"
            >
            <template v-slot:item="row">
                <tr>
                    <td>{{row.item.description}}</td>
                    <td>{{row.item.start_time}}</td>
                    
                </tr>
            </template>
    </v-data-table> 
        </v-card-text>
    </v-card>
       </v-col>
    </v-row> -->
   
    
  </div>
</template>

<script>
// @ is an alias to /src
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
         chartOptionsOffenseCategories: {
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
         chartOptionsTopLogSource: {
            chart: {
               type: 'column'
            },
            title: {
               text: 'Top Log Source (EPS) last 3 days'
            },
            series: [ ],
            yAxis:{
               title:{
                  text:'Events'
               }
            }
         },
         chartOptionsTopSourceAddress: {
            chart: {
               type: 'bar'
            },
            title: {
               text: 'Top 10 Source Address'
            },
            series: [ ],
            yAxis:{
               title:{
                  text:'Events'
               }
            }
         },
         chartOptionsTopDestinationAddress: {
            chart: {
               type: 'bar'
            },
            title: {
               text: 'Top 10 Local Destination Address'
            },
            series: [ ],
            yAxis:{
               title:{
                  text:'Events'
               }
            }
         },
         //-----TABLAS --------
         mostRecentOffensesItems:[],
         searchOfensas: "",
            headersRecentOffenses: [
                 { text: "Description", value: "description" },
               //   { text: "Magnitude", value: "magnitude" },
                 { text: "start_time", value: "start_time" },
            ],
         sourceAddressItems:[],
         searchSourceAddress: "",
            headersSourceAddress: [
                 { text: "Source IP", value: "source_ip" },
                  // { text: "Network", value: "network" },
                 { text: "Event Count", value: "event_flow_count" },
                 { text: "Last Event", value: "last_event_flow_seen" },
            ],
            LocalDestinationItems:[],
         searchLocalDestination: "",
            headersLocalDestination: [
                 { text: "Local Destination IP", value: "local_destination_ip" },
                  // { text: "Network", value: "network" },
                 { text: "Event Count", value: "event_flow_count" },
                 { text: "Last Event", value: "last_event_flow_seen" },
            ],
        
     }
  },
   mounted() {
      this.getData()
     
  },
  created() {
     
     
    // this.creaChart();
     
  },
  methods:{
     async getData(){
        await this.topOffenseCategories();
        await this.topLogSourceEvents();
        await this.sourceAddress();
        await this.localDestination();
        //await this.mostRecentOffenses();
        //wait this.creaChart();
     },
     
     async topOffenseCategories() {
        this.loading=true;
         this.axios.defaults.headers.common['Range'] = 'items=0-9';
         
        await this.axios
            .get(`siem/offenses?fields=categories,category_count&filter=domain_id=9&sort=-category_count`,this.configHeaders)
            .then(response => {
               //this.regla_136124=response.data;
               //console.log(response.data);
               response.data.forEach(element => {
                  this.chartOptionsOffenseCategories.series.push({name:`${(element.categories).join().substring(0,(element.categories).join().search(','))}. +${(element.category_count - 1)}`,data:[element.category_count]})
               });
            }).catch(err => console.log(err))
            .finally(() => {
               this.loading=false;
               //this.chartOptionsOffenseCategories.series.push({name:this.CELEPSA[0].nombre,data:[this.regla_136124.length]})

               
            });
            
     },
     async topLogSourceEvents() {
        this.loading=true;
         this.axios.defaults.headers.common['Range'] = 'items=0-49';
         var CurrentDateUnixTimestamp = moment(); 
         var LastHourDateUnixTimestamp = moment(CurrentDateUnixTimestamp).subtract(3,'days')
         console.log(LastHourDateUnixTimestamp.format("YYYY-MM-DD HH:mm")+':'+LastHourDateUnixTimestamp.valueOf());
         console.log(CurrentDateUnixTimestamp.format("YYYY-MM-DD HH:mm")+':'+CurrentDateUnixTimestamp.valueOf());
        await this.axios
            .get(`siem/offenses?fields=log_sources,event_count&filter=domain_id=9%20and%20start_time%20between%20${LastHourDateUnixTimestamp.valueOf()}%20and%20${CurrentDateUnixTimestamp.valueOf()}&sort=-event_count`,this.configHeaders)
            .then(response => {
               //this.regla_136124=response.data;
               console.log(response.data);
               var aux = {  series:[]  };
               response.data.forEach(element => {
                  //var temp = [];
                  for (let index = 0; index < element.log_sources.length; index++) {
                     //const el = element.log_sources[index];
                      if (element.log_sources[index].type_name==='EventCRE') {
                        element.log_sources.splice(index,1)
                     }
                     
                  aux.series.push({name:`(${(element.log_sources[index].type_name)}) ${(element.log_sources[index].name)}`,data:[element.event_count]})
                  }
                 // aux.series.push({name:[temp],data:[element.event_count]})
               });
               console.log(aux);
                  const filteredLogSource= [];
                //var sum=[];
               aux.series.forEach(el => {
                  if (!filteredLogSource.find(log => log.name == el.name )) {
                     
                     const { name, data } = el;
                     filteredLogSource.push({ name, data });
                  }
               }); 
               console.log("------------");
               console.log(filteredLogSource);  
               
               this.chartOptionsTopLogSource.series = filteredLogSource;
            }).catch(err => console.log(err))
            .finally(() => {
               this.loading=false;
               //this.chartOptionsOffenseCategories.series.push({name:this.CELEPSA[0].nombre,data:[this.regla_136124.length]})

               
            });
            
     },
     async mostRecentOffenses() {
        this.loading=true;
         this.axios.defaults.headers.common['Range'] = 'items=0-9';

        await this.axios
            .get(`siem/offenses?fields=magnitude,description,start_time&filter=domain_id=9&sort=-start_time`,this.configHeaders)
            .then(response => {
               //this.regla_136124=response.data;
               //console.log(response.data);
               this.mostRecentOffensesItems=response.data;
               this.mostRecentOffensesItems.forEach(element => {
                  element.start_time=moment(element.start_time).format("DD/MM/YYYY hh:mm");
                  //this.chartOptionsMostRecentOffense.series.push({name:element.description,data:[moment(element.start_time).format("DD/MM/YYYY hh:mm")]})
               });
            }).catch(err => console.log(err))
            .finally(() => {
               this.loading=false;

               
            });
            
     },
     async sourceAddress() {
        this.loading=true;
         this.axios.defaults.headers.common['Range'] = 'items=0-9';

        await this.axios
            .get(`siem/source_addresses?filter=domain_id=9`,this.configHeaders)
            .then(response => {
               //this.regla_136124=response.data;
               //console.log(response.data);
               this.sourceAddressItems=response.data;
               //this.chartOptionsMostRecentOffense.series.push({name:element.description,data:[moment(element.start_time).format("DD/MM/YYYY hh:mm")]})
               
               this.sourceAddressItems.forEach(element => {
                  element.last_event_flow_seen=moment(element.last_event_flow_seen).format("DD/MM/YYYY hh:mm")
                  this.chartOptionsTopSourceAddress.series.push({name:element.source_ip,data:[element.event_flow_count]})
               });
            }).catch(err => console.log(err))
            .finally(() => {
               this.loading=false;

               
            });
            
     },
     async localDestination() {
        this.loading=true;
         this.axios.defaults.headers.common['Range'] = 'items=0-9';

        await this.axios
            .get(`siem/local_destination_addresses?filter=domain_id=9`,this.configHeaders)
            .then(response => {
               //this.regla_136124=response.data;
               //console.log(response.data);
               this.LocalDestinationItems=response.data;
               this.LocalDestinationItems.forEach(element => {
                  element.last_event_flow_seen=moment(element.last_event_flow_seen).format("DD/MM/YYYY hh:mm")
                  this.chartOptionsTopDestinationAddress.series.push({name:element.local_destination_ip,data:[element.event_flow_count]})
                  //this.chartOptionsMostRecentOffense.series.push({name:element.description,data:[moment(element.start_time).format("DD/MM/YYYY hh:mm")]})
               });
            }).catch(err => console.log(err))
            .finally(() => {
               this.loading=false;

               
            });
            
     },
     
  }
  
};
</script>
