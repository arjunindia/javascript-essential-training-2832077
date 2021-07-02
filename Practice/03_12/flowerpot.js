class flowerpot {
  constructor(
    flower,
    soil,
    petalCount = 0,
    MwaterTime,
    UwaterTime,
    EwaterTime,
    NwaterTime
  ) {
    this.flower = flower;
    this.soil = soil;
    this.petalCount = petalCount;
    this.water_time = {
      morning: MwaterTime,
      noon: UwaterTime,
      evening: EwaterTime,
      night: NwaterTime,
    };
  }
  increasePetalCount() {
    this.petalCount++;
  }
}
export default flowerpot;
