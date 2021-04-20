import {DataType} from '../data/data-type';
import {Column} from '../components/table/Table';

interface ObjType {
    [name: string]: any
}

export function getObjectArray(data: any, type: DataType): ObjType[] {
    const field: string = getFiledNameByType(type)

    if (!data[field]) {
        return [];
    }

    return data[field].map((item: ObjType) => {
        delete item['__typename'];
        return item
    });
}

export function getTableColumns(data: readonly ObjType[]): Column[] {
    if (data.length === 0) {
        return [];
    }

    const obj: object = data[0];
    const keys: string[] = Object.keys(obj);

    return keys.map(item => ({
        field: item,
        headerName: item,
        width: 150
    }));
}

export function getTableRows(data: readonly  ObjType[]): Object[] {
    if (data.length === 0) {
        return [];
    }

    const obj: ObjType = data[0];
    const keys: string[] = Object.keys(obj);

    if (keys.length === 0) {
        return [];
    }

    return data.map(item => convertToRow(keys, item));
}

export function getFields(data: readonly  ObjType[]): string[] {
    if (data.length === 0) {
        return [];
    }

    return Object.keys(data[0]);
}

function convertToRow(keys: readonly string[], value: ObjType): ObjType {
    const row: ObjType = {
        id: Math.random()
    };

    keys.forEach(key => {
        Object.assign(row, {[key]: value[key]});
    });

    return row;
}

function getFiledNameByType(type: DataType): string {
    switch (type) {
        case DataType.STUDENT:
        case DataType.TEACHER:
            return 'peopleByType';
        case DataType.SUBJECT:
            return 'subjects';
        case DataType.GROUP:
            return 'groups';
        case DataType.MARK:
            return 'marks';
    }
}