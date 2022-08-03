import axios from "axios";

export default class UserService {
  static serverURL = "http://localhost:9000";

  static getAllUsers() {
    let dataURL = `${this.serverURL}/people`;
    return axios.get(dataURL);
  }

  static getUserById(id) {
    let dataURL = `${this.serverURL}/people/${id}`;
    return axios.get(dataURL);
  }

  static createUser(people) {
    let dataURL = `${this.serverURL}/people/`;
    return axios.post(dataURL, people);
  }

  static updateUser(people, id) {
    let dataURL = `${this.serverURL}/people/${id}`;
    return axios.put(dataURL, people);
  }

  static deleteUser(id) {
    let dataURL = `${this.serverURL}/people/${id}`;
    return axios.delete(dataURL);
  }

  static favouriteUser(id, favourite) {
    let dataURL = `${this.serverURL}/people/${id}`;
    return axios.patch(dataURL, favourite);
  }
}
