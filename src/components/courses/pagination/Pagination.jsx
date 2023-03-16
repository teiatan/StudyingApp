export function Pagination ({totalPages, onPageClick, onNextClick, onPrevClick}) {
    let pag = 0;
    let paginationArray = [];
    while(pag < totalPages) {
        pag +=1;
        paginationArray.push(pag);
    }; 
    return (
        <>
            <button type="button" onClick={onPrevClick}>Prev</button>
            {paginationArray.map(pag => {
                return (
                    <button key={pag} type="button" onClick={onPageClick}>{pag}</button>
                );
            })}
            <button type="button" onClick={onNextClick}>Next</button>
        </>
    );
};