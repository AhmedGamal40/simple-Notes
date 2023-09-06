import { Col, Row } from "react-bootstrap";

function TwoRow({data}){
    return(
        <>
        <Row className="justify-content-center">
        <Col sm="8" className="">
          <div className="rectangle p-3">
              {data.length ?  (data.map((item)=>{
                return(

                <div key={item.id} className="d-flex border-bottom mx-4 my-3">
                  <img src="young-bearded-man-with-striped-shirt.jpg" alt="ahmed" className="img-avatar"/>
                  <div className="px-3">
                    <p className="d-inline fs-5">{item.name}</p>
                    <p className="fs-6">{item.date}</p>
                  </div>
                </div>
                )
              })) : <h1 className="text-center p-5">لا يوجد مواعيد اليوم</h1>}
          </div>
        </Col>
      </Row>
        </>
    )
}

export default TwoRow;