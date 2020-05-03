export function startRequest() {  
  return {
    type: '@request/START'
  }
}

export function endRequest() {
  return {
    type: '@request/END'
  }
}