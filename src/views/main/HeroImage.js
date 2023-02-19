import {Card} from "react-bootstrap";


const CardImage = ({
    title,
    text,
    imageSrc,
    width,
    Button
                   }) => {

    return (
        <Card className="bg-dark text-white m-auto" style={{width: "50%"}}>
            <Card.Img src={imageSrc} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    )

}

export default CardImage;