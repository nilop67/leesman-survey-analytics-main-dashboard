import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';


const TopClientActions =({
    isMenu,
    searchString,
    searchFocusIndex,
    setSearchString,
    searchFoundCount,
    selectPrevMatch,
    selectNextMatch,
    istreeData, 
    settreeData, 
    treeData,
    isMenuSub,
    isLocationDrawer,
    setLocationDrawer,
    isLocationGroupDrawer,
    setLocationGroupDrawer,
    isLanguageDrawer, 
    setLanguageDrawer,
    isTranslationsDrawer, 
    setTranslationsDrawer,
    isUserDrawer,
    setUserDrawer,
    isNotificationDrawer, 
    setNotificationDrawer,
    isImportExportDrawer, 
    setImportExportDrawer,
    isSaving,
    onClickSave
})=> {


  return (
    <>

    <div className="top__filter-dashboard b-t-b">
        {/* Left */}
        <div className="left__side">
            <div className="left__item">
                <button className="n__btn dark icon" onClick={() => onClickSave()} disabled={isSaving}>
                    {isSaving ? <div className="sbl-circ"></div> : `Save`}
                </button>
            </div>
            <div className="left__item">
                <button className="n__btn outline icon">Cancel</button>
            </div>

            {isMenu === "Main" &&
            <>
            <div className="h_divider qq"></div>

            <div className="left__item">
                <button className="btn-dash drop has-icn">
                    Get invite URL
                    <span className="iconx-globe icn xl"></span>
                </button>
            </div>
            </>}

            
            
            {isMenu === "Departments" &&
            <>
            <div className="h_divider qq"></div>
            <div className="left__item nestable">
                <div className="n_input_control has_icon">
                    <span className="cxv-search-l-icn icn"></span>
                    <input 
                    placeholder="Search..." 
                    type="text" 
                    className="n_input"
                    id="find-box"
                    value={searchString}
                    onChange={event => setSearchString(event.target.value)}
                    ></input>
                </div>

                <div className='nestable_search_actions'>
                    <button
                    type="button"
                    disabled={!searchFoundCount}
                    onClick={selectPrevMatch}
                    >
                    <span className='cxv-slider-left-l-icn'></span>
                    </button>

                    <button
                    type="submit"
                    disabled={!searchFoundCount}
                    onClick={selectNextMatch}
                    >
                    <span className='cxv-slider-right-l-icn'></span>
                    </button>
                    <span>
                    &nbsp;
                    {searchFoundCount > 0 ? searchFocusIndex + 1 : 0}
                    &nbsp;/&nbsp;
                    {searchFoundCount || 0}
                    </span>
                </div>
            </div>
            <div className="h_divider qq"></div>

            <div className="left__item">
                <button className="btn-dash drop has-icn" 
                onClick={() =>
                        settreeData((state) =>
                        istreeData.concat({
                                name: `${"New item"}`,
                                })
                          )
                    }>
                    Add new department
                    <span className="cxv-create-l-icn"></span>
                </button>
            </div>
            <div className="h_divider qq"></div>

            <div className="left__item">
                <button onClick={()=>setImportExportDrawer(true)} className="btn-dash drop has-icn">
                    Import / Export
                    <span className="cxv-export-l-icn"></span>
                </button>
            </div>
            </>}

            
            
            {isMenu === "Languages" &&
            <>
            <div className="h_divider qq"></div>

            <div className="left__item">
                <button onClick={()=>setLanguageDrawer(true)} className="btn-dash drop has-icn">
                    Language settings
                    <span className="cxv-settings-l-icn"></span>
                </button>
            </div>
            <div className="h_divider qq"></div>

            <div className="left__item">
                <button onClick={()=>setImportExportDrawer(true)} className="btn-dash drop has-icn">
                    Import / Export (Translations)
                    <span className="cxv-export-l-icn"></span>
                </button>
            </div>
            </>}

            
            
            {isMenu === "Locations" &&
            <>
            <div className="h_divider qq"></div>
            <div className="left__item nestable">
                <div className="n_input_control has_icon">
                    <span className="cxv-search-l-icn icn"></span>
                    <input 
                    placeholder="Search..." 
                    type="text" 
                    className="n_input"
                    id="find-box"
                    ></input>
                </div>
            </div>
            <div className="h_divider qq"></div>

            {isMenuSub === "LocationsSub" ?
            <>
            <div className="left__item">
                <button className="btn-dash drop has-icn" onClick={()=>setLocationDrawer(true)}>
                    Add new
                    <span className="cxv-create-l-icn"></span>
                </button>
            </div>
            <div className="h_divider qq"></div></> :

            <>
            <div className="left__item">
                <div className="n__form_control input_has_btn">
                    <label className="n__form_label">
                    <div className="group">
                        <input type="text" name="name" className="n_input" placeholder='Location group name...' />
                        <button className="iconic__btn" title="Add"><span className="iconx-plus1"></span></button>
                    </div>
                    </label>
                </div>
            </div>
            <div className="h_divider qq"></div>
            </>}


            <div className="left__item">
                <button onClick={()=>setImportExportDrawer(true)} className="btn-dash drop has-icn">
                    Import / Export
                    <span className="cxv-export-l-icn"></span>
                </button>
            </div>
            </>}

            
            
            {isMenu === "User management" &&
            <>
            <div className="h_divider qq"></div>
            <div className="left__item nestable">
                <div className="n_input_control has_icon">
                    <span className="cxv-search-l-icn icn"></span>
                    <input 
                    placeholder="Search..." 
                    type="text" 
                    className="n_input"
                    id="find-box"
                    ></input>
                </div>
            </div>
            <div className="h_divider qq"></div>

            <div className="left__item">
                <button onClick={()=>setUserDrawer(true)} className="btn-dash drop has-icn">
                    Add new user
                    <span className="cxv-create-l-icn"></span>
                </button>
            </div>
            <div className="h_divider qq"></div>

            <div className="left__item">
                <button onClick={()=>setImportExportDrawer(true)} className="btn-dash drop has-icn">
                    Import / Export
                    <span className="cxv-export-l-icn"></span>
                </button>
            </div>
            </>}

            
            
            {isMenu === "Verifications" &&
            <>
            <div className="h_divider qq"></div>
            <div className="left__item">
                <div className="n__form_control input_has_btn">
                    <label className="n__form_label">
                    <div className="group">
                        <input type="text" name="name" className="n_input" placeholder={isMenuSub === "Domains" ? 'Add domain...' : 'Add email...'} />
                        <button className="iconic__btn" title="Add"><span className="iconx-plus1"></span></button>
                    </div>
                    </label>
                </div>
            </div>
            </>}

            
            
            {isMenu === "Identity provider" &&
            <>
            <div className="h_divider qq"></div>
            <div className="left__item">
                <div className="n__form_control input_has_btn">
                    <label className="n__form_label">
                    <div className="group">
                        <input type="text" name="name" className="n_input" placeholder="Metadata URL..." />
                        <button className="iconic__btn" title="Add"><span className="iconx-plus1"></span></button>
                    </div>
                    </label>
                </div>
            </div>
            </>}

            
            
            {isMenu === "Notifications" &&
            <>
            <div className="h_divider qq"></div>

            <div className="left__item">
                <button onClick={()=>setNotificationDrawer(true)} className="btn-dash drop has-icn">
                    Add new notification
                    <span className="cxv-create-l-icn"></span>
                </button>
            </div>
            </>}



            {/* <div className="h_divider"></div>

            <div className="left__item">
                <button className="btn-dash drop has-icn">
                    Create new
                    <span className="cxv-create-l-icn"></span>
                </button>
            </div>
            <div className="h_divider"></div> */}

        </div>

        {/* Right */}
        <div className="right__side">
            
            <div className="right__item">
                {/* Right item */}
            </div>
            <div className="h_divider"></div>

        </div>
    </div>
    </>
  )
}

export default TopClientActions;