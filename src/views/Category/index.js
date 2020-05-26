import React, { useEffect, useState } from "react";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import { useSelector, useDispatch } from "react-redux";

import * as actionCategory from "store/modules/category/actions"
import history from "services/history";
import { Link } from "react-router-dom";

export default function Category() {

  const [categories, setCategories] = useState([])

  useSelector(state => state.category.data, function(response) {

    const data = response.map(item => {      
      return [
        item.title, 
        // <Button color="warning" onClick={()=> {
        //   history.to('category/edit/' + item.id)
        // }}>Editar</Button>
        <Link to="category-edit" params={{ id: item.id }}>Editar</Link>, 
        <Button color="danger">Excluir</Button>
      ]
    })

    setCategories(data)

  })
  
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(actionCategory.getList())

  }, [dispatch])

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4>Listagem</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Título", "Editar", "Excluir"]}
              tableData={categories}
            />
          </CardBody>
        </Card>
      </GridItem>      
    </GridContainer>
  );
}
