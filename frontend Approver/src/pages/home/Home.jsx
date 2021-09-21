import "./home.css";
import { Row, Col } from "reactstrap";
import UploadCard from "../../components/uploadCard/UploadCard";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/upload/upload-list/")
      .then((response) => setUploads(response.data.upload));
  }, []);
  return (
    <div style={{ marginTop: "30px", padding: "0 30px" }}>
      {uploads.map((uploadItem) => (
        <Row className="mb-4">
          <Col className="mb-4">
            <UploadCard data={uploadItem} />
          </Col>
        </Row>
      ))}
    </div>
  );
}
