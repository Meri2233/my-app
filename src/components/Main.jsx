import List from "./List";

export default function Main() {

    return (
        <div className="main-container">
            <nav>Pokemon:Catch em' all</nav>
            <List />
            <div class="pagination">
                <a href="#">&laquo;</a>
                <a href="#">1</a>
                <a class="active" href="#">2</a>
                <a href="#">3</a>
                <a href="#">&raquo;</a>
            </div>
        </div>
    )
}