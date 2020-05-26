import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'

// core components
import GridItem from "components/Grid/GridItem.js"
import GridContainer from "components/Grid/GridContainer.js"
import Card from "components/Card/Card.js"
import CardHeader from "components/Card/CardHeader.js"
import CardBody from "components/Card/CardBody.js"
import CardFooter from "components/Card/CardFooter.js"

import { ValidatorForm, SelectValidator} from 'react-material-ui-form-validator'
import { MenuItem } from "@material-ui/core"

import history from "services/history"

import * as actionAuth from "store/modules/auth/actions"
import * as actionCompany from "store/modules/company/actions"

export default function ChooseCompany() {

  const companies = useSelector(state => state.company.data)
 
  const dispatch = useDispatch()

  const [company, setCompany] = useState('')

  const handleChange = (event) => {
    
    setCompany(event.target.value)

    dispatch(actionAuth.setCompany(company))

    history.push('/category')

  }  

  useEffect(() => {

    dispatch(actionCompany.getListAll())

  }, [dispatch])

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <ValidatorForm onSubmit={() => {}}>
              <CardHeader color="primary">
                  <h4>Selecione uma empresa</h4>                    
              </CardHeader>                                
              <CardBody>                
                <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <SelectValidator
                      select
                      label="Selecione"
                      onChange={handleChange}
                      className="MuiFormControl-fullWidth"
                      name="company"
                      value={company}
                      validators={['required']}
                      errorMessages={['Esse campo é obrigatório']}
                    >                      
                      {companies.map(value => (
                          <MenuItem key={value.id} value={value.id}>
                              {value.title}
                          </MenuItem>
                      ))}                      
                    </SelectValidator>                                       
                  </GridItem>
                </GridContainer>                  
              </CardBody>
              <CardFooter />
            </ValidatorForm>
          </Card>
        </GridItem>        
      </GridContainer>
    </div>
  )
}
