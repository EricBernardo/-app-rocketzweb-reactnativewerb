import produce from 'immer'

const INITIAL_STATE = {
  data: [],
  link: {},
  meta: {}
}

export default function reducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@company/GET_LIST_ALL': {        
        draft.list = []
        break
      }
      case '@company/SET_LIST': {        
        const { data, links, meta } = action.payload.data
        draft.data = data
        draft.links = links
        draft.meta = meta
        break
      }
      case '@company/FAILURE_LIST': {        
        draft.list = []
        break
      }
      default:
    }
  })
}
