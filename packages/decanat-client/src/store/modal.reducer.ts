import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export enum ModalMode {
    DELETE,
    EDIT
}

interface ModalState {
    openModal: boolean
    modalMode: ModalMode
}

const initialState: ModalState = {
    openModal: false,
    modalMode: ModalMode.DELETE
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalOpen(state, action: PayloadAction<boolean>) {
            state.openModal = action.payload;
        },
        setModalMode(state, action: PayloadAction<ModalMode>) {
            state.modalMode = action.payload;
        }
    }
});

export const {setModalOpen, setModalMode} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;