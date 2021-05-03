import React, {FC} from 'react';
import {Button} from '@material-ui/core';
import {useAppDispatch} from '../../../store';
import {ValuedField, setValuedFields} from '../../../store/valued.fields.reducer';
import {ModalForm} from '../form/ModalForm';

type Props = {
    fields: string[]
}

export const ActionForm: FC<Props> = ({fields}) => {
    const dispatch = useAppDispatch();

    const saveChangesAction = () => {
        const fields: ValuedField[] = Array.from<HTMLInputElement>(document.querySelectorAll('[name=itemField]'))
            .map(field =>
                ({name: field.id, value: field.value})
            );

        dispatch(setValuedFields(fields));
    }

    return (
        <>
            <ModalForm fields={fields}/>
            <Button color="primary" onClick={saveChangesAction}>
                Выполнить
            </Button>
        </>
    )
}