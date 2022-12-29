import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface LikedState {
  items: Product[];
}

const initialState: LikedState = {
  items: [],
};

export const likedSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {
    addToLiked: (state: LikedState, action: PayloadAction<Product>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromLiked: (
      state: LikedState,
      action: PayloadAction<{ id: string }>
    ) => {
      const index = state.items.findIndex(
        (item: Product) => item.id === action.payload.id
      );

      let newLiked = [...state.items];

      if (index >= 0) {
        newLiked.splice(index, 1);
      } else {
        console.log(
          `Cant remove product (id: ${action.payload.id}) as its not in Liked!`
        );
      }

      state.items = newLiked;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToLiked, removeFromLiked } = likedSlice.actions;

// Selectors -> retrieving items in state to use in different components
export const selectLikedItems = (state: RootState) => state.liked.items;
export const selectLikedItemsWithId = (state: RootState, id: string) => {
  state.liked.items.filter((item: Product) => item.id === id);
};
export const selectLikedTotal = (state: RootState) =>
  state.liked.items.reduce(
    (total: number, item: Product) => (total += item.price),
    0
  );
export default likedSlice.reducer;