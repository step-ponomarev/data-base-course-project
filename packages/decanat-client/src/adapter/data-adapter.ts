import {DataType} from '../data/data-type';
import {Column} from '../components/table/Table';

export function getTableColumns(data: any, type: DataType): Column[] {
    const field: string = getFiledNameByType(type)
    const obj: object | null = getObject(data, field);

    if (obj === null) {
        return [];
    }

    const keys: string[] = getKeys(obj);
    if (keys.length === 0) {
        return [];
    }

    return keys.map(item => ({
        field: item,
        headerName: item,
        width: 150
    }));
}

export function getTableRows(data: any, type: DataType): Object[] {
    const field = getFiledNameByType(type);
    const obj: object | null = getObject(data, field);

    if (obj === null) {
        return [];
    }

    const keys: string[] = getKeys(obj);
    const values: any[] = data[field];

    if (keys.length === 0) {
        return [];
    }

    return values.map(value => {
        const row = {
            id: Math.random()
        };

        keys.forEach(key => {
            Object.assign(row, {[key]: value[key]});
        });

        return row;
    });
}

function getKeys(obj: Object): Array<string> {
    return Object.keys(obj).filter(key => key !== '__typename');
}

function getObject(data: any, field: string): object | null {
    const values: Object[] = data[field];

    if (values.length === 0) {
        return null;
    }

    return values[0];
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