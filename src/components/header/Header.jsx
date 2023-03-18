import { Ul, Div, Container } from "./Header.styled";

export function Header({onClick}) {
    return (
        <Div>
            <Container className="container">
                <a href="public/index.html">🧠</a>
                <Ul>
                    <li id="courses" onClick={onClick}>Courses</li>
                    <li id="lessons" onClick={onClick}>Lessons</li>
                </Ul>
            </Container>
        </Div>
    );
};