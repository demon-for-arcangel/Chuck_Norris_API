export class ChuckNorris {
    static async getCategorias() {
        const response = await fetch('https://api.chucknorris.io/jokes/categories');
        const data = await response.json();
        return data;
    }

    static async getFrase(categoria) {
        const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${categoria}`);
        const data = await response.json();
        return data.value;
    }
}