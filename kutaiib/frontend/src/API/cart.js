class Cart {
  constructor() {}

  static addToCart(itemID, quantity) {
    if (localStorage[itemID] == undefined) {
      localStorage[itemID] = quantity;
    }
    let ogQuan = Number(localStorage[itemID]);
    localStorage[itemID] = ogQuan + quantity;
  }

  static SetItem(itemID, quantity) {
    localStorage[itemID] = quantity;
  }

  static get() {
    return localStorage;
  }

  static Count() {
    let total = 0;
    const keys = Object.keys(localStorage);
    for (let key of keys) {
      // if (key == "cart") continue;
      total += Number(localStorage.getItem(key));
    }
    return total;
  }
  static Clear() {
    const keys = Object.keys(localStorage);
    for (let key of keys) {
      localStorage[key] = 0;
    }
  }
  static Total() {
    let total = 0;
    const keys = Object.keys(localStorage);
    for (let key of keys) {
      // if (key == "cart") continue;
      total += Number(localStorage[key]);
    }
    return total;
  }
}

export default Cart;
