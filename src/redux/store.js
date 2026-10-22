import { createStore } from "redux";
import {
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import phoneBookReducer from "./phoneBookReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["contacts"],
};

const persistedReducer = persistReducer(persistConfig, phoneBookReducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);
