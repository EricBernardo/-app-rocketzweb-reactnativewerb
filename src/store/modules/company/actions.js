export function getListAll() {  
  return {
    type: '@company/GET_LIST_ALL'
  }
}

export function setList(data) {
  return {
    type: '@company/SET_LIST',
    payload: { data }
  }
}

export function failureList() {
  return {
    type: '@company/FAILURE_LIST',
  }
}