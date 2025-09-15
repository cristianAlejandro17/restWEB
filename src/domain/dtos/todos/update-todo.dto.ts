export class UpdateTodoDto {
  private constructor(
    public readonly id: number,
    public readonly text?: string,
    public readonly completedAdt?: Date
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.text) returnObj.text = this.text;
    if (this.completedAdt) returnObj.completedAdt = this.completedAdt;
    return returnObj;
  }
  static update(props: { [key: string]: any }): [string?, UpdateTodoDto?] {
    const { id, text, completedAdt } = props;
    console.log(id,'id desde dto')
    console.log(id,'id desde dto')
    if (!id || isNaN(Number(id))) {
      return ["id must be a valid number"];
    }
    let newCompletedAdt = completedAdt;

    if (completedAdt) {
      newCompletedAdt = new Date(newCompletedAdt);
      if (newCompletedAdt.toString() === "Invalid Date") {
        return ["completedAdt must be a valid date"];
      }
    }
    return [, new UpdateTodoDto(id,text, completedAdt)];
  }
}
