import {Card} from "react-bootstrap";


const CardImage = ({
    title,
    text,
    imageSrc,
    classNameProps,
    Button
                   }) => {

    const cardClassName = classNameProps ? classNameProps : ''

    return (
        <Card className={cardClassName + " bg-dark text-white m-auto"} border="light">
            <Card.Img src={imageSrc} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title variant="top">{title}</Card.Title>
                <Card.Text variant="top">
                    {text}
                </Card.Text>
                {Button ? Button : ''}
            </Card.ImgOverlay>
        </Card>
    )

}

export default CardImage;