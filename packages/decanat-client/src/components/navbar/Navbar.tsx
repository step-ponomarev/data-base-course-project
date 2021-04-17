import React, {FC} from 'react';
import {DataItemSelect} from './DataItemSelect';
import {DataType} from '../../data/data-type';
import {Button} from '@material-ui/core';
import style from './Navbar.module.css';
import {useAppSelector} from '../../store';
import {gql} from '@apollo/client/core';
import {useQuery} from '@apollo/client';
import {PersonQueryType} from '../../apollo/queries/query-types';

type Props = {
    selectItems: Array<DataType>
}

export const Navbar: FC<Props> = ({selectItems}) => {
    const selectedValues: Array<string | number> = useAppSelector(state => state.selectionReducer.selectedIds);
    const {loading, error, data} = useQuery<PersonQueryType>(gql`
        query{
            person(id: 1){
                firstName,
                lastName
            }
        }
    `);

    const onClickDelete = () => {
        console.log(data?.person.lastName);
    }

    return (
        <div className={style.navbar}>
            <div className={style.select}>
                <DataItemSelect items={selectItems}/>
            </div>

            <Button color="primary" disabled={selectedValues.length === 0} onClick={onClickDelete}>
                Изменить
            </Button>

            <Button color="secondary" disabled={selectedValues.length === 0} onClick={onClickDelete}>
                Удалить
            </Button>
        </div>
    )
}
