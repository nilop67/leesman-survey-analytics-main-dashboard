import React from 'react';
import Locations from './locations';
import LocationGroups from './location_groups';

const LocationSettings =({
  isMenuSub, 
  isLocationDrawer,
  setLocationDrawer, 
  isLocationGroupDrawer,
  setLocationGroupDrawer})=> {



  return (
    <>
    <div className="n__card hast__table mt-0">
      <div className="n__body">
        <h3 className="">{isMenuSub === "LocationsSub" ? "Locations" : "Location groups"}</h3>
        <span className="card_desc">Total: <strong>11 {isMenuSub === "LocationsSub" ? "locations" : "location groups"}</strong></span>

        <div className="row">

          <div className="col-lg-12">
            <div className="n_table respo">
                
                {isMenuSub === "LocationsSub" && <Locations
                                                  isLocationDrawer={isLocationDrawer}
                                                  setLocationDrawer={setLocationDrawer}/>}

                {isMenuSub === "LocationGroups" && <LocationGroups
                                                  isLocationGroupDrawer={isLocationGroupDrawer}
                                                  setLocationGroupDrawer={setLocationGroupDrawer}/>}
                
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default LocationSettings;