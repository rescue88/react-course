import st from "./Paginator.module.css";

//clear functional component
const Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {
    //get amount of pages
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={ st.pagesCont }>
            {
                //draw pages
                pages.map( item => {
                    return <span className={ currentPage === item && st.selectedPage } onClick={ (e) => { onPageChanged(item) } } >{ item }</span>
                })
            }
        </div>
    );
}

export default Paginator;