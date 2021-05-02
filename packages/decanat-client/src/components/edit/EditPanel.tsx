import React, {FC} from 'react';
import classes from './EditPanel.module.css';
import {Button, TextField} from '@material-ui/core';
import {useAppDispatch} from '../../store';
import {Field, setFields} from '../../store/fields.reducer';

type Props = {
    fields: string[]
}

export const EditPanel: FC<Props> = ({fields}) => {
    const dispatch = useAppDispatch();

    const fieldElements = fields.map(f => <TextField id={f} key={f} name="itemField" label={f.toUpperCase()} disabled={f === 'id'}>{f}</TextField>);
    const saveChangesAction = () => {
        const fields: Field[] = Array.from<HTMLInputElement>(document.querySelectorAll('[name=itemField]'))
            .map(field =>
                ({name: field.id, value: field.value})
            );

        dispatch(setFields(fields));
    }

    return (
        <form className={classes.editPanel} noValidate autoComplete="off">
            {fieldElements}
            <Button color="primary"  onClick={saveChangesAction}>
                Сохранить
            </Button>
        </form>
    )
}