import produce from 'immer'

const INITIAL_STATE = {
  categories: []
}

export default function reducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@category/REQUEST': {        
        draft.categories = []
        break
      }
      case '@category/SUCCESS': {        
        draft.categories = action.payload.categories
        break
      }
      case '@category/FAILURE': {        
        draft.categories = []
        break
      }
      default:
    }
  })
}
