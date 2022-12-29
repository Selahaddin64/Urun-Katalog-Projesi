import { configureStore } from "@reduxjs/toolkit";
import likedReducer from "./likedSlice";

export const store = configureStore({
  reducer: {
    liked: likedReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;