class Car {
  private _engine: string

  constructor (engine: string) {
    this.engine = engine
  }

  get engine(): string {
    return this._engine
  }

  set engine(value: string) {
    if (value == undefined) throw "Supply an engine!"
    this._engine = value
  }
}

let brum = new Car("V8")

console.log(brum.engine)

brum.engine = "V6"

console.log(brum.engine)
