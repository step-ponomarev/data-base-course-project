import {DataType} from '../data/data-type';
import {Column} from '../components/table/Table';

export function getTableColumns(data: object, type: DataType): Column[] {
    const field = getFiledNameByType(type)
    // @ts-ignore
    const values: Object[] = data[field];

    // @ts-ignore
    const keys: Array<string> = getKeys(values[0]);

    if (keys.length === 0) {
        return [];
    }

    // @ts-ignore
    return keys.map(item => ({
        field: item,
        headerName: item,
        width: 150
    }));
}

export function getTableRows(data: object, type: DataType): Object[] {
    const field = getFiledNameByType(type);

    // @ts-ignore
    if (!data || data[field].length === 0) {
        return [];
    }

    // @ts-ignore
    const values: Object[] = data[field];

    // @ts-ignore
    const keys: Array<string> = getKeys(values[0]);

    if (keys.length === 0) {
        return [];
    }

    return values.map(value => {
        const row = {
            id: Math.random()
        };

        keys.forEach(key => {
            // @ts-ignore
            row[key] = value[key];
        });

        return row;
    });
}

function getKeys(obj: Object): Array<string> {
    if (!obj) {
        return []
    }

    return Object.keys(obj).filter(key => key !== '__typename');
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