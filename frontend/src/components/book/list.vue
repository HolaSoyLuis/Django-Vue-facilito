<template lang = "html">

<div class = "container">
    <div class = "row">
        <div class = "col text-left">
            <h2>Listado de libros </h2>
            <code>(API v1.0)</code>
            <div class="col-md-12">
              <b-table striped hover :items="books" :fields="fields">
                  <template slot="action" slot-scope="data">
                    <b-button size="sm" variant="primary">Editar</b-button>
                    <b-button size="sm" variant="danger">Eliminar</b-button>
                  </template>
              </b-table>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      fields: [
        { key: 'title', label: 'Titulo' },
        { key: 'description', label: 'Descripcion' },
        { key: 'action', label: 'Accion' },
      ],
      books: []
    }
  },
  methods: {
    getBooks () {
      const path = "http://localhost:8000/api/v1.0/book/"
      axios.get(path).then((response) => {
        this.books = response.data
      })
      .catch((error) =>{
        console.log(error)
      })
    }
  },
  created(){
    this.getBooks()
  }
}
</script>

<style lang="css" scoped>
</style>
