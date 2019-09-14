const mrouter = new Router();

class Router {
  constructor() {
    this.data = [];

  }
  setAdd (name, url, path) {
    this.data.push({name: name, url:url, path: path })
  }
  getURL (url) {
      let res = false;
      let data = this.data;
    for (let i = 0; i < data.lenght; i++) {
      if (url == data[i].url) res = data[i]
    }
    return res;
  }
};

export default mrouter;
