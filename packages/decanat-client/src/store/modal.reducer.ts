import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ModalState {
    openModal: boolean
}

const initialState: ModalState = {
    openModal: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalOpen(state, action: PayloadAction<boolean>) {
            state.openModal = action.payload;
        },
    }
});

export const {setModalOpen} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;