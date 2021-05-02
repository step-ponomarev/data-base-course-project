import {Column, Table} from '../table/Table';
import React, {useState} from 'react';
import {Navbar} from '../navbar/Navbar';
import {DataType} from '../../data/data-type';
import {useAppDispatch, useAppSelector} from '../../store';
import {useMutation, useQuery} from '@apollo/client';
import {getQuery} from '../../apollo/queries/queries';
import {Modal} from '@material-ui/core';
import style from './App.module.css';
import {RequestType, setModalOpen} from '../../store/modal.reducer';
import {getFields, getObjectArray, getTableColumns, getTableRows} from '../../adapter/data-adapter';
import {SwitchModalBody} from '../modal-body/SwitchModalBody';
import {getMutation} from '../../apollo/queries/mutations';
import {Field, setFields} from '../../store/fields.reducer';

const navSelectItems = [
    DataType.STUDENT,
    DataType.SUBJECT,
    DataType.TEACHER,
    DataType.GROUP,
    DataType.MARK
]

function useFieldsStatus(type: DataType, fields: Field[], requestType: RequestType, onComplete: (d: any) => void) {
    const dispatch = useAppDispatch();
    const ids: Array<string | number> = useAppSelector(state => state.selectionReducer.selectedIds);

    const [action] = useMutation(getMutation(ids, fields, type, requestType), {onCompleted: onComplete});

    if (fields.length === 0 || requestType === RequestType.DELETE) {
        return;
    }

    dispatch(setFields([]));
    action()
        .catch(e => console.log(e));
}

function App() {
    const dispatch = useAppDispatch();
    const [shownData, setShownData] = useState<any[]>([])
    const [columns, setColumns] = useState<Column[]>([]);
    const [rows, setRows] = useState<Object[]>([]);
    const [fields, setFields] = useState<string[]>([]);
    const valuedFields = useAppSelector(state => state.fieldsReducer.fields);

    const openModal: boolean = useAppSelector(state => state.modalReducer.openModal);
    const type: DataType = useAppSelector(state => state.selectionReducer.selectedDataType);
    const requestType: RequestType = useAppSelector(state => state.modalReducer.requestType);

    const onGetData = (data: object) => {
        const sd = getObjectArray(data, type);
        setShownData(sd);

        setColumns(getTableColumns(sd));
        setRows(getTableRows(sd));
        setFields(getFields(sd));
    };

    const onUpdateData = (data: any) => {
        const dataArray = getObjectArray(data, type);
        const newData = requestType === RequestType.EDIT
            ? [...shownData.filter(sd => dataArray.filter(d => sd.id === d.id).length === 0), ...dataArray]
            : [...shownData, ...dataArray];

        setShownData(newData);
        setColumns(getTableColumns(newData));
        setRows(getTableRows(newData));
        setFields(getFields(newData));
    };

    const closeModal = () => {
        dispatch(setModalOpen(false));
    }

    useQuery(getQuery(type), {
        onCompleted: onGetData,
        fetchPolicy: 'no-cache'
    });

    useFieldsStatus(type, valuedFields, requestType, onUpdateData);

    return (
        <div>
            <Modal open={openModal} onClose={closeModal}>
                <div className={style.modalWrapper}>
                    <SwitchModalBody modalMode={requestType} fields={fields}/>
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
