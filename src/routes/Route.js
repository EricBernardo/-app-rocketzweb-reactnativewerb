import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import PropTypes from 'prop-types'

import AuthLayout from '../layouts/Auth'
import DefaultLayout from '../layouts/Default'

import { store } from '../store'
import { signOut } from 'store/modules/auth/actions'
import { useDispatch } from 'react-redux'

export default function RouteWrapper({
  component: Component,
  isPrivate,
  isChooseCompany,
  path,
  ...rest
}) {
  
  const dispatch = useDispatch()
  
  const { signed } = store.getState().auth
  
  if(!signed && isPrivate) {
    toast.error("Não autorizado")
    return <Redirect to="/" />
  } else if(signed && path === '/') {
    dispatch(signOut())
  }

  const Layout = signed ? (isChooseCompany ? AuthLayout : DefaultLayout) : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component { ...props } />
        </Layout>
      )}
    />
  )

}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

RouteWrapper.defaultProps = {
  isPrivate: false,
  isChooseCompany: false
}
