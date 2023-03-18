import { Div, P, Button } from "./LessonsPlug.styled";

export function LessonsPlug({onClick}) {
    return (
        <Div>
            <P>Please, choose course for learning</P>
            <Button id="courses" onClick={onClick}>go to avaliable courses list</Button>
        </Div>
    );
}