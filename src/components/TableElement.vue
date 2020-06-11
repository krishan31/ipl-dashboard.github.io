<template>
  <div>
    <table>
        <thead>
        <tr>
            <th
             v-for="key in columns"
             :key="key"
            >
            {{ key }}
            </th>
        </tr>
        </thead>
        <tbody>
            <tr 
             v-for="entry in data"
             :key="entry">
                <td v-for="key in columns"
                :key="key">
                    {{ entry[key] }}
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableElement',
  props: {
    data: Array,
    columns: Array,
    filterKey: String
  },
  data: function () {
    return {
      msg: 'Welcome to Your Vue.js App',
      
    }
  },
  computed: {
  },
  filters: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>