import {  Container } from "react-bootstrap";
import OneRow from "./OneRow";
import TwoRow from "./TwoRow";
import ThreeRow from "./ThreeRow";
import { useEffect, useState } from "react";
import data from "../data";
function DateRemember(){
    const [personData, setPersonData] = useState(data);
    
    const onDeleteData = ()=>{
        setPersonData([]);
    }

    const onVieweData = ()=>{
        setPersonData(data);
    }
    useEffect(()=>{
        setPersonData([]);
    },[])
    return(
        <>
        <Container className="py-5">
            <OneRow data={personData}/>
            <TwoRow data={personData}/>
            <ThreeRow DeletData={onDeleteData} ViewData={onVieweData}/>
        </Container>
        </>
    )
}

export default DateRemember;
