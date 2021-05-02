import React, {FC} from 'react';
import {TextField} from '@material-ui/core';
import classes from './ModalForm.module.css';

type Props = {
    fields: string[]
}

export const ModalForm: FC<Props> = ({fields}) => {
    const fieldElements =
        fields.map(f =>
            <TextField id={f} key={f} name="itemField" label={f.toUpperCase()} disabled={f === 'id'} required={true}>{f}</TextField>
        );

    return (
        <form className={classes.form} noValidate autoComplete="off">
            {fieldElements}
        </form>
    )
}