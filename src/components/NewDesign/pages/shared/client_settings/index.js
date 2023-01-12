import { DatePicker } from "antd";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import BreadcrumbDashboard from "../../../elements/breadcrumb_dashboard";
import LoaderPage from "../../../elements/loader_page";
import DeleteModal from "../../../elements/modal_delete";
import DrawerImportExport from "../import_export/index";
import DemographicsSettings from "./demographics/index";
import DepartmentsSettings from "./departments/index";
import IdentitySettings from "./identity_provider/index";
import LanguageDrawer from './languages/drawer_languages';
import TranslationsDrawer from './languages/drawer_tranlations';
import LanguageSettings from "./languages/index";
import LocationDrawer from './locations/drawer_location';
import LocationGroupDrawer from './locations/drawer_locationGroup';
import LocationSettings from "./locations/index";
import MainSettings from "./main/index";
import NotificationSettings from "./notifications/index";
import NotificationDrawer from "./notifications/notification_drawer";
import EmailsDrawer from "./notifications/_emails";
import QuestionsDrawer from "./notifications/_questions";
import UserDrawer from "./user_management/drawer_user";
import UserManagementSettings from "./user_management/index";
import VerificationSettings from "./verifications/index";
import TopClientActions from "./_elements/top_actions";
import { saveClientsMainSettingsAction } from "../../../../../actions/adminActions";

import 'react-toastify/dist/ReactToastify.css';

const { RangePicker } = DatePicker;

const treeData = [
  { name: "IT Manager" },
  {
    name: "Regional Manager",
    expanded: true,
    children: [{ name: "Branch Manager" }],
  },
];

const ClientSettings = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(store => store.saveClientsMainSettings);

  useLayoutEffect(() => {
    document.body.classList.add("temp__class");
  }, []);
  const history = useHistory();

  const [isMenu, setMenu] = useState("Main");
  const [isMenuSub, setMenuSub] = useState(null);

  const [isLocationDrawer, setLocationDrawer] = useState(false);
  const [isLocationGroupDrawer, setLocationGroupDrawer] = useState(false);
  const [isLanguageDrawer, setLanguageDrawer] = useState(false);
  const [isTranslationsDrawer, setTranslationsDrawer] = useState(false);
  const [isUserDrawer, setUserDrawer] = useState(false);
  const [isNotificationDrawer, setNotificationDrawer] = useState(false);
  const [isEmailsDrawer, setEmailsDrawer] = useState(false);
  const [isQuestionsDrawer, setQuestionsDrawer] = useState(false);
  const [isImportExportDrawer, setImportExportDrawer] = useState(false);

  // Main settings
  const [clientName, setClientName] = useState("");
  const [clientRefNo, setClientRefNo] = useState("");
  const [website, setWebsite] = useState("");
  const [checkedInside, setCheckedInside] = useState(false);
  const [checkedFeedbacks, setCheckedFeedbacks] = useState(false);
  const [checkedQuestions, setCheckedQuestions] = useState(false);
  const [checkedXp, setCheckedXp] = useState(false);
  const [savedMainSettings, setSavedMainSettings] = useState(false);

  // Search Nestable
  const [searchString, setSearchString] = useState("");
  const [searchFocusIndex, setSearchFocusIndex] = useState(0);
  const [searchFoundCount, setSearchFoundCount] = useState(null);
  const customSearchMethod = ({ node, searchQuery }) =>
    searchQuery && node.name && node.name.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;
  // || (node.subtitle && node.subtitle.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1)

  const selectPrevMatch = () =>
    setSearchFocusIndex(
      searchFocusIndex !== null ? (searchFoundCount + searchFocusIndex - 1) % searchFoundCount : searchFoundCount - 1
    );

  const selectNextMatch = () => setSearchFocusIndex(searchFocusIndex !== null ? (searchFocusIndex + 1) % searchFoundCount : 0);
  // Search Nestable

  const [istreeData, settreeData] = useState(treeData);
  const [deleteModal, setDeleteModal] = useState(false);

  const onClickSave = async () => {
    if (clientName && clientRefNo && website) {
      dispatch(saveClientsMainSettingsAction({
        name: clientName,
        industry: 153,
        website: website,
        language: "tr",
        clientRefNo: clientRefNo,
        inviteCode: "",
        enableFeedbacks: checkedFeedbacks,
        enableQuestions: checkedQuestions,
        enableXp: checkedXp,
        enableInside: checkedInside
      }));
      setSavedMainSettings(true);
    }
    else {
      toast.error("Please fill the required fields.");
    }
  }

  useEffect(() => {
    if (!loading && savedMainSettings) {
      toast.success('Saved successfully.', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => history.push("/clients-management"), 3000);
    }
  }, [loading]);

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

  return (
    <>
      <LoaderPage />

      <ToastContainer style={{ zIndex: 99999999 }} />

      <DeleteModal visibleDatasetModal={deleteModal} setDeleteModal={setDeleteModal} />

      <NotificationDrawer
        isNotificationDrawer={isNotificationDrawer}
        setNotificationDrawer={setNotificationDrawer}
        setEmailsDrawer={setEmailsDrawer}
        setQuestionsDrawer={setQuestionsDrawer}
        setLocationGroupDrawer={setLocationGroupDrawer}
        title={"Notification settings"}
      />

      <LocationDrawer
        isLocationDrawer={isLocationDrawer}
        setLocationDrawer={setLocationDrawer}
        title={"Location settings"}
      />

      <LocationGroupDrawer
        isLocationGroupDrawer={isLocationGroupDrawer}
        setLocationGroupDrawer={setLocationGroupDrawer}
        title={"Locations list"}
      />

      <TranslationsDrawer
        isTranslationsDrawer={isTranslationsDrawer}
        setTranslationsDrawer={setTranslationsDrawer}
        setLanguageDrawer={setLanguageDrawer}
        title={"Translation settings"}
      />

      <LanguageDrawer
        isLanguageDrawer={isLanguageDrawer}
        setLanguageDrawer={setLanguageDrawer}
        title={"Language settings"}
      />

      <UserDrawer
        isUserDrawer={isUserDrawer}
        setUserDrawer={setUserDrawer}
        title={"User settings"}
      />

      <EmailsDrawer
        isEmailsDrawer={isEmailsDrawer}
        setEmailsDrawer={setEmailsDrawer}
        title={"Add emails"}
      />

      <QuestionsDrawer
        isQuestionsDrawer={isQuestionsDrawer}
        setQuestionsDrawer={setQuestionsDrawer}
        title={"Select questions"}
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
              mainTitle={"Client management"}
              mainURL={"/clients-management"}
              secondTitle={"Client settings"}
              secondURL={"/client-settings"}
            />
            <h1>Client settings</h1>
          </div>
        </div>

        <div className="row clearfix">
          <div className="col-lg-12">
            <div className="top__filter-dashboard b-t-b">
              {/* Left */}
              <div className="left__side">
                <div className="left__item">
                  <div className="n_menu_horizontal top">
                    <a onClick={() => setMenu("Main")} href="#!" className={`${isMenu === "Main" ? " active" : ""} `}>
                      Main
                    </a>
                    <a
                      onClick={() => {
                        setMenu("Departments");
                        setMenuSub("Dropdown");
                      }}
                      href="#!"
                      className={`${isMenu === "Departments" ? " active" : ""} `}
                    >
                      Departments
                    </a>
                    <a
                      onClick={() => {
                        setMenu("Locations");
                        setMenuSub("LocationsSub");
                      }}
                      href="#!" className={`${isMenu === "Locations" ? " active" : ""} `}>
                      Locations
                    </a>
                    <a
                      onClick={() => {
                        setMenu("Languages");
                        setMenuSub("Locations");
                      }}
                      href="#!" className={`${isMenu === "Languages" ? " active" : ""} `}>
                      Languages
                    </a>
                    <a
                      onClick={() => setMenu("User management")}
                      href="#!"
                      className={`${isMenu === "User management" ? " active" : ""} `}
                    >
                      User management
                    </a>
                    <a
                      onClick={() => setMenu("Demographics")}
                      href="#!"
                      className={`${isMenu === "Demographics" ? " active" : ""} `}
                    >
                      Demographics
                    </a>
                    {/* <a onClick={() => setMenu("Modules")} href="#!" className={`${isMenu === "Modules" ? " active" : ""} `}>
                      Modules
                    </a> */}
                    <a
                      onClick={() => {
                        setMenu("Verifications");
                        setMenuSub("Domains");
                      }}
                      href="#!"
                      className={`${isMenu === "Verifications" ? " active" : ""} `}
                    >
                      Verifications
                    </a>
                    <a
                      onClick={() => {
                        setMenu("Identity provider");
                        setMenuSub("sso");
                      }}
                      href="#!"
                      className={`${isMenu === "Identity provider" ? " active" : ""} `}
                    >
                      Identity provider
                    </a>
                    <a
                      onClick={() => setMenu("Notifications")}
                      href="#!"
                      className={`${isMenu === "Notifications" ? " active" : ""} `}
                    >
                      Notifications
                    </a>
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
          {isMenu === "Departments" && (
            <div className="col-lg-12 mt-1">
              <div className="n_menu_horizontal sub bottom">
                <a onClick={() => setMenuSub("Dropdown")} href="#!" className={`${isMenuSub === "Dropdown" ? " active" : ""} `}>
                  Dropdown department list
                </a>
                <a onClick={() => setMenuSub("Cascading")} href="#!" className={`${isMenuSub === "Cascading" ? " active" : ""} `}>
                  Cascading department list
                </a>
              </div>
            </div>
          )}
          {isMenu === "Locations" && (
            <div className="col-lg-12 mt-1">
              <div className="n_menu_horizontal sub bottom">
                <a onClick={() => setMenuSub("LocationsSub")} href="#!" className={`${isMenuSub === "LocationsSub" ? " active" : ""} `}>
                  Locations
                </a>
                <a onClick={() => setMenuSub("LocationGroups")} href="#!" className={`${isMenuSub === "LocationGroups" ? " active" : ""} `}>
                  Location groups
                </a>
              </div>
            </div>
          )}
          {isMenu === "Verifications" && (
            <div className="col-lg-12 mt-1">
              <div className="n_menu_horizontal sub bottom">
                <a onClick={() => setMenuSub("Domains")} href="#!" className={`${isMenuSub === "Domains" ? " active" : ""} `}>
                  Domains
                </a>
                <a onClick={() => setMenuSub("Emails")} href="#!" className={`${isMenuSub === "Emails" ? " active" : ""} `}>
                  Emails
                </a>
              </div>
            </div>
          )}
          {isMenu === "Identity provider" && (
            <div className="col-lg-12 mt-1">
              <div className="n_menu_horizontal sub bottom">
                <a onClick={() => setMenuSub("sso")} href="#!" className={`${isMenuSub === "sso" ? " active" : ""} `}>
                  SSO
                </a>
              </div>
            </div>
          )}
          {/* SUB MENU */}



          <div className="col-lg-12 mt-3">
            <TopClientActions
              isMenu={isMenu}
              searchString={searchString}
              searchFocusIndex={searchFocusIndex}
              setSearchString={setSearchString}
              searchFoundCount={searchFoundCount}
              selectPrevMatch={selectPrevMatch}
              selectNextMatch={selectNextMatch}
              settreeData={settreeData}
              istreeData={istreeData}
              isMenuSub={isMenuSub}
              isLocationDrawer={isLocationDrawer}
              setLocationDrawer={setLocationDrawer}
              isLocationGroupDrawer={isLocationGroupDrawer}
              setLocationGroupDrawer={setLocationGroupDrawer}
              isLanguageDrawer={isLanguageDrawer}
              setLanguageDrawer={setLanguageDrawer}
              isTranslationsDrawer={isTranslationsDrawer}
              setTranslationsDrawer={setTranslationsDrawer}
              isUserDrawer={isUserDrawer}
              setUserDrawer={setUserDrawer}
              isNotificationDrawer={isNotificationDrawer}
              setNotificationDrawer={setNotificationDrawer}
              isEmailsDrawer={isEmailsDrawer}
              setEmailsDrawer={setEmailsDrawer}
              isQuestionsDrawer={isQuestionsDrawer}
              setQuestionsDrawer={setQuestionsDrawer}
              isImportExportDrawer={isImportExportDrawer}
              setImportExportDrawer={setImportExportDrawer}
              isSaving={loading}
              onClickSave={onClickSave}
            />
          </div>

          <div className={`${isMenu === "Main" ? "col-lg-6" : "col-lg-12"} `}>


            {isMenu === "Main" &&
              <MainSettings
                {...{
                  clientName,
                  setClientName,
                  clientRefNo,
                  setClientRefNo,
                  website,
                  setWebsite,
                  checkedInside,
                  setCheckedInside,
                  checkedFeedbacks,
                  setCheckedFeedbacks,
                  checkedQuestions,
                  setCheckedQuestions,
                  checkedXp,
                  setCheckedXp
                }}
              />
            }

            {isMenu === "Departments" && (
              <DepartmentsSettings
                customSearchMethod={customSearchMethod}
                searchString={searchString}
                searchFocusIndex={searchFocusIndex}
                searchFinishCallback={(matches) => {
                  setSearchFoundCount(matches.length);
                  setSearchFocusIndex(matches.length > 0 ? searchFocusIndex % matches.length : 0);
                }}
                settreeData={settreeData}
                istreeData={istreeData}
                treeData={treeData}
                isMenuSub={isMenuSub}
              />
            )}

            {isMenu === "Locations" && (
              <LocationSettings
                setDeleteModal={setDeleteModal}
                deleteModal={deleteModal}
                isMenuSub={isMenuSub}
                isLocationDrawer={isLocationDrawer}
                setLocationDrawer={setLocationDrawer}
                isLocationGroupDrawer={isLocationGroupDrawer}
                setLocationGroupDrawer={setLocationGroupDrawer}
              />
            )}

            {isMenu === "Languages" && (
              <LanguageSettings
                setMenuSub={setMenuSub}
                isMenuSub={isMenuSub}
                languagesSubMenu={languagesSubMenu}
                isLanguageDrawer={isLanguageDrawer}
                setLanguageDrawer={setLanguageDrawer}
                isTranslationsDrawer={isTranslationsDrawer}
                setTranslationsDrawer={setTranslationsDrawer}
              />
            )}

            {isMenu === "User management" && (
              <UserManagementSettings
                isUserDrawer={isUserDrawer}
                setUserDrawer={setUserDrawer} />
            )}

            {isMenu === "Demographics" && (
              <DemographicsSettings />
            )}

            {isMenu === "Verifications" && (
              <VerificationSettings
                isMenuSub={isMenuSub} />
            )}

            {isMenu === "Identity provider" && (
              <IdentitySettings
                isMenuSub={isMenuSub} />
            )}

            {isMenu === "Notifications" && (
              <NotificationSettings
                isNotificationDrawer={isNotificationDrawer}
                setNotificationDrawer={setNotificationDrawer} />
            )}


          </div>
          <div className="col-lg-12 divider-col">{/* <div className="l-divider"/> */}</div>
        </div>
      </div>
    </>
  );
};

export default ClientSettings;
