class DataItems {
  constructor() {
    this.itemsURL = [];
  }
  setAdd (name, url, path) {
    this.itemsURL.push({name: name, url:url, path: path })
  }
  getURL (url) {
      let res = false;
      console.log(url, this.itemsURL.length);
    for (var i = 0; i < this.itemsURL.length; i++) {
      if (url == this.itemsURL[i].url) res = this.itemsURL[i]
    }
    return res;
  }
  splitURL = url => url.split('/').filter((item, index) => ((item.length > 0) || (index == 0)));
};



let mrouter = (function () {
  let mrout = new DataItems();
//************************
  mrout.setAdd("Главная", "/", "../scr/modules/Home.js");
  mrout.setAdd("Матиматика", "/Matematika", "../scr/modules/matematika.js");


  return mrout;
})();
export default mrouter;
