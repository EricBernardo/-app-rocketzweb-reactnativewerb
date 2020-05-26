import produce from 'immer'

const INITIAL_STATE = {
  form: {
    id: '',
    title: ''
  },
  data: [],  
  links: {},
  meta: {}
}

export default function reducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@category/SET': {        
        draft.form = action.payload.form
        break
      }
      case '@category/GET_LIST': {        
        draft.data = []
        break
      }
      case '@category/SET_LIST': {
        const { data, links, meta } = action.payload.data
        draft.data = data
        draft.links = links
        draft.meta = meta
        break
      }
      case '@category/FAILURE_LIST': {        
        draft.data = []
        break
      }
      default:
    }
  })
}
