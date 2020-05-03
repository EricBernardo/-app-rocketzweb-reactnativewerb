export function getCategories() {  
  return {
    type: '@category/GET'
  }
}

export function categoriesSuccess(categories) {
  return {
    type: '@category/SUCCESS',
    payload: { categories }
  }
}

export function categoriesFailure() {
  return {
    type: '@category/FAILURE',
  }
}