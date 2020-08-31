export class Crud {
  constructor(
    public id: number,
    public name: string
  ) { }

  static adapt(item: any): Crud {
    return new Crud(
      item.id,
      item.name,
    );
  }
}
