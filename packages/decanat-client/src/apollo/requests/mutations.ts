import {DocumentNode} from 'graphql';
import {MutationOptions, TypedDocumentNode} from '@apollo/client';
import {gql, OperationVariables} from '@apollo/client/core';
import {DataType} from '../../data/data-type';
import {ValuedField} from '../../store/valued.fields.reducer';

const UPDATE_PEOPLE = (args: string) => gql`
    mutation {
        updatePeople(peopleUpdateDto: ${args}) {
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
`;

const CREATE_PERSON = (args: string) => gql`
    mutation  {
        createPerson(personCreateDto: ${args}) {
            id,
            firstName,
            lastName,
            patherName,
            type
        }
    }
`

const DELETE_PEOPLE = (ids: Array<string | number>) => gql`
    mutation  {
        deletePeople(ids: [${ids}])
    }
`


const CREATE_SUBJECT = (args: string) => gql`
    mutation  {
        createSubject(subjectCreateDto: ${args}) {
            id,
            name
        }
    }
`

export function getCreateMutation(type: DataType, fields: ValuedField[]): DocumentNode | TypedDocumentNode<any, OperationVariables> {
    switch (type) {
        case DataType.STUDENT:
        case DataType.TEACHER:
            return CREATE_PERSON(`{${fieldsToObj(fields, {group: true, type: true})}}`);
        case DataType.SUBJECT:
            return CREATE_SUBJECT(`{${fieldsToObj(fields, {group: true, type: true})}}`);
        default:
            return CREATE_PERSON(`{${fieldsToObj(fields, {group: true, type: true})}}`);
    }
}

export function getEditMutation(type: DataType, fields: ValuedField[], ids: Array<string | number>): DocumentNode | TypedDocumentNode<any, OperationVariables> {
    switch (type) {
        case DataType.STUDENT:
        case DataType.TEACHER:
            return UPDATE_PEOPLE(`{${fieldsToObj(fields, {group: true, type: true})}, ids: [${ids}]}`);
        default:
            return CREATE_PERSON(`{${fieldsToObj(fields, {group: true, type: true})}}`);
    }
}

export function getDeleteMutation(type: DataType, ids: Array<string | number>): DocumentNode | TypedDocumentNode<any, OperationVariables> {
    switch (type) {
        case DataType.STUDENT:
        case DataType.TEACHER:
            return DELETE_PEOPLE(ids);
        default:
            return CREATE_PERSON(`{}`);
    }
}

function fieldsToObj(fields: ValuedField[], numberValues: any): string {
    return fields.filter(field => field.name !== 'id')
        .map((item: ValuedField) => item.name in numberValues ? `${item.name}: ${item.value}` : `${item.name}: "${item.value}"`)
        .join(', ');
}

