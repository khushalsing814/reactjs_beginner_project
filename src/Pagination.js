import React from 'react'

function Pagination({ totalPosts, postPerpage, setCurrentPage }) {
    let pages = [];

    console.log(setCurrentPage)

    for (let i = 1; i <= Math.ceil(totalPosts / postPerpage); i++) {
        pages.push(i)
    }
    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-end">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1">Previous</a>
                    </li>
                    {
                        pages.map((page, index) => {
                            return <li class="page-item"><a class="page-link" href="/" onClick={() => setCurrentPage(page)} key={index}>{page}</a></li>
                        })
                    }

                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
