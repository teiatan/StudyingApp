
import { Button, Div } from "./Pagination.styled";

export function Pagination ({totalPages, onPageClick, onNextClick, onPrevClick, currentPage}) {
    let pag = 0;
    let paginationArray = [];
    while(pag < totalPages) {
        pag +=1;
        paginationArray.push(pag);
    }; 

    return (
        <Div>
            <Button type="button" onClick={onPrevClick}>Prev</Button>
            {paginationArray.map(pag => {
                return (
                    <div key={pag}>
                        {currentPage===pag ?  
                        <Button key={pag} type="button" disabled>{pag}</Button> :
                        <Button key={pag} type="button" onClick={onPageClick}>{pag}</Button>}

                    </div>
                );
            })}
            <Button type="button" onClick={onNextClick}>Next</Button>
        </Div>
    );
};