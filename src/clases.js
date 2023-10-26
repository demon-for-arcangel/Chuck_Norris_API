export class Categorias {
    constructor(){
        this.categorias = ["animal", "career", "celebrity", "dev", "explicit", "fashion", "food", "history", "money", "movie", "music", "political", "religion", "science", "sport", "travel"]
    }

    obtenerCategoria(){
        return this.categorias
    }
}