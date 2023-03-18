import { RotatingLines } from  'react-loader-spinner';
import { Div } from './Loader.styled';

export function Loader() {
    return (
        <Div>
            <RotatingLines
            strokeColor="rgb(20, 150, 144)"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
            />
        </Div>
    );
};