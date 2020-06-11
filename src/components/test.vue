<template>

    <div class="head-cont">
            <div class="head-wrap">
            <strong> Top 10 Batsman Scored  </strong>   
        </div>
       
        <table class="table table-striped table-bordered tabelcell" cellspacing="1" width="100%">
            <thead>
                <tr>
                    <th v-for="head in tableOrder"
                    :key="head">
                        {{ head }}
                    </th>
                </tr>
            </thead>
            <tr v-for="row in datas"
            :key="row"
            >
                <td v-for="stat in tableOrder"
                :key="stat">
                    {{ row[stat] }}
                    
                </td>    
            </tr>
        </table>                      
    </div>

     <!-- <ul>
                <li 
                v-for="x in datas"
                :key="x" 
                >{{ x }}
                </li>
                
            </ul> -->
</template>

<script>

                                    
export default {
    name: 'test',
    props: ['datas'],
    data: () => ({
        tableOrder: ['Player_Name', 'Batsman_Scored']
    })

}
</script>

<style>
.tabelcell{
    font-size: large;
    padding: 4%;
}
.head-wrap{
    text-align: center;
    font-size: 25px;
    padding-bottom: 20px;
}
.head-cont{
    padding: 3%;
}
</style>