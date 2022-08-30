import React from "react";
// Component to show a no data image and other details when the aricle list is empty
const NoData = () => {
    return(
        <div className="no-data-container">
            <h3 className="mt-4">Oops!</h3>
            <img src="no_data1.jpg" alt="No Data" className="no-data-img mt-3 mb-5"/>
            <h3>No Articles Found</h3>
        </div>
    )
}

export default NoData;