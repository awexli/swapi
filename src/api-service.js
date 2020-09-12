export class ApiService {
  static apiUrl(query) {
    return `https://swapi.dev/api/${query}/?format=json`;
  }

  static async fetchPeople() {
    const response = await fetch(ApiService.apiUrl('people'));
    const data = await response.json();
    return data.results;
  }

  static async fetchPlanets() {
    const response = await fetch(ApiService.apiUrl('planets'));
    const data = await response.json();
    return data.results;
  }
}