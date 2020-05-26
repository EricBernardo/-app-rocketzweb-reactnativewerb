export function show(id) {  
  return {
    type: '@category/SHOW',
    payload: { id }
  }
}

export function set(form) {  
  return {
    type: '@category/SET',
    payload: { form }
  }
}

export function getList() {  
  return {
    type: '@category/GET_LIST'
  }
}

export function setList(data) {
  return {
    type: '@category/SET_LIST',
    payload: { data }
  }
}

export function failureList() {
  return {
    type: '@category/FAILURE_LIST',
  }
}