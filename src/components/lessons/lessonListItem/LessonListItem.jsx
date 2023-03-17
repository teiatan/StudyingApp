export function LessonListItem ({duration, title, order, id, previewImageLink, status}) {
    return (
        <li data-order={order} id={id} data-status={status}>
            <h3>{title}</h3>
            <p>Duration: {duration}seconds</p>
            {/* <img src={previewImageLink + '/' + order + '.webp'} alt="preview"></img> */}
        </li>
    )
};