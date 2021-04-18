export enum DataType {
    STUDENT=1,
    TEACHER,
    SUBJECT,
    GROUP,
    MARK,
}

export type PresentDataType = {
    name: string,
    id: number
}

export function getPresentDataType(type: DataType): PresentDataType {
    switch (type) {
        case DataType.STUDENT:
            return {name: 'Студент', id: 1}
        case DataType.TEACHER:
            return {name: 'Преподаватель', id: 2}
        case DataType.SUBJECT:
            return {name: 'Предмет', id: 3}
        case DataType.GROUP:
            return {name: 'Группа', id: 4}
        case DataType.MARK:
            return {name: 'Оценка', id: 5   }
    }
}