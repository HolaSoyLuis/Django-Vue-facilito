<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <h2>Editar libro</h2>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <form @onSubmit="onSubmit">
                            <div class="form-group row">
                                <label for="title" class="col-sm-2 col-form-label">Titulo</label>
                                <div class="col-sm 6">
                                    <input type="text" placeholder="Titulo" name="title" class="form-control" v-model.trim="form.title">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="description" class="col-sm-2 col-form-label">Descripcion</label>
                                <div class="col-sm 6">
                                    <textarea name="description" class="form-control" placeholder="Descripcion" cols="30" rows="10" v-model.trim="form.description"></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col text-left">
                                    <b-button type="submit" variant="primary">Editar</b-button>
                                    <b-button type="submit" variant="btn-large-space" :to="{ name: 'list' }">Cancelar</b-button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default{
    data(){
        return {
            id: this.$route.params.id,
            form: {
                title: '',
                description: ''
            }
        }
    }
}
</script>

<style lang="css" scoped>
</style>