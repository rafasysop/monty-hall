export default class DoorModel {
  #number: number
  #haveGift: boolean
  #active: boolean
  #open: boolean

  constructor(number: number, haveGift = false, active = false, open = false) {
    this.#number = number;
    this.#haveGift = haveGift;
    this.#active = active;
    this.#open = open;
  }

  get number() {
    return this.#number;
  }

  get haveGift() {
    return this.#haveGift;
  }

  get active() {
    return this.#active;
  }

  get open() {
    return this.#open;
  }

  setActive() {
    const active = !this.active;
    return new DoorModel(this.number, this.haveGift, active, this.open);
  }

  setReset() {
    const active = false
    return new DoorModel(this.number, this.haveGift, active, this.open);
  }

  setOpen() {
    const open = true
    return new DoorModel(this.number, this.haveGift, this.active, open);
  }

}
