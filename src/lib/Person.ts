export default class Person {

  private _name: string = null;

  constructor(name: string) {
    this._name = name
  }

  get name(): string {
    return this._name
  }

}