import {Column, Table} from '../table/Table';
import React, {useState} from 'react';
import {Navbar} from '../navbar/Navbar';
import {DataType} from '../../data/data-type';
import {useAppDispatch, useAppSelector} from '../../store';
import {useQuery} from '@apollo/client';
import {getQuery} from '../../apollo/queries/queries';
import {Modal} from '@material-ui/core';
import style from './App.module.css';
import {ModalMode, setModalOpen} from '../../store/modal.reducer';
import {getFields, getObjectArray, getTableColumns, getTableRows} from '../../adapter/data-adapter';
import {SwitchModalBody} from '../modal-body/SwitchModalBody';

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
    const [fields, setFields] = useState<string[]>([]);

    const openModal: boolean = useAppSelector(state => state.modalReducer.openModal);
    const type: DataType = useAppSelector(state => state.selectionReducer.selectedDataType);
    const modalMode: ModalMode = useAppSelector(state => state.modalReducer.modalMode);

    const onCompleted = (data: object) => {
        const dataArray = getObjectArray(data, type);

        setColumns(getTableColumns(dataArray));
        setRows(getTableRows(dataArray));
        setFields(getFields(dataArray));
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
                    <SwitchModalBody modalMode={modalMode} fields={fields}/>
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
