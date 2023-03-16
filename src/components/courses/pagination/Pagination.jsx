export function Pagination ({totalPages, onClick}) {
    let counter = 0;
    let paginationArray = [];
    while(counter < 10) {
        counter +=1;
        paginationArray.push(counter);
    };
    console.log(paginationArray);
    
    return (
        paginationArray.map(pag => {
            console.log(pag);
            return (
                <button key={pag} type="button" onClick={onClick}>{pag}</button>
            );
        })
    );
};