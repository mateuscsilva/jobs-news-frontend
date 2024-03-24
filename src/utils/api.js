class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
    this._apiKey = this.apiKey;
  }

  setApiKey(apiKey) {
    this.apiKey = apiKey;
  }

  getJobs(pages){
    return fetch(`${this._baseUrl}/jobs?page=${pages}&appid=${this._apiKey}`, {
      method: "GET",
    })
    .then(res => {
      return res.json();
    }).catch((err) => console.log(`${err}`));
  }

  getJobById(id){
    return fetch(`${this._baseUrl}/jobs/${id}`, {
      method: "GET",
    })
    .then(res => {
      return res.json();
    }).catch((err) => console.log(`${err}`));
  }

  getCompanies(pages){
    return fetch(`${this._baseUrl}/companies?page=${pages}&appid=${this._apiKey}`, {
      method: "GET",
    })
    .then(res => {
      return res.json();
    }).catch((err) => console.log(`${err}`));
  }

  getCompanyById(id){
    return fetch(`${this._baseUrl}/companies/${id}`, {
      method: "GET",
    })
    .then(res => {
      return res.json();
    }).catch((err) => console.log(`${err}`));
  }
}

let api = new Api({
  baseUrl: "https://www.themuse.com/api/public",
  headers: {
    authorization: "Bearer 4424813839aa6b8d95133317f3dbe966cf6f46fa25d8a51d041497807ce7453b",
  },
  apiKey: "4424813839aa6b8d95133317f3dbe966cf6f46fa25d8a51d041497807ce7453b",
});

export default api;