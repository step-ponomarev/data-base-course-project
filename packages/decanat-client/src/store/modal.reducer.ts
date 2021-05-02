import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export enum RequestType {
    DELETE,
    EDIT,
    ADD
}

interface ModalState {
    openModal: boolean
    requestType: RequestType
}

const initialState: ModalState = {
    openModal: false,
    requestType: RequestType.DELETE
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalOpen(state, action: PayloadAction<boolean>) {
            state.openModal = action.payload;
        },
        setRequestType(state, action: PayloadAction<RequestType>) {
            state.requestType = action.payload;
        }
    }
});

export const {setModalOpen, setRequestType} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;