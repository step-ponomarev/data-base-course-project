import React, {FC} from 'react';
import {ModalType, setModalOpen} from '../../store/modal.reducer';
import {ActionForm} from './form-wrapper/ActionForm';
import {useAppDispatch, useAppSelector} from '../../store';
import {Button} from '@material-ui/core';
import {createData, deleteData, editData} from '../../service/CommonDataService';
import {DataType} from '../../data/data-type';
import {setNeedFetchData} from '../../store/table.reducer';
import {setValuedFields, ValuedField} from '../../store/valued.fields.reducer';

type Props = {
    modalMode: ModalType,
}

export const SwitchModalBody: FC<Props> = ({modalMode}) => {
    const dispatch = useAppDispatch();

    const ids: number[] = useAppSelector(state => state.selectionReducer.selectedIds);
    const formFields: string[] = useAppSelector(state => state.valuedFieldsReducer.formFields);
    const valuedFields: ValuedField[] = useAppSelector(state => state.valuedFieldsReducer.valuedFields);
    const dataType: DataType = useAppSelector(state => state.selectionReducer.selectedDataType);

    const onAdd = async () => {
        await createData(dataType, valuedFields);

        dispatch(setNeedFetchData(true));
        dispatch(setModalOpen(false));
    }

    const onEdit = async () => {
        await editData(dataType, valuedFields, ids);

        dispatch(setNeedFetchData(true));
        dispatch(setModalOpen(false));
    }

    const onConfirm = async () => {
        await deleteData(dataType, ids);

        dispatch(setNeedFetchData(true));
        dispatch(setModalOpen(false));
    }

    const switchRender = (requestType: ModalType) => {
        switch (requestType) {
            case ModalType.DELETE:
                return <Button color="secondary" onClick={onConfirm}>
                    Подтвердить
                </Button>
            case ModalType.ADD:
                return <ActionForm fields={formFields} action={onAdd}/>
            case ModalType.EDIT:
                return <ActionForm fields={formFields} action={onEdit}/>
        }
    }

    return (
        <>
            {switchRender(modalMode)}
        </>
    )
}