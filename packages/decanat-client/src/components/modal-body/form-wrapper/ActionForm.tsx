import React, {FC} from 'react';
import {Button} from '@material-ui/core';
import {ModalForm} from '../form/ModalForm';
import {setValuedFields, ValuedField} from '../../../store/valued.fields.reducer';
import {useAppDispatch} from '../../../store';

type Props = {
    fields: string[],
    action: () => void
}

export const ActionForm: FC<Props> = ({fields, action}) => {
    const dispatch = useAppDispatch();

    const onClick = async () => {
        const fields: ValuedField[] =
            Array.from<HTMLInputElement>(document.querySelectorAll('[name=itemField]'))
                .map(field => ({name: field.id, value: field.value}));
        await dispatch(setValuedFields(fields));

        await action();
    }

    return (
        <>
            <ModalForm fields={fields}/>
            <Button color="primary" onClick={onClick}>
                Выполнить
            </Button>
        </>
    )
}