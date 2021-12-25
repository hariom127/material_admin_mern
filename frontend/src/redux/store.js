import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// thunk allow us to perform async action
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';

/**
 *  "redux-devtools-extension" provide browser redux dev tool
 * it is use for developmet only
 * */

const persistConfig = {
  key: 'authState',
  storage,
  whitelist: ['authState'] // which reducer want to store
};
const pReducer = persistReducer(persistConfig, reducers);

/**
 *  "redux-devtools-extension" provide browser redux dev tool
 * it is use for developmet only
 * */

const store = createStore(pReducer, {}, composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);

// export default store;
export { persistor, store };
