import { takeLatest, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from '../../../services/api'

import { categoriesSuccess } from './actions'

import { startRequest, endRequest } from './../request/actions'

export function* categorySagas() {

  yield put(startRequest())

  try {

    const response = yield call(api.get, 'product_category')
    console.log('response', response)
    const data = response.data.data.map(item => {
      return [item.title]
    })
    console.log('data', data)
    yield put(categoriesSuccess(data))

    yield put(endRequest())

  } catch(err) {

    yield put(endRequest())

    toast.error('Ocorreu um erro, tente novamente mais tarde!')    

  }

}

export default all([
  takeLatest('@category/GET', categorySagas)
])