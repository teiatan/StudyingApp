import { Img, Div, Li, Plocked } from "./LessonListItem.styled"

export function LessonListItem ({duration, title, order, id, previewImageLink, status, onClick, link}) {
    return (
        <Li data-order={order} id={id} data-status={status} onClick={() => onClick(order, link, id, title, status)}>
            <Img src={`${previewImageLink}/lesson-${order}.webp`} alt="preview"></Img>
            <Div>
                <h3>Lesson {order} : {title}</h3>
                {status==='locked' ? 
                <Plocked>Lesson is locked</Plocked> :
                <p>Duration: {duration}seconds</p>}
                
            </Div> 
        </Li>
    )
};