export function Pagination ({totalPages, onClick}) {
    let counter = 0;
    let paginationArray = [];
    while(counter < totalPages) {
        counter +=1;
        paginationArray.push(counter);
    };
    console.log(paginationArray);
    
    return (
        <>
            <button type="button" onClick={onClick}>Prev</button>
            {paginationArray.map(pag => {
                console.log(pag);
                return (
                    <button key={pag} type="button" onClick={onClick}>{pag}</button>
                );
            })}
            <button type="button" onClick={onClick}>Next</button>
        </>
    );
};