
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
class itemURL {
  constructor(name, url, path, level) {
    [this.name, this.url, this.path, this.level] = [name, url, path, level];
    this.branch = [];
  }
  addBranch (name, url, path) {
    this.branch.push(new itemURL(name, url, path, this.level+1));
  }
  splitURL = url => url.split('/').filter(item => item.length > 0)

  }
}

export default mrouter;
