export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data }
  }
}

export function updateProfileSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile }
  }
}

export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE'
  }
}

export function chooseCompany(company) {  
  return {
    type: '@user/CHOOSE_COMPANY',
    payload: { company }
  }
}