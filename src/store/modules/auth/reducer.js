import produce from 'immer'

const INITIAL_STATE = {
  access_token: null,
  signed: false,
  company: null
}

export default function reducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {    
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.access_token = action.payload.access_token
        draft.signed = true
        break
      }
      case '@auth/SIGN_OUT': {
        draft.access_token = null
        draft.signed = false
        break
      }
      case '@auth/SET_COMPANY': {        
        draft.company = action.payload.company
        break
      }
      default:
    }
  })
}
