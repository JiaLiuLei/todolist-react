import React from 'react';

function Footer(props){
    const {filter, onClick} = props;
    return (
        <div className="footer">
        <span>show: </span>
        <button
            onClick={() => onClick("all")}
            disabled={filter === "all" ? true : false}
        >
            all
        </button>
        <button
            onClick={() => onClick("active")}
            disabled={filter === "active" ? true : false}
        >
            active
        </button>
        <button
            onClick={() => onClick("completed")}
            disabled={filter === "completed" ? true : false}
        >
            completed
        </button>
        </div>
    );
}

export default Footer;