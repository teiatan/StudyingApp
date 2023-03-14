export function Header({onClick}) {
    return (
        <div>
            <ul>
                <li onClick={onClick}>Courses</li>
                <li onClick={onClick}>Lesson</li>
            </ul>
        </div>
    );
};