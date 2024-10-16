import { configureStore } from "@reduxjs/toolkit";
import { wishlistSlice } from "./slices/wishlist-slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { cartReducer } from "./slices/cart-slice";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);
export const store = configureStore({
  reducer: {
    cart: persistedReducer,
    wishlist: wishlistSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);