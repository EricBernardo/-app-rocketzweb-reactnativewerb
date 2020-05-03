import { takeLatest, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from '../../../services/api'

import { companiesSuccess } from './actions'

import { startRequest, endRequest } from './../request/actions'

export function* allCompanySagas() {

  yield put(startRequest())

  try {

    const response = yield call(api.get, 'company/all')

    yield put(companiesSuccess(response.data.data))

    yield put(endRequest())

  } catch(err) {

    yield put(endRequest())

    toast.error('Ocorreu um erro, tente novamente mais tarde!')    

  }

}

export default all([
  takeLatest('@company/ALL', allCompanySagas)
])