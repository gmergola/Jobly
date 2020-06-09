import axios from "axios";

class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    let currentToken = localStorage.getItem("token");
    paramsOrData._token = currentToken;

    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `http://localhost:3001/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData
      })).data;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
    }

    catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  //gets company by handle from backend API

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  //gets all companies from backend API

  static async getAllCompanies() {
    let res = await this.request('companies/');
    return res.companies;
  }

  //gets all jobs from backend API

  static async getAllJobs() {
    let res = await this.request('jobs/');
    return res.jobs;
  }


  // get filtered companies

  static async getFilteredCompanies(params) {
    let res = await this.request('companies/', params);
    return res.companies;
  }

  // get filtered jobs

  static async getFilteredJobs(params) {
    let res = await this.request('jobs/', params);
    return res.jobs;
  }

  // make login post request
  // jsonData -> {username: '', password: ''}
  static async login(data){
    let res = await this.request('login/', data, "post");
    return res.token;
  }
  // make signup post request
  // jsonData -> {username: '', password: '', first_name: '', last_name: '', email: ''}
  static async signup(data){
    let res = await this.request('users/', data, "post");
    return res.token;
  }

  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async updateProfile(username, password){
    let res = await this.request(`users/${username}`, password, "patch");
    return res.user;
  }

}


export default JoblyApi;


