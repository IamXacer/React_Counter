import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../features/counter/counter.reducer";
import { localStorageMiddleware } from "./localStorageMiddleware";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
