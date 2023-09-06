import { Button, Col, Row } from "react-bootstrap";
function ThreeRow({DeletData,ViewData}){
    return(
        <>
        <Row className="justify-content-center my-2">
        <Col sm="8" className="d-flex justify-content-between">
          <Button onClick={DeletData} className="btn-style p-2">مسح الكل</Button>
          <Button onClick={ViewData} className="btn-style p-2">عرض المواعيد</Button>
        </Col>
      </Row>
        </>
    )
}

export default ThreeRow;