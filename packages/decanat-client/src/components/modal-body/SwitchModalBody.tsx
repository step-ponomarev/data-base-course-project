import {FC} from 'react';
import {ModalMode} from '../../store/modal.reducer';
import {EditPanel} from '../edit/EditPanel';

type Props = {
    modalMode: ModalMode,
    fields: string[]
}

export const SwitchModalBody: FC<Props> = ({modalMode, fields}) => {
    const switchRender = (modalMode: ModalMode) => {
        switch (modalMode) {
            case ModalMode.DELETE:
                return <div>kek</div>
            case ModalMode.EDIT:
                return <EditPanel fields={fields}/>
        }
    }

    return (
        <div>
            {switchRender(modalMode)}
        </div>
    )
}