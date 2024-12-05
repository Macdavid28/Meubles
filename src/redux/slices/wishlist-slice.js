// import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//   wishlist: [],
//   totalQuantity: 0,
//   itemExists: false,
//   showWishlistPreview: false,
// };
// export const wishlistSlice = createSlice({
//   name: "wishlist",
//   initialState,
//   reducers: {
//     toggleWishlist(state, action) {
//       const newItem = action.payload;
//       const existingItem = state.wishlist.find(
//         (item) => item.id === newItem.id
//       );
//       if (existingItem) {
//         state.wishlist = state.wishlist.filter(
//           (item) => item.id !== newItem.id
//         );
//         state.totalQuantity--;
//         state.itemExists = false;
//       } else {
//         state.wishlist.push(newItem);
//         state.totalQuantity++;
//         state.itemExists = true;
//       }
//     },
//     showWishlist(state, action) {
//       state.showWishlistPreview = true;
//     },
//     hideWishlist(state, action) {
//       state.showWishlistPreview = false;
//     },
//   },
// });
// export const wishlistActions = wishlistSlice.actions;
// export const wishlistReducer = wishlistSlice.reducer;
