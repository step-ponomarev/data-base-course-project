import {Column} from '../components/table/Table';


const USELESS_PROP_OF_GQL = '__typename';

export function getObjectArray(data: any): any[] {
    const key: string = Object.keys(data)[0];
    if (!data[key]) {
        return [];
    }

    return Array.isArray(data[key]) ? data[key].map((item: any) => {
            const copy = {...item};
            delete copy[USELESS_PROP_OF_GQL];
            return copy;
        })
        : Array.of(data[key]);
}

export function getTableColumns(data: readonly any[]): Column[] {
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

export function getTableRows(data: readonly  any[]): Object[] {
    if (data.length === 0) {
        return [];
    }

    const obj: any = data[0];
    const keys: string[] = Object.keys(obj);

    if (keys.length === 0) {
        return [];
    }

    return data.map(item => convertToRow(keys, item));
}

export function getFields(data: readonly  any[]): string[] {
    if (data.length === 0) {
        return [];
    }

    return Object.keys(data[0]);
}

function convertToRow(keys: readonly string[], value: any): any {
    const row: any = {
        id: Math.random()
    };

    keys.forEach(key => {
        Object.assign(row, {[key]: value[key]});
    });

    return row;
}
