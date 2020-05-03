export function getCompaniesAll() {  
  return {
    type: '@company/ALL'
  }
}

export function companiesSuccess(companies) {
  return {
    type: '@company/SUCCESS',
    payload: { companies }
  }
}

export function companiesFailure() {
  return {
    type: '@company/FAILURE',
  }
}