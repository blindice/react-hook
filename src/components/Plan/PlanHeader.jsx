import React, { useState } from 'react'
import axios from 'axios'
import https from 'https'
import { Button, Form, Input, Typography, Row, Col, Sear } from 'antd'
const { Text, Title } = Typography
const { Search } = Input
const baseUrl = 'https://172.16.53.174:883/api/v1.0/'

const PlanHeader = () => {
  const [operatorName, setOperatorname] = useState('')
  const [supplier, setSupplier] = useState('')

  const httpsAgent = new https.Agent({
    rejectUnauthorized: false, // (NOTE: this will disable client verification)
  })

  const HandleSearch = (value) => {
    axios
      .get(`${baseUrl}Plan/operatordetails/${value}`, { httpsAgent })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
  }
  return (
    <div style={{ margin: '50px' }}>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        align="middle"
      >
        <Col flex="170px">
          <Title keyboard level={4}>
            Operator ID
          </Title>
        </Col>
        <Col xs={24} sm={24} md={5} lg={5} xl={5}>
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="medium"
            onSearch={(value) => HandleSearch(value)}
          />
        </Col>
      </Row>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        align="middle"
      >
        <Col flex="170px">
          <Title keyboard level={4}>
            Name
          </Title>
        </Col>
        <Col span={5}>
          <Input size="medium" readOnly bordered={false}></Input>
        </Col>
        <Col>
          <Title keyboard level={4}>
            Supplier
          </Title>
        </Col>
        <Col span={5}>
          <Input size="medium" readOnly bordered={false}></Input>
        </Col>
      </Row>
    </div>
  )
}

export default PlanHeader
