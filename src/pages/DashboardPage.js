import React from "react";

import { getColor } from "utils/colors";

import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Badge,
  Button
} from "reactstrap";

import {
  MdInsertChart,
  MdBubbleChart,
  MdPieChart,
  MdShowChart
} from "react-icons/lib/md";

import { Line, Bar } from "react-chartjs-2";

import {
  supportTicketsData,
  productsData,
  userProgressTableData,
  todosData,
  chartjs
} from "demos/dashboardPage";
import { getStackLineChart, stackLineChartOptions } from "demos/chartjs";

import Page from "components/Page";

import { AnnouncementCard, TodosCard } from "components/Card";

import { NumberWidget } from "components/Widget";

const today = new Date();
const lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7
);

class DashboardPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    const primaryColor = getColor("primary");
    const secondaryColor = getColor("secondary");

    return (
      <Page className="DashboardPage" title="All Accounts">
        <Row>
          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="ADBE:Adobe Systems Inc"
              subtitle="Today"
              number="95.83"
              color="success"
              progress={{
                value: 87,
                label: "Yesterday"
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="AMZN:Amazon Inc"
              subtitle="Today"
              number="102.39"
              color="danger"
              progress={{
                value: 98,
                label: "Yesterday"
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="CTSH: Cognizant Technology Solution Corp"
              subtitle="Today"
              number="88.29"
              color="primary"
              progress={{
                value: 98.39,
                label: "Yesterday"
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="EA:Electronic Arts"
              subtitle="Today"
              number="73.20"
              color="secondary"
              progress={{
                value: 90.88,
                label: "Yesterday"
              }}
            />
          </Col>
        </Row>

        <Row>
          <Col lg="8" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>Account Performance </CardHeader>
              <CardBody>
                <Line data={chartjs.line.data} options={chartjs.line.options} />
              </CardBody>
            </Card>
          </Col>

          <Col lg="4" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>Investments </CardHeader>
              <CardBody>
                <Bar data={chartjs.bar.data} options={chartjs.bar.options} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}
export default DashboardPage;
