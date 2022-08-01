import axios from "axios";

export default class UserService {
  static serverURL = "http://localhost:9000";

  static getAllUsers() {
    let dataURL = `${this.serverURL}/people`;
    return axios.get(dataURL);
  }

  static createUser(people) {
    let dataURL = `${this.serverURL}/people/`;
    return axios.post(dataURL, people);
  }

  static updateUser(user, id) {
    let dataURL = `${this.serverURL}/people/${id}`;
    return axios.put(dataURL, user);
  }

  static deleteUser(id) {
    let dataURL = `${this.serverURL}/people/${id}`;
    return axios.delete(dataURL);
  }

  static favouriteUser(id) {
    let dataURL = `${this.serverURL}/favourites/`;
    return axios.post(dataURL, id);
  }
}
