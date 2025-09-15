export declare class UpdateTodoDto {
    readonly id: number;
    readonly text?: string | undefined;
    readonly completedAdt?: Date | undefined;
    private constructor();
    get values(): {
        [key: string]: any;
    };
    static update(props: {
        [key: string]: any;
    }): [string?, UpdateTodoDto?];
}
//# sourceMappingURL=update-todo.dto.d.ts.map