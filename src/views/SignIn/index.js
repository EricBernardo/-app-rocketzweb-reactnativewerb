import React, { useState } from "react";

import { useDispatch } from 'react-redux'

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

import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

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

export default function Signin() {

  const classes = useStyles();
  const dispatch = useDispatch()  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeEmail = (event) => {
    const email = event.target.value;
    setEmail(email)
  }

  const handleChangePassword = (event) => {
    const email = event.target.value;
    setPassword(email)
  }

  const handleSubmit = () => {
    dispatch(signInRequest(email, password))
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <ValidatorForm
                onSubmit={handleSubmit}
                onError={errors => console.log(errors)}
                ref={null}
            >
              <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Rocketz Web</h4>
                  <p className={classes.cardCategoryWhite}>Login</p>
              </CardHeader>                                
              <CardBody>                
                <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <TextValidator
                        label="E-mail"
                        onChange={handleChangeEmail}
                        className="MuiFormControl-fullWidth"
                        name="email"
                        value={email}
                        validators={['required', 'isEmail']}
                        errorMessages={['Esse campo é obrigatório', 'E-mail inválido']}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <TextValidator
                        label="Senha"
                        onChange={handleChangePassword}
                        className="MuiFormControl-fullWidth"
                        type="password"
                        name="password"
                        value={password}
                        validators={['required']}
                        errorMessages={['Esse campo é obrigatório']}
                    />
                  </GridItem>
                </GridContainer>                  
              </CardBody>
              <CardFooter>
                <Button type="submit" color="success">Login</Button>
              </CardFooter>            
            </ValidatorForm>
          </Card>
        </GridItem>        
      </GridContainer>
    </div>
  );
}
