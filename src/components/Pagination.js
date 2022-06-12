import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const Pagination = ({ page, setPage, info }) => {
    const previousPage = () => {
        if (page === 0) {
            toast("You are Already on First Page", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            setPage(page - 1);
            window.scroll(0, 0);
        }
    };
    const nextPage = () => {
        if (page === 1000) {
            toast("You are on Last Page", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            setPage(page + 1);
            window.scroll(0, 0);
        }
    };
    return (
        <>
            <div className="container-fluid bg-light pagination-conatiner">
                <div className="pagination py-2 container">
                    <button className="btn btn-primary px-4 py-2" onClick={() => previousPage({})}>
                        Previous
                    </button>
                    <button className="btn btn-primary px-4 py-2" disabled={!info.length} onClick={() => nextPage()}>
                        Next
                    </button>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Pagination;
