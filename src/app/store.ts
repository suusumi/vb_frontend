import {configureStore} from '@reduxjs/toolkit';
import {commentsApi} from "../entities/comments/model/commentsApi.ts";

export const store = configureStore({
    reducer: {
        [commentsApi.reducerPath]: commentsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(commentsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;