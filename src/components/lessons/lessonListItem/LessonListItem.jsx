export function LessonListItem ({duration, title, order, id, previewImageLink, status, onClick, link}) {
    return (
        <li data-order={order} id={id} data-status={status} onClick={() => onClick(order, link, id)}>
            <h3>{title}</h3>
            <p>Duration: {duration}seconds</p>
            {/* <img src={previewImageLink + '/' + order + '.webp'} alt="preview"></img> */}
        </li>
    )
};