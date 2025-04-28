import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from '../Features/auth.jsx'
import productReducer from '../Features/Product.jsx'
import localStorage from "redux-persist/es/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import { injectStore } from "../../Service/axios.js";
import { cartReducer } from "../Features/Cart.jsx";

const rootReducers = combineReducers({
  auth: authReducer,
  prod: productReducer,
  CART:cartReducer
})
const persistConfig = ({
  key: 'root',
  storage: localStorage,
  whitelist: ['auth', 'prod','CART']

})
const persistedReducers = persistReducer(persistConfig, rootReducers)
const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist actions
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      
    })
});
injectStore(store)
export default store
export const persistor = persistStore(store);