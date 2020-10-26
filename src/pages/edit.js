import React, { useState, useEffect } from "react"
import { ButtonGroup, Button } from "@material-ui/core"
import Layout from "../components/layout"
import CustomCard from "../components/CustomCard"

import Amplify from "aws-amplify"
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react"
import awsconfig from "../aws-exports"
Amplify.configure(awsconfig)

const Edit = () => {
  const [names, setNames] = useState()
  const [selectedYear, setSelectedYear] = useState(2020)
  useEffect(() => {
    const getNames = async () => {
      const response = await fetch(`http://localhost:3004/year${selectedYear}`)
      const data = await response.json()
      setNames([])
      setNames(data)
    }
    getNames()
  }, [selectedYear])
  return (
    <Layout>
      <AmplifyAuthenticator>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <h1>Names</h1>
          <AmplifySignOut />
        </div>
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button onClick={() => setSelectedYear(2020)}>2020</Button>
          <Button onClick={() => setSelectedYear(2019)}>2019</Button>
          <Button onClick={() => setSelectedYear(2018)}>2018</Button>
          <Button onClick={() => setSelectedYear(2017)}>2017</Button>
          <Button onClick={() => setSelectedYear(2016)}>2016</Button>
        </ButtonGroup>
        <br />
        {names &&
          names.map(rose => {
            return (
              <>
                <CustomCard rose={rose} />
              </>
            )
          })}
      </AmplifyAuthenticator>
    </Layout>
  )
}

export default Edit
