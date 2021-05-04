import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export enum ModalType {
    ADD,
    EDIT,
    DELETE
}

interface ModalState {
    openModal: boolean,
    requestType: ModalType
}

const initialState: ModalState = {
    openModal: false,
    requestType: ModalType.ADD
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalOpen(state, action: PayloadAction<boolean>) {
            state.openModal = action.payload;
        },
        setModalType(state, action: PayloadAction<ModalType>) {
            state.requestType = action.payload;
        }
    }
});

export const {setModalOpen, setModalType} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;