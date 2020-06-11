<template>
        
    <div class="user-dashboard">
        
        <!-- navbar-start -->
             <navbar />
             <br>
             <br>
        <!-- navbar-close -->
          <!-- Season-teams-card -->
            <div class="container-fluid ">
             <Seasonteam />
             </div>
        
        <!-- mb-3 = margin-bottom -->
        <div class="container-fluid">
        <div class="shadow p-3 bg-white rounded component-div">  
            <Pagination 
                 v-if="tableData"
                :totalRecords="tableData.length" 
                :perPageOptions="perPageOptions"
                v-model="pagination"
             />
            <tables 
                v-if="tableData" 
                :theData="computedTableData"
                :config="config" 
                
             />
             </div>
             </div>
             
             
             <!-- :style="{height: '280px'}" -->
             <div class="container-fluid">
                 <div class="container">
                <Seasonwise />
                </div>
                </div>
            <br>
          
            <lineChart />  

            <div class="container-fluid ">
     
        
    <div class="row">
    
      <div class="col-md-6">
          <md-card class="wrap" md-with-hover>
        <column-chart :data="pieData"> </column-chart>

        <div class="inner-col">Most NO.of 4s</div>
         </md-card >
      </div>
     

       
      <div class="col-md-6 ">
           <md-card md-with-hover>
          <SeasonSplit />
          </md-card>
      </div>
    
       
    </div>

   
    <br>
    <div class="row">
    
      <div class="col-md-6">
          <md-card class="wrap-2" md-with-hover>
        <!-- <pie-chart :data="dismissile" id="chartt"></pie-chart> -->
        <PolarArea />

        <div class="inner-col">Dismissile</div>
         </md-card >
      </div>
     

       
      <div class="col-md-6 ">
           <md-card md-with-hover>
        <test v-bind:datas="Team" />
          </md-card>
      </div>
    
       
    </div>

    

    <div>
       
    </div>
    
  </div>


        <!-- Table-start -->
            <!-- <Table v-bind:ddata="Player" /> -->
         <!-- Table-end -->
       
               
               

                
             
            
                
       
    </div>
    
</template>

<script>
// let Player = require('../assets/data/Player.json')
let team = require('../assets/data/Team.json')



import navbar from './navbar.vue'
// import Table from './Table.vue'
import test from './test.vue'
import Pagination from './Pagination.vue'
import tables from './tables.vue'
import SeasonSplit from './SeasonSplit.vue'
import Seasonwise from './Seasonwise'
import Seasonteam from './Seasonteam'
import PolarArea from './PolarArea'



// import Dismissile from './Dismissile'


// import TableElement  from './TableElement.vue'



const perPageOptions = [8, 5, 8, 10, 10, 8, 10, 10]


export default {
    name: 'userdashboard',
    components: {
        navbar,
        // Table,
        // test,
        Pagination,
        tables,
        SeasonSplit,
        Seasonwise,
        Seasonteam,
        PolarArea,
        test,
   
       
        // Dismissile
    
    },
    data: function() {
        return {
                dismissile: {
                   'caught': 3245,
                   'caught and bowled': 148,
                   'lbw': 326, 
                   'run out': 583,
                   'stumped': 187,
                   'bowled': 1028,
                   'obstructing the field': 127,
                   'ritered hut': 80
                },
        perPageOptions,
        tableData: undefined,
        // Player: Player.slice(0,15),
        Team: team.slice(0,10),
         chartData: {
        '2008-02-19': 5,
        '2018-05-14': 6,
        '2019-07-17': 5
      },
      pieData: {
        'G Gambhir': 442,
        'V kholi': 360,
        'SK Raina': 360,
        'S Dhawan': 348,
        'Rv Uthappa': 341,
        'DA Warner': 338,
        'V Shewag': 334,
        'RG Sharma': 323,

      },
      
    
        pagination: { page: 1, perPage: perPageOptions[0]},
        
        config: [                     //data property called config in what order we want our data, and pass it to the table property in 8 element
            {
                key: 'Season_Id',
                title: 'Season',
                type: 'text'
            },
            {
                key: 'Team_Name',
                title: 'TeamName',
                type: 'text'
            },
            {
                key: 'totalMatchedPlayed',
                title: 'Matches',
                type: 'text'
            },
            {
                key: 'won',
                title: 'Won',
                type: 'text'
            },
            {
                key: 'loss',
                title: 'Loss',
                type: 'text'
            }
        ],
                       
        }
    },
    computed: {
    computedTableData () {
      if (!this.tableData) return []
      else {
        const firstIndex = (this.pagination.page - 1) * this.pagination.perPage
        const lastIndex = this.pagination.page * this.pagination.perPage
        return this.tableData.slice(firstIndex, lastIndex)
      }
    }
  },
    mounted () {
        this.$axios.get('https://mighty-garden-54587.herokuapp.com/getMatchPerformance')  //axios makes a request to the server (or call back function)
        .then(({ data }) => {                           // then is used to get the response ie. once i get my user data then i need post data from my user
            this.tableData = data.data.data.slice(0,100);
            // console.log(data.data.data.slice(1,5));
        })
        

    }
    
}
</script>

<style>
.head{
    font-size: 30px;
}
.wrap{
    height: 437px;
    padding-top: 4%;
}
.wrap-2{
    height: 600px;
    padding-top: 4%;
}
.inner-col{
 text-align: center;
 font-weight: 700;
 font-size: 35px;
 padding-top: 4%;
}


</style>
    
