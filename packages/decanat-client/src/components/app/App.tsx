import {Column, Table} from '../table/Table';
import React, {useState} from 'react';
import {Navbar} from '../navbar/Navbar';
import {DataType} from '../../data/data-type';
import {useAppDispatch, useAppSelector} from '../../store';
import {useQuery} from '@apollo/client';
import {getQuery} from '../../apollo/queries/queries';
import {Modal} from '@material-ui/core';
import style from './App.module.css';
import {setModalOpen} from '../../store/modal.reducer';
import {getTableColumns, getTableRows} from '../../adapter/data-adapter';

const navSelectItems = [
    DataType.STUDENT,
    DataType.SUBJECT,
    DataType.TEACHER,
    DataType.GROUP,
    DataType.MARK
]

function App() {
    const dispatch = useAppDispatch();
    const [columns, setColumns] = useState<Column[]>([]);
    const [rows, setRows] = useState<Object[]>([]);

    const openModal: boolean = useAppSelector(state => state.modalReducer.openModal);
    const type: DataType = useAppSelector(state => state.selectionReducer.selectedDataType);

    const onCompleted = (data: object) => {
        setColumns(getTableColumns(data, type));
        setRows(getTableRows(data, type));

    }

    const closeModal = () => {
        dispatch(setModalOpen(false));
    }

    useQuery(getQuery(type), {
        onCompleted,
        fetchPolicy: 'no-cache'
    });

    return (
        <div>
            <Modal open={openModal} onClose={closeModal}>
                <div className={style.modalWrapper}>
                    Модалка
                </div>
            </Modal>

            <Navbar selectItems={navSelectItems}/>
            <div className={style.tableWrapper}>
                <Table columns={columns} rows={rows} pageSize={5}/>
            </div>
        </div>
    );
}

export default App;
