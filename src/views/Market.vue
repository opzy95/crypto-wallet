<template>
    <div>
  <Navbar/>
    </div>
    <table style="width: 100%; margin: 50px auto 50px auto; padding: 20px;">
        <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>First lunch</th>
        <th>Last updated</th>
        <th>Price</th>
        <th>Market Cap</th>
        </tr>
        <tr v-for="coin in coins" :key="coin.rank">
            <td>{{ coin.rank }}</td>
            <td>{{ coin.name }}</td>
            <td>{{ coin.first_data_at }}</td>
            <td>{{ coin.last_updated }}</td>
            <td>{{ coin.quotes.USD.price }}</td>
            <td>{{ coin.quotes.USD.market_cap }}</td>
        </tr>
    </table>
</template>

<script>
import axios from 'axios'
export default {
    data() {
      return {
        coins: null,
      }
    },
    methods: {
      async fetchData() {      
        const response = await axios.get("https://api.coinpaprika.com/v1/tickers/");
        this.coins = response.data.splice(0,20)
        console.log(response);
        
      },    
  },
  mounted() {
    this.fetchData()
},
}
</script>


<style scoped>
table{
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
}
th,td{
  border: 1px solid black;
  /* padding: 7px; */
  padding: 0.75rem;
  vertical-align: top;
  /* border-top: 1px solid #dee2e6; */
  /* text-align: left; */
}
@media screen and (max-width: 800px) {
  table {
    display: block;
    overflow-x: auto;
  }
}

</style>