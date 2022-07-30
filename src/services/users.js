import axios from "axios";

export default class UserService {
  static serverURL = "http://localhost:9000";

  static getAllUsers() {
    let dataURL = `${this.serverURL}/people`;
    return axios.get(dataURL);
  }

  static createUser(user) {
    let dataURL = `${this.serverURL}/create`;
    return axios.post(dataURL, user);
  }

  static updateUser(user, id) {
    let dataURL = `${this.serverURL}/update/${id}`;
    return axios.put(dataURL, user);
  }

  static deleteUser(id) {
    let dataURL = `${this.serverURL}/delete/${id}`;
    return axios.delete(dataURL);
  }
}
