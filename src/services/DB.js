export default class DB {

  // on enregistre l'url de l'api
  static setApiURL(data) {
    this.apiURL = data;
  }
  // on récupère tles données de l'API et  les renvoie en JSON
  static async findAll() {
    const response = await fetch(this.apiURL + "products");
    return response.json();
  }
  }