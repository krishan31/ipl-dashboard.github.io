<template>
    <div id="table-design">
        <table class="table table-striped table-bordered tabelcell" cellspacing="0" width="100%">
            <thead>
                <tr>
                    <th class="op" v-for="(obj, ind) in config"
                     :key="ind">
                        {{ obj.title }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in theData" 
                :key="index">
                    <td v-for="(obj, ind) in config" 
                    :key="ind">
                        {{ row[obj.key] }} 
                    </td>
                </tr>
            </tbody>
           
        </table>
    </div>    
</template>

<script>
export default {
    props: ['theData', 'config']   //this config will tell us in what order we want the tabledata and what names 
}
</script>

<style >
#table-design{
  text-align: -webkit-center;
}

.awesome-table{
    overflow: auto;
    font-size: 19px;
    background-color: whitesmoke;
    
}
.op{
    position: sticky;
    top: 0px;
    background-color: whitesmoke;
}
.tabel {
    border-collapse: collapse;
}
.tabelcell{
    font-size: large;
}

</style>