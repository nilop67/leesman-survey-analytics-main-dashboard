import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { DatePicker, Space, Table, Button, Input } from 'antd';
import LoaderPage from '../../../../elements/loader_page';
import BreadcrumbDashboard from '../../../../elements/breadcrumb_dashboard';
import SummarySettings from './summary/index';
import DeleteModal from '../../../../elements/modal_delete';
import TopSurveyActions from '../_elements/top_actions';
import GeneralSetupSettings from './general_setup/index';
import DemographicsSettings from '../../../shared/client_settings/demographics/index';
import LocationSurveySettings from './locations/index';
import DrawerLocationSurvey from './locations/drawer_location';
import DepartmentSurveySettings from './departments/index';
import DrawerDepartmentSurvey from './departments/drawer_department';
import Translations from '../../../../../Admin/ClientManagement/Translations';
import LanguageSettings from '../../../shared/client_settings/languages/index';
import DrawerTranslations from '../../../shared/client_settings/languages/drawer_tranlations';
import DrawerLanguage from '../../../shared/client_settings/languages/drawer_languages';
import NotificationsSurveySettings from './notifications/index';
import CustomisationsSurveySettings from './customisations/index';
import AdditionalSettings from './additional/index';
import DrawerLocationGroup from '../../../shared/client_settings/locations/drawer_locationGroup';
import DrawerModules from './additional/drawer_modules';
import DrawerDemographicsQuestions from './demographics/drawer_demographics_questions';
import DrawerTailorLocationQuestions from './locations/drawer_tailor_questions';
import DrawerImportExport from '../../../shared/import_export/index';


const CreateSurvey =()=> {
  useLayoutEffect(() => {
    document.body.classList.add("temp__class");
  }, []);
  
  const [deleteModal, setDeleteModal] = useState(false);

  const [isMenu, setMenu] = useState("Summary");
  const [isMenuSub, setMenuSub] = useState(null);
  const [checkedLoginType, setCheckedLoginType] = useState("Email");
  const [isLocationSurveyDrawer, setLocationSurveyDrawer] = useState(false);
  const [isDepartmentSurveyDrawer, setDepartmentSurveyDrawer] = useState(false);
  const [isLanguageDrawer, setLanguageDrawer] = useState(false);
  const [isTranslationsDrawer, setTranslationsDrawer] = useState(false);
  const [isLocationGroupDrawer, setLocationGroupDrawer] = useState(false);
  const [isModulesDrawer, setModulesDrawer] = useState(false);
  const [isDemographicsQuestionsDrawer, setDemographicsQuestionsDrawer] = useState(false);
  const [isTailorLocationDrawer, setTailorLocationDrawer] = useState(false);
  const [isImportExportDrawer, setImportExportDrawer] = useState(false);


  const languagesSubMenu = (
    <div className="col-lg-12 mt-1">
      <div className="n_menu_horizontal sub bottom">
        <a onClick={() => setMenuSub("Locations")} href="#!" className={`${isMenuSub === "Locations" ? " active" : ""} `}>
          Locations
        </a>
        <a onClick={() => setMenuSub("Departments")} href="#!" className={`${isMenuSub === "Departments" ? " active" : ""} `}>
          Departments
        </a>
      </div>
    </div>
);

const goTop =()=> {
  window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
}

  return (
    <>

      <LoaderPage />

      <DeleteModal visibleDatasetModal={deleteModal}  setDeleteModal={setDeleteModal}/>

      <DrawerLocationSurvey
      isLocationSurveyDrawer={isLocationSurveyDrawer}
      setLocationSurveyDrawer={setLocationSurveyDrawer}
      title={"Edit selected location"}
      />

      <DrawerDepartmentSurvey
      isDepartmentSurveyDrawer={isDepartmentSurveyDrawer}
      setDepartmentSurveyDrawer={setDepartmentSurveyDrawer}
      title={"Departments"}
      />

      <DrawerTranslations
      isTranslationsDrawer={isTranslationsDrawer}
      setTranslationsDrawer={setTranslationsDrawer}
      setLanguageDrawer={setLanguageDrawer}
      title={"Translation settings"}
      />

      <DrawerLanguage
      isLanguageDrawer={isLanguageDrawer}
      setLanguageDrawer={setLanguageDrawer}
      title={"Language settings"}
      isSurvey={true}
      />

      <DrawerLocationGroup
      isLocationGroupDrawer={isLocationGroupDrawer}
      setLocationGroupDrawer={setLocationGroupDrawer}
      title={"Locations list"}
      />

      <DrawerModules
      isModulesDrawer={isModulesDrawer}
      setModulesDrawer={setModulesDrawer}
      title={"Modules list"}
      />

      <DrawerDemographicsQuestions
      isDemographicsQuestionsDrawer={isDemographicsQuestionsDrawer}
      setDemographicsQuestionsDrawer={setDemographicsQuestionsDrawer}
      title={"Add new question"}
      />

      <DrawerTailorLocationQuestions
      isTailorLocationDrawer={isTailorLocationDrawer}
      setTailorLocationDrawer={setTailorLocationDrawer}
      title={"Add new tailored location question"}
      />

      <DrawerImportExport
      isImportExportDrawer={isImportExportDrawer}
      setImportExportDrawer={setImportExportDrawer}
      title={"Import - Export"}
      />


      <div className="container-fluid">
        <div className="row clearfix top-info">
          <div className="col-lg-12">
            <BreadcrumbDashboard
              isShow={true}
              mainTitle={"Surveys management"}
              mainURL={"/surveys-management"}
              secondTitle={"Create new survey ??? Client X"}
              secondURL={"/create-survey"}
            />
            <h1>Create new survey ??? Client X</h1>
          </div>
        </div>

        <div className="row clearfix">
          <div className="col-lg-12">
            <div className="top__filter-dashboard b-t-b">
              {/* Left */}
              <div className="left__side">
                <div className="left__item">
                  <div className="n_menu_horizontal top">
                      <a onClick={()=>{setMenu("Summary");setMenuSub("")}} href="#!" className={`${isMenu === "Summary" ? " active" : ""} `}>Summary</a>
                      <a onClick={()=>{setMenu("General setup");setMenuSub("")}} href="#!" className={`${isMenu === "General setup" ? " active" : ""} `}>General setup</a>
                      <a onClick={()=>{setMenu("Demographics");setMenuSub("")}} href="#!" className={`${isMenu === "Demographics" ? " active" : ""} `}>Demographics</a>
                      <a onClick={()=>{setMenu("Departments");setMenuSub("")}} href="#!" className={`${isMenu === "Departments" ? " active" : ""} `}>Departments</a>
                      <a onClick={()=>{setMenu("Languages");setMenuSub("Locations")}} href="#!" className={`${isMenu === "Languages" ? " active" : ""} `}>Languages</a>
                      <a onClick={()=>{setMenu("Locations");setMenuSub("")}} href="#!" className={`${isMenu === "Locations" ? " active" : ""} `}>Locations</a>
                      <a onClick={()=>{setMenu("Additional");setMenuSub("")}} href="#!" className={`${isMenu === "Additional" ? " active" : ""} `}>Additional modules and questions</a>
                      <a onClick={()=>{setMenu("Customisations");setMenuSub("")}} href="#!" className={`${isMenu === "Customisations" ? " active" : ""} `}>Customisations</a>
                      <a onClick={()=>{setMenu("Notifications");setMenuSub("")}} href="#!" className={`${isMenu === "Notifications" ? " active" : ""} `}>Notifications</a>


                      {/* <a onClick={()=>setMenu("Admin setup")} href="#!" className={`${isMenu === "Admin setup" ? " active" : ""} `}>Admin setup</a>
                      <a onClick={()=>setMenu("Admin tailoring")} href="#!" className={`${isMenu === "Admin tailoring" ? " active" : ""} `}>Admin tailoring</a>
                      <a onClick={()=>setMenu("IT compatibility")} href="#!" className={`${isMenu === "IT compatibility" ? " active" : ""} `}>IT compatibility</a>
                      <a onClick={()=>setMenu("Languages")} href="#!" className={`${isMenu === "Languages" ? " active" : ""} `}>Languages</a>
                      <a onClick={()=>setMenu("Locations")} href="#!" className={`${isMenu === "Locations" ? " active" : ""} `}>Locations</a>
                      <a onClick={()=>setMenu("Floors")} href="#!" className={`${isMenu === "Floors" ? " active" : ""} `}>Floors</a>
                      <a onClick={()=>setMenu("Departments")} href="#!" className={`${isMenu === "Departments" ? " active" : ""} `}>Departments</a> */}
                    </div>
                </div>
              </div>

              {/* Right */}
              <div className="right__side">
                <div className="right__item"></div>
              </div>
            </div>
          </div>

          
          {/* SUB MENU */}

          {/* {isMenu === "Summary" && (
            <div className="col-lg-12 mt-1">
              <div className="n_menu_horizontal top bottom">
                <a onClick={()=>setMenuSub("Quaternary 1")} href="#!" className={`${isMenuSub === "Quaternary 1" ? " active" : ""} `}>Quaternary 1</a>
                <a onClick={()=>setMenuSub("Quaternary 2")} href="#!" className={`${isMenuSub === "Quaternary 2" ? " active" : ""} `}>Quaternary 2</a>
                <a onClick={()=>setMenuSub("Quaternary 3")} href="#!" className={`${isMenuSub === "Quaternary 3" ? " active" : ""} `}>Quaternary 3</a>
                <a onClick={()=>setMenuSub("Quaternary 4")} href="#!" className={`${isMenuSub === "Quaternary 4" ? " active" : ""} `}>Quaternary 4</a>
                <a onClick={()=>setMenuSub("Quaternary 5")} href="#!" className={`${isMenuSub === "Quaternary 5" ? " active" : ""} `}>Quaternary 5</a>
                <a onClick={()=>setMenuSub("Quaternary 6")} href="#!" className={`${isMenuSub === "Quaternary 6" ? " active" : ""} `}>Quaternary 6</a>
                <a onClick={()=>setMenuSub("Quaternary 7")} href="#!" className={`${isMenuSub === "Quaternary 7" ? " active" : ""} `}>Quaternary 7</a>
              </div>
            </div>
          )} */}
          
          {/* SUB MENU */}



          <div className="col-lg-12 mt-3">
            <TopSurveyActions
              isMenu={isMenu}
              isMenuSub={isMenuSub}
              checkedLoginType={checkedLoginType}
              setCheckedLoginType={setCheckedLoginType}
              isLocationSurveyDrawer={isLocationSurveyDrawer}
              setLocationSurveyDrawer={setLocationSurveyDrawer}
              setLanguageDrawer={setLanguageDrawer}
              isLocationGroupDrawer={isLocationGroupDrawer}
              setLocationGroupDrawer={setLocationGroupDrawer}
              isModulesDrawer={isModulesDrawer}
              setModulesDrawer={setModulesDrawer}
              isDemographicsQuestionsDrawer={isDemographicsQuestionsDrawer}
              setDemographicsQuestionsDrawer={setDemographicsQuestionsDrawer}
              isTailorLocationDrawer={isTailorLocationDrawer}
              setTailorLocationDrawer={setTailorLocationDrawer}
              isDepartmentSurveyDrawer={isDepartmentSurveyDrawer}
              setDepartmentSurveyDrawer={setDepartmentSurveyDrawer}
              isImportExportDrawer={isImportExportDrawer}
              setImportExportDrawer={setImportExportDrawer}
            />
          </div>

          <div className={`${isMenu === "Departments" ? "col-lg-6" : "col-lg-12"} `}>

            {isMenu === "Summary" && (
              <SummarySettings 
              setMenu={setMenu}
              setMenuSub={setMenuSub}
              isMenu={isMenu}
              isMenuSub={isMenuSub}
              goTop={goTop}
              />
            )}

            {isMenu === "General setup" && (
              <GeneralSetupSettings
              checkedLoginType={checkedLoginType}
              setCheckedLoginType={setCheckedLoginType}
              isImportExportDrawer={isImportExportDrawer}
              setImportExportDrawer={setImportExportDrawer}
              />
            )}

            {isMenu === "Demographics" && (
              <DemographicsSettings/>
            )}

            {isMenu === "Locations" && (
              <LocationSurveySettings
              isLocationSurveyDrawer={isLocationSurveyDrawer}
              setLocationSurveyDrawer={setLocationSurveyDrawer}
              />
            )}

            {isMenu === "Departments" && (
              <DepartmentSurveySettings
              isDepartmentSurveyDrawer={isDepartmentSurveyDrawer}
              setDepartmentSurveyDrawer={setDepartmentSurveyDrawer}
              />
            )}

            {isMenu === "Languages" && (
              <LanguageSettings
              setMenuSub={setMenuSub}
              isMenuSub={isMenuSub}
              isSurvey={true}
              languagesSubMenu={languagesSubMenu}
              isLanguageDrawer={isLanguageDrawer} 
              setLanguageDrawer={setLanguageDrawer}
              isTranslationsDrawer={isTranslationsDrawer}
              setTranslationsDrawer={setTranslationsDrawer}/>
            )}

            {isMenu === "Notifications" && (
              <NotificationsSurveySettings/>
            )}

            {isMenu === "Customisations" && (
              <CustomisationsSurveySettings/>
            )}

            {isMenu === "Additional" && (
              <AdditionalSettings
              isModulesDrawer={isModulesDrawer}
              setModulesDrawer={setModulesDrawer}
              />
            )}


          </div>
          <div className="col-lg-12 divider-col">{/* <div className="l-divider"/> */}</div>
        </div>
      </div>
    </>
  )
}

export default CreateSurvey;