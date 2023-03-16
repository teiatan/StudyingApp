export function Header({onClick}) {
    return (
        <div>
            <ul>
                <li id="courses" onClick={onClick}>Courses</li>
                <li id="lesson" onClick={onClick}>Lessons</li>
            </ul>
        </div>
    );
};