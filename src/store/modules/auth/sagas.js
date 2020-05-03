import { takeLatest, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import history from '../../../services/history'
import api from '../../../services/api'

import { signInSuccess, signFailure } from './actions'

import { startRequest, endRequest } from '../request/actions'

export function* signIn({ payload }) {

  yield put(startRequest())

  try {

    const { email, password } = payload

    const response = yield call(api.post, '/auth', {
      username: email,
      password: password
    })

    yield put(endRequest())

    const { access_token } = response.data

    if(!access_token) {
      toast.error('Usuário inválido')
      return
    }

    api.defaults.headers.Authorization = `Bearer ${access_token}`

    yield put(startRequest())

    const profile = yield call(api.get, '/profile')

    yield put(signInSuccess(access_token, profile.data.data))

    yield put(endRequest())

    history.push('/choose-company')

  } catch (err) {
    yield put(endRequest())
    toast.error('Falha na autenticação, verifique seus dados')
    yield put(signFailure())
  }

}

export function setToken({ payload }) {
  
  if(!payload) return

  const { access_token } = payload.auth

  if(access_token) {

    api.defaults.headers.Authorization = `Bearer ${access_token}`

  }

}

export function signOut() {
  history.push('/')
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut)
])
