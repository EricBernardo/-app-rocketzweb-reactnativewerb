import { takeLatest, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from '../../../services/api'

import * as actionCategory from './actions'

import { startRequest, endRequest } from './../request/actions'

export function* getListSagas() {

  yield put(startRequest())

  try {

    const response = yield call(api.get, 'product_category')    
    
    yield put(actionCategory.setList(response.data))

    yield put(endRequest())

  } catch(err) {

    yield put(endRequest())

    toast.error('Ocorreu um erro, tente novamente mais tarde!')    

  }

}

export function* showSagas(draft) {
    
  yield put(startRequest())

  try {

    const response = yield call(api.get, 'product_category/' + draft.payload.id)    
    
    yield put(actionCategory.set(response.data.data))

    yield put(endRequest())

  } catch(err) {

    yield put(endRequest())

    toast.error('Ocorreu um erro, tente novamente mais tarde!')    

  }

}

export default all([
  takeLatest('@category/SHOW', showSagas),
  takeLatest('@category/GET_LIST', getListSagas)
])