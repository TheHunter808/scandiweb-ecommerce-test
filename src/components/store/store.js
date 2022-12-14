import { configureStore } from '@reduxjs/toolkit';
import cartSliceReducer from './cartSlice';
import currencySliceReducer from './currencySlice';
import productsSliceReducer from './productsSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'cartState',
	storage,
};

const persistedReducer = persistReducer(persistConfig, cartSliceReducer);

const store = configureStore({
	reducer: {
		currency: currencySliceReducer,
		products: productsSliceReducer,
		cart: cartSliceReducer,
		// cart: persistedReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default store;

// export const persistedStore = persistStore(store);
