import React from "react";


// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Search(props) {
    return (
        <form className="search" style={{width: 250}}>
            <div className="form-group">
                <label htmlFor="user">Search</label>
                <input
                    value={props.name}
                    onChange={props.handleInputChange}
                    name="user"
                    type="text"
                    className="form-control"
                    placeholder="User's name"
                    id="name"
                />
               
            </div>
        </form>
    );
}

export default Search;
