import produce from 'immer'

const INITIAL_STATE = {
  list: []
}

export default function reducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@company/REQUEST': {        
        draft.list = []
        break
      }
      case '@company/SUCCESS': {        
        draft.list = action.payload.companies
        break
      }
      case '@company/FAILURE': {        
        draft.list = []
        break
      }
      default:
    }
  })
}
