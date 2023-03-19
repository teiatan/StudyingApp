import { Img, Div, Li, Plocked } from "./LessonListItem.styled"

export function LessonListItem ({duration, title, order, id, previewImageLink, status, onClick, link}) {
    const imgLink=`${previewImageLink}/lesson-${order}.webp`;
    
    return (
        <Li data-order={order} id={id} data-status={status} onClick={() => onClick(order, link, id, title, status, imgLink)}>
            <Img src={imgLink} alt="preview"></Img>
            <Div>
                <h3>Lesson {order} : {title}</h3>
                {status==='locked' ? 
                <Plocked>Lesson is locked</Plocked> :
                <p>Duration: {duration}seconds</p>}
                
            </Div> 
        </Li>
    )
};