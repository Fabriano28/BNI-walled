import searchIcon from '../assets/walled-icon-search.png'

function Filters() {
    return (
        <div className="container text-center mb-3">
            <div className="row align-items-center">

            <div className="col d-flex align-items-center flex-grow-1">
                <div className="input-group">
                <span className="input-group-text bg-white">
                    <img src={ searchIcon } alt="Search" width="16" height="16" />
                </span>
                    <input
                        type="text"
                        className="form-control"
                        id="specificSizeInputName"
                        placeholder="Search"
                    />
                </div>
            </div>


                <div className="col-2">
                </div>

                <div className="col d-flex align-items-center gap-2 flex-grow-1">
                    <label htmlFor="specificSizeSelectShow" className="mb-0">
                        Show
                    </label>
                    <select className="form-select" id="specificSizeSelectShow">
                        <option value="">Choose...</option>
                        <option value="5">Last 5 transactions</option>
                        <option value="10">Last 10 transactions</option>
                        <option value="50">Last 50 transactions</option>
                    </select>
                </div>

                <div className="col-auto d-flex align-items-center gap-2">
                    <label htmlFor="specificSizeSelectSort" className="mb-0 text-nowrap">
                        Sort By
                    </label>
                    <select className="form-select" id="specificSizeSelectSort">
                        <option value="">Choose field...</option>
                        <option value="dateTime">Date</option>
                        <option value="type">Type</option>
                        <option value="fromTo">From/To</option>
                        <option value="description">Description</option>
                        <option value="amount">Amount</option>
                    </select>
                    <select className="form-select" id="specificSizeSelectOrder">
                        <option value="">Order...</option>
                        <option value="desc">Descending</option>
                        <option value="asc">Ascending</option>
                    </select>
                </div>

            </div>
        </div>
    );
}

export default Filters;