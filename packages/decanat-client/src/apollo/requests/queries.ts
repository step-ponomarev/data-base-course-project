import {gql, OperationVariables} from '@apollo/client/core';
import {DataType} from '../../data/data-type';
import {DocumentNode} from 'graphql';
import {TypedDocumentNode} from '@apollo/client';

const FETCH_PERSON_BY_TYPE = (type: string): DocumentNode | TypedDocumentNode<any, OperationVariables> => gql`
    query{
        peopleByType(type: ${type}) {
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

const FETCH_GROUPS = gql`
    query{
        groups {
            id,
            name
        }
    }
`

const FETCH_SUBJECTS = gql`
    query{
        subjects {
            id,
            name
        }
    }
`

const FETCH_MARKS = gql`
    query{
        marks {
            id,
            value,
            student {
                id,
                firstName,
                lastName,
                patherName,
            },
            subject {
                name
            }
        }
    }
`

export function getQuery(type: DataType): DocumentNode | TypedDocumentNode<any, OperationVariables> {
    switch (type) {
        case DataType.STUDENT:
            return FETCH_PERSON_BY_TYPE('STUDENT');
        case DataType.TEACHER:
            return FETCH_PERSON_BY_TYPE('TEACHER');
        case DataType.SUBJECT:
            return FETCH_SUBJECTS;
        case DataType.GROUP:
            return FETCH_GROUPS;
        case DataType.MARK:
            return FETCH_MARKS;
    }
}