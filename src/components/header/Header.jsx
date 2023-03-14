export function Header({onClick}) {
    return (
        <div>
            <ul>
                <li id="courses" onClick={onClick}>Courses</li>
                <li id="lesson" onClick={onClick}>Lesson</li>
            </ul>
        </div>
    );
};