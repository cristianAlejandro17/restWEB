"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTodoDto = void 0;
class UpdateTodoDto {
    id;
    text;
    completedAdt;
    constructor(id, text, completedAdt) {
        this.id = id;
        this.text = text;
        this.completedAdt = completedAdt;
    }
    get values() {
        const returnObj = {};
        if (this.text)
            returnObj.text = this.text;
        if (this.completedAdt)
            returnObj.completedAdt = this.completedAdt;
        return returnObj;
    }
    static update(props) {
        const { id, text, completedAdt } = props;
        console.log(id, 'id desde dto');
        console.log(id, 'id desde dto');
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
        return [, new UpdateTodoDto(id, text, completedAdt)];
    }
}
exports.UpdateTodoDto = UpdateTodoDto;
//# sourceMappingURL=update-todo.dto.js.map