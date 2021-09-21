import "./history.css";
import { Card, CardBody, CardTitle, Table, Badge } from "reactstrap";

export default function History() {
  const projects = Array.from({ length: 10 }, (_, i) => i + 1).map((i) => (
    <tr>
      <td>
        <Badge color="danger badge-red">Declined</Badge>
      </td>
      <th>Project Title</th>
    </tr>
  ));

  return (
    <Card style={{ margin: "30px" }}>
      <CardBody className="pb-0">
        <CardTitle tag="h5" className="d-flex justify-content-between">
          History
        </CardTitle>
      </CardBody>
      <CardBody className="pt-0">
        <Table>
          <thead>
            <tr>
              <th style={{ width: "15%" }} />
              <th />
            </tr>
          </thead>
          <tbody>{projects}</tbody>
        </Table>
      </CardBody>
    </Card>
  );
}
