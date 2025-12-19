import { createSlice } from "@reduxjs/toolkit";

const list1: string[] = [
    "United States",
    "Canada",
    "United Kingdom",
    "Germany",
    "France",
    "India",
    "Japan",
    "Australia",
    "Brazil",
    "South Africa",
];

const list2: string[] = [
    "India",
    "Japan",
    "Australia",
    "Brazil",
    "Norway",
    "Sweden",
    "Cambodia",
];

interface ListState {
    list1: string[];
    list2: string[];
    results: string[];
}

const initialState: ListState = {
    list1,
    list2,
    results: [],
};

const listSlice = createSlice({
    name: "listCompare",
    initialState,
    reducers: {
        showList1Only(state) {
            state.results = state.list1;
        },
        showList2Only(state) {
            state.results = state.list2;
        },
        showBoth(state) {
            state.results = state.list1.filter((item) =>
                state.list2.includes(item)
            );
        },
    },
});

export const { showList1Only, showList2Only, showBoth } = listSlice.actions;

export default listSlice.reducer;