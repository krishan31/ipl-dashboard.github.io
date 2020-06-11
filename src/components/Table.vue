<template>
            <div class="table">
               <table class="yo">
                   <thead>
                       <tr>                          <!-- Now, i wanted to make a json data in my order. So i used this loop                            -->
                       <th   
                        v-for="(val, index) in tableOrder"
                        :key="index"   
                        >{{ val }}</th> 
						</tr> 
                   </thead>
						<tbody>
							<tr
								v-for="(row, index) in ddata"
								:key="index"
							>
								<td
									v-for="(key, idx) in tableOrder"
									:key="idx"
								> 
										{{ row[key] }}	
								</td>
							</tr>
						</tbody>
               </table>
            </div>
</template>

<script>
export default {
    name: 'Table',
    props: ['ddata'],
    data: () => ({
        tableOrder: ['Player_Name', 'Batting_Hand', 'Bowling_Skill', 'Country', 'DOB']
    })
}
</script>

<style>

.table{
	width: 70%;
	
}
.yo{
	font-size: 15px;
}

</style>