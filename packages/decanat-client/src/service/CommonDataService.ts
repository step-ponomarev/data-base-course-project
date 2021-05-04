import {DataType} from '../data/data-type';
import {client} from '../apollo';
import {getQuery} from '../apollo/requests/queries';
import {getObjectArray} from '../adapter/data-adapter';
import {getCreateMutation, getDeleteMutation, getEditMutation} from '../apollo/requests/mutations';
import {ValuedField} from '../store/valued.fields.reducer';

interface TData {
    data: any
}

export async function fetchData(type: DataType): Promise<any[]> {
    const data = await client.query<TData>({query: getQuery(type), fetchPolicy: 'no-cache'});

    return getObjectArray(data.data);
}

export async function editData(type: DataType, valuedFields: ValuedField[], ids: number[]) {
    await client.mutate({mutation: getEditMutation(type, valuedFields, ids)});
}

export async function createData(type: DataType, valuedFields: ValuedField[]) {
    await client.mutate({mutation: getCreateMutation(type, valuedFields)});
}

//TODO: Неправильно возвращать IDS не с сервера
export async function deleteData(type: DataType, ids: number[]): Promise<number[]> {
    const data = await client.mutate({mutation: getDeleteMutation(type, ids)});

    return ids;
}