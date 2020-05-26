import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export default reducers => {

  const persistedReducer = persistReducer({
    key: 'roweweb',
    storage,
    whitelist: ['auth', 'user']
  }, reducers)

  return persistedReducer
}
