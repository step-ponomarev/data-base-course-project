import {Table} from '../table/Table';
import React, {useEffect} from 'react';
import {Navbar} from '../navbar/Navbar';
import {DataType} from '../../data/data-type';
import {useAppDispatch, useAppSelector} from '../../store';
import {Modal} from '@material-ui/core';
import style from './App.module.css';
import {ModalType, setModalOpen} from '../../store/modal.reducer';
import {getFields, getObjectArray, getTableColumns, getTableRows} from '../../adapter/data-adapter';
import {SwitchModalBody} from '../modal-body/SwitchModalBody';
import {setFormFields} from '../../store/valued.fields.reducer';
import {fetchData} from '../../service/CommonDataService';
import {setColumns, setRows} from '../../store/table.reducer';

const navSelectItems = [
    DataType.STUDENT,
    DataType.SUBJECT,
    DataType.TEACHER,
    DataType.GROUP,
    DataType.MARK
]

function App() {
    const dispatch = useAppDispatch();
    const openModal: boolean = useAppSelector(state => state.modalReducer.openModal);
    const dataType: DataType = useAppSelector(state => state.selectionReducer.selectedDataType);
    const requestType: ModalType = useAppSelector(state => state.modalReducer.requestType);
    const needFetchData: boolean = useAppSelector(state => state.tableReducer.needFetchData);

    useEffect(() => {
        if (!needFetchData) {
            return;
        }

        fetchData(dataType)
            .then(onGetData)
            .catch(console.error);
    });

    const onGetData = (data: any) => {
        if (!data) {
            return;
        }

        dispatch(setColumns(getTableColumns(data)));
        dispatch(setRows(getTableRows(data)));
        dispatch(setFormFields(getFields(getObjectArray(data))));
    };

    const closeModal = () => {
        dispatch(setModalOpen(false));
    }

    return (
        <>
            <Modal open={openModal} onClose={closeModal}>
                <div className={style.modalWrapper}>
                    <SwitchModalBody modalMode={requestType}/>
                </div>
            </Modal>

            <Navbar selectItems={navSelectItems}/>
            <div className={style.tableWrapper}>
                <Table pageSize={5}/>
            </div>
        </>
    );
}

export default App;
