import {DataType} from '../../data/data-type';
import {FC} from 'react';
import {TextField} from '@material-ui/core';

type Props = {
    fields: string[]
}

export const EditPanel: FC<Props> = ({fields}) => {
    const fieldElements = fields.map(f => <TextField id={f} name={f} label={f.toUpperCase()}>{f}</TextField>)

    return (
        <form noValidate autoComplete="off">
            {fieldElements}
        </form>
    )
}