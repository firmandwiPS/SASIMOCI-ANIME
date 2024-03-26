const Pagination = ({ page, lastPage, setPage }) => {
    const scrollTop = () => {
        window.scrollTo({
            behavior: "smooth",
            top: 0
        });
    };

    const handleNextPage = () => {
        setPage((prevState) => Math.min(prevState + 1, lastPage)); // Batasi ke lastPage maksimum
        scrollTop();
    };

    const handlePrevPage = () => {
        setPage((prevState) => Math.max(prevState - 1, 1)); // Batasi ke 1 minimum
        scrollTop();
    };

    return (
        <div className="flex justify-center items-center py-4 px-2 gap-2 text-color-primary">
        { page <= 1 ? null :
            <button onClick={handlePrevPage} className="transition-all hover:text-color-accent hover:text-xl ease-in duration-390">&laquo; Prev </button>
        }

            <p>{page} of {lastPage}</p>

        { page >= lastPage ? null :
            <button onClick={handleNextPage} className="transition-all hover:text-color-accent hover:text-xl ease-in duration-390">Next &raquo; </button>
        }
        </div>
    );
};

export default Pagination;
