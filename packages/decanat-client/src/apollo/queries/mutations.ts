import {DocumentNode} from 'graphql';
import {TypedDocumentNode} from '@apollo/client';
import {gql, OperationVariables} from '@apollo/client/core';
import {DataType} from '../../data/data-type';
import {Field} from '../../store/fields.reducer';

const CHANGE_PEOPLE = gql`
    mutation changePeople(
        $ids: [ID!]!,
        $firstName: String!, 
        $lastName: String!, 
        $patherName: String!, 
        $type: PersonType!, 
        $group_id: Int,
    ) {
        changePeople(peopleChangeDto: {
            ids: $ids,
            firstName: $firstName,
            lastName: $lastName,
            patherName: $patherName,
            type: $type,
            group_id: $group_id
        }) {
            id,
            firstName,
            lastName,
            patherName,
            group {
                name
            }
            type
        }
    }
`

export function fieldsToObj(fields: Field[]): object {
    return fields.reduce((obj: object, item: Field) => Object.assign(obj,  {[item.name]: item.value}), {});
}

export function getMutation(type: DataType, fields: Field[]): DocumentNode | TypedDocumentNode<any, OperationVariables> {
    switch (type) {
        case DataType.STUDENT:
        case DataType.TEACHER:
            return CHANGE_PEOPLE;
        default:
            throw new Error('Unsupported type');
    }
}