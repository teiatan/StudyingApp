import { Ul, Div, Container } from "./Header.styled";

export function Header({onClick}) {
    return (
        <Div>
            <Container className="container">
                <a href="">🧠</a>
                <Ul>
                    <li id="courses" onClick={onClick}>Courses</li>
                    <li id="lesson" onClick={onClick}>Lessons</li>
                </Ul>
            </Container>
        </Div>
    );
};