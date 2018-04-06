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
              title="Accounts"
              subtitle="This month"
              number="9.8k"
              color="success"
              progress={{
                value: 97,
                label: "Last month"
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Today's Performance"
              subtitle="This month"
              number="5,400"
              color="danger"
              progress={{
                value: 45,
                label: "Last month"
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="New Users"
              subtitle="This month"
              number="3,400"
              color="primary"
              progress={{
                value: 90,
                label: "Last month"
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Bounce Rate"
              subtitle="This month"
              number="38%"
              color="secondary"
              progress={{
                value: 60,
                label: "Last month"
              }}
            />
          </Col>
        </Row>

        <Row>
          <Col lg="8" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>
                Total Revenue{" "}
                <small className="text-muted text-capitalize">This year</small>
              </CardHeader>
              <CardBody>
                <Line data={chartjs.line.data} options={chartjs.line.options} />
              </CardBody>
            </Card>
          </Col>

          <Col lg="4" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>Total Expense</CardHeader>
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
