const flowerpot = {
  flower: "rose",
  soil: "red",
  petalCount: 5,
  water_time: {
    morning: 10,
    noon: 14,
    evening: 17,
    night: 21,
  },
  increasePetalCount: function () {
    ++this.petalCount;
  },
};
console.log("Petal Count : ", flowerpot.petalCount);

const laundryBasket = {
  color: "Red",
  clothes: 50,
  washClothes: function () {
    console.log("washed ", this.clothes, "Clothes");
    this.clothes = 0;
  },
  addClothes: function () {
    console.log( ++this.clothes, "Clothes in the basket");
  },
};
