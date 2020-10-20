import React from "react";

const LocationDetails = (props) => {
    return(
        <>
            <div className="location-detail-container">
                <div className="location-detail-img">
                    <img className="loc-image" src={props.loc.logo_url}></img>
                </div>
                <div className="location-detail-details">
                    <div>
                        <label>Bussiness Name:</label>
                        {
                            props.loc.name
                        }
                    </div>
                    <div>
                    <label>Address:</label>
                        {
                            props.loc.address
                        }
                    </div>
                    <div>
                    <label>Website:</label>
                        {
                            props.loc.website
                        }
                    </div>
                    <div>
                    <label>Hours:</label>
                        {
                            props.loc.store_hours.map(hours => 
                            <div>
                                {
                                    `${hours.day} ${hours.start_time}-${hours.end_time}`
                                }
                            </div>    
                            )
                        }
                    </div>
                </div>
            </div>
            <input onClick={props.backToLocationList} type="button" value="Go Back"></input>
        </>
    )
}

export default LocationDetails;