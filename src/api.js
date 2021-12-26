import axios from "axios";

export default axios.create({
  baseURL: `https://stagiaire.herokuapp.com/api/`,
});
