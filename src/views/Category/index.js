import React, { useState, useEffect } from "react";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import api from "services/api";

export default function Category() {

  const [categories, setCategories] = useState([])

  async function loadData(page = 1) {

    const response = await api.get('/product_category', {
      params: { page }
    })

    const data = response.data.data.map(item => {
      return [item.title, <Button color="warning" onClick={()=> {alert(item.id)}}>Editar</Button>, <Button color="danger">Excluir</Button>]
    })

    setCategories(data)

  }

  useEffect(() => {

    loadData()

  }, [])

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
