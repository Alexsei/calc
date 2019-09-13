const mrouter = {
  data
};
class router {
  constructor {
    this.data = [];

  }
  setAdd = function (name, url, path) {
    this.data.push({name: name, url:url, path: path })
  }
};

export default mrouter;
