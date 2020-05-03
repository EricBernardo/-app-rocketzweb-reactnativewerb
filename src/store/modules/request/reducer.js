import produce from 'immer'

const INITIAL_STATE = {
  loading: false
}

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@request/START': {        
        draft.loading = true
        break
      }
      case '@request/END': {        
        draft.loading = false
        break
      }
      default:
    }
  })
}
