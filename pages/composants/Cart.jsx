import styled from "@emotion/styled";
import Image from "next/image";


export default function Cart({bgCart, title, description}) {


    return(
        <Container style={{display : 'flex', width : '400px', backgroundColor : 'white', height : '212px', margin : '1em'}}>
            <Image src={bgCart} width={150} alt="bgCart" />
            <div style={{display : 'flex', flexDirection : 'column', width : '100%'}}>
                <p style={{textAlign : 'center', color : 'black', fontWeight : '500'}}>{title}</p>
                <p style={{color : 'black', fontSize : '0.8em', padding : '0 0.8em 1em 0.8em', textAlign : 'justify'}}>{description}</p>
            </div>
                
        </Container>

    )
}


const Container = styled.div`
    :hover{
        transform : scale(1.05);
        transition: 0.4s;
        cursor : pointer;
    }
`