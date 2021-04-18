import React, {FC} from 'react';
import {DataItemSelect} from './DataItemSelect';
import {DataType} from '../../data/data-type';
import {Button} from '@material-ui/core';
import style from './Navbar.module.css';
import {useAppSelector} from '../../store';

type Props = {
    selectItems: Array<DataType>
}

export const Navbar: FC<Props> = ({selectItems}) => {
    const selectedValues: Array<string | number> = useAppSelector(state => state.selectionReducer.selectedIds);

    const onClickDelete = () => {
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
