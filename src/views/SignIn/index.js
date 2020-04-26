import React from "react";

import { useDispatch, useSelector } from 'react-redux'

import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import { signInRequest } from 'store/modules/auth/actions'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { InputLabel } from "@material-ui/core";

const schema = Yup.object().shape({
  email: Yup.string().email('Insira um e-mail válido').required('O e-mail obrigatório'),
  password: Yup.string().required('A senha é obrigatório')
})

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();

  const dispatch = useDispatch()
  const loading = useSelector(state => state.auth.loading)

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password))
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>            
            <Form schema={schema} onSubmit={handleSubmit}>  
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Rocketz Web</h4>
                <p className={classes.cardCategoryWhite}>Login</p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <InputLabel>E-mail</InputLabel>
                    <Input name="email" className="form-control" type="email" placeholder="E-mail" />
                  </GridItem>              
                  <GridItem xs={12} sm={12} md={12}>
                    <InputLabel>Senha</InputLabel>
                    <Input name="password" type="password" placeholder="Senha" />
                  </GridItem>            
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button type="submit" color="success" disabled={loading}>{loading ? 'Carregando...' : 'Login'}</Button>
              </CardFooter>
            </Form>
          </Card>
        </GridItem>        
      </GridContainer>
    </div>
  );
}
