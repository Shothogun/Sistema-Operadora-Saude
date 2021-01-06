<template>
  <div class="container">
    <h1 class="title" >Operadoras de Saúde</h1>
    <div class="search-operator">
      <label for="search-operator"> Pesquisar </label>
      <input
        type="text"
        id="search-operator"
        v-model="search"
        placeholder="Razao social"
      />
      <button @click="searchOperator">buscar</button>
    </div>
    <hr />
    <p class="error" v-if="error">{{ erro }}</p>
    <p class="searching" v-if="searchState">Buscando...</p>
    <div class="operators-container">
      <div
        class="operator"
        v-for="operator in operators"
        v-bind:item="operator"
        v-bind:key="operator._id"
      >
        <p class="text">{{ operator.razaoSocial }}</p>
        <p class="description">Registro ANS: {{ operator.registroANS }}</p>
        <p class="description">CNPJ: {{ operator.cnpj }}</p>
        <p class="description">Tel.: {{ operator.telefone }}</p>
        <p class="description">End. Eletronico: {{ operator.enderecoEletronico }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import OperatorService from "../services/OperatorService";
const url = "api/operators/";

export default {
  name: "OperatorComponent",
  data() {
    return {
      operators: [],
      error: "",
      search: "",
      searchState: false,
    };
  },

  async created() {
    try {
      this.operators = OperatorService.getOperators();
    } catch (err) {
      this.error = err.message;
    }
  },

  methods: {
    // Chamado quando é realizado a busca
    // Requisição http://localhost:5000/api/operators/search
    // Com query param 'razaoSocial' preenchido
    async searchOperator() {
      this.searchState = true;
      fetch(`${url}search?razaoSocial=${encodeURIComponent(this.search)}`)
        .then((res) => res.json())
        .then((res) => {
          this.searchState = false;
          this.operators = res;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}

h1.title{
  color: #1E90FF;
}

p.searching {
  border: 1px solid #fdec51;
  background-color: #fff781;
  padding: 10px;
  margin-bottom: 15px;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.operator {
  position: relative;
  border: 1px solid #98c8ffcc;
  background-color: #98c8ffcc;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

p.text {
  color: #1E90FF;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}

p.description {
  color: #302D2D;
  font-size: 15px;
  margin-bottom: 0;
}
</style>
