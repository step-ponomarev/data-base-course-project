import {FC} from 'react';
import {RequestType} from '../../store/modal.reducer';
import {ActionForm} from './form-wrapper/ActionForm';

type Props = {
    modalMode: RequestType,
    fields: string[]
}

export const SwitchModalBody: FC<Props> = ({modalMode, fields}) => {
    const switchRender = (modalMode: RequestType) => {
        switch (modalMode) {
            case RequestType.DELETE:
                return <div>kek</div>
            case RequestType.EDIT:
            case RequestType.ADD:
                return <ActionForm fields={fields}/>
        }
    }

    return (
        <div>
            {switchRender(modalMode)}
        </div>
    )
}