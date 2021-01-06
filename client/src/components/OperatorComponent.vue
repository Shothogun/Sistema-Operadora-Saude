<template>
  <div class="container">
    <h1>Operadoras de Saúde</h1>
    <input type="text" v-model="search" placeholder="Razao social">
    <hr>
    <p class="error" v-if="error">{{erro}}</p>
    <div class="operators-container">
      <div class="operator"
        v-for="operator in filteredOperators"
        v-bind:item="operator"
        v-bind:key="operator._id"
      >
      <p class="text"> {{operator.razaoSocial}} </p>
      </div>
    </div>
  </div>
</template>

<script>
import OperatorService from '../OperatorService';

export default {
  name: 'OperatorComponent',
  data(){
    return {
      operators: [],
      error: '',
      search: ''
    }
  },

  async created() {
    try{
      this.operators = await OperatorService.getOperators();
    }
    catch(err){
      this.error = err.message;
    }
  },

  methods: {
    async searchOperator () {
      this.operators = await OperatorService.searchOperator(this.search);
    }
  },

  computed: {
    filteredOperators: function (){
      return this.operators.filter((operator) => {
        return operator.razaoSocial.match(this.search.toUpperCase());
      });
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding:  10px;
  margin-bottom: 15px;
}

div.operator {
  position: relative;
  border: 1px solid #5bd658;
  background-color:  #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
