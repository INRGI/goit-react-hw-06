import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = { inputValue: '' };

const filtersSlice = createSlice({
    name: 'filter',
    initialState: filtersInitialState,
    reducers: {
        setContactsFilter: {
            reducer: (state, action) => {
                state.inputValue = action.payload;
            },

            prepare: inputValue => {
                return { payload: inputValue };
            }
        }
    }
});

export const { setContactsFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;