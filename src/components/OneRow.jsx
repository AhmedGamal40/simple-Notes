import { Col, Row } from "react-bootstrap";

function OneRow({data}){
    return(
        <>
        <Row className="justify-content-center my-3">
        <Col sm="8" className="">
          لديك {data.length} مواعيد اليوم :
        </Col>
      </Row>
        </>
    )
}

export default OneRow;