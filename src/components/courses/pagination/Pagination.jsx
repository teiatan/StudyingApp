export function Pagination ({pages, onClick}) {
    let counter = 0;
    while(counter < pages) {
        return (
            <button type="button">{counter +=1}</button>
        );
    };
};