
const userManagementDepartments = (state = { isLoading: true, departments: [], error: null }, action) => {
    switch (action.type) {
        case 'Departments_Fetch_Request':
            return {
                ...state,
                isLoading: true,
            }
        case 'Departments_Fetch_Success':
            return {
                ...state,
                isLoading: false,
                departments: action.departments
            }
        case 'Departments_Fetch_Failed':
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state
    }
}
const userManagementLocations = (state = { isLoading: false, locations: [], error: null }, action) => {
    switch (action.type) {
        case 'Locations_Fetch_Request':
            return {
                ...state,
                isLoading: true,
            }
        case 'Locations_Fetch_Success':
            return {
                ...state,
                isLoading: false,
                locations: action.locations
            }
        case 'Locations_Fetch_Failed':
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state
    }
}

const userManagementUsers = (state = { isLoading: false, users: [], error: null }, action) => {
    switch (action.type) {
        case 'Users_Fetch_Request':
            return {
                ...state,
                isLoading: true,
            }
        case 'Users_Fetch_Success':
            return {
                ...state,
                isLoading: false,
                users: action.users
            }
        case 'Users_Fetch_Failed':
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state
    }
}

const userManagementDomainHeader = (state = { isLoading: false, domains: [], error: null }, action) => {
    switch (action.type) {
        case 'DomainHeader_Fetch_Request':
            return {
                ...state,
                isLoading: true,
            }
        case 'DomainHeader_Fetch_Success':
            return {
                ...state,
                isLoading: false,
                domains: action.domains
            }
        case 'DomainHeader_Fetch_Failed':
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state
    }
}



export const CampaignBasicBufferAllData = (state = {
    isLoading: false,
    basicBufferData: {},
    error: null
}, action) => {
    switch (action.type) {
        case 'CampaignBasicBufferAllData_Fetch_Request':
            return {
                ...state,
                isLoading: true
            }
        case 'CampaignBasicBufferAllData_Fetch_Success':
            return {
                ...state,
                isLoading: false,
                basicBufferData: action.basicBufferData

            }
        case 'CampaignBasicBufferAllData_Fetch_Failed':
            return {
                ...state,
                isLoading: true,
                error: action.error
            }
        default:
            return state
    }
}

export const CampaignBufferCommentAllData = (state = {
    isLoading: false,
    bufferCommentData: {},
    error: null
}, action) => {
    switch (action.type) {
        case 'CampaignBufferCommentAllData_Fetch_Request':
            return {
                ...state,
                isLoading: true
            }
        case 'CampaignBufferCommentAllData_Fetch_Success':
            return {
                ...state,
                isLoading: false,
                bufferCommentData: action.bufferCommentData

            }
        case 'CampaignBufferCommentAllData_Fetch_Failed':
            return {
                ...state,
                isLoading: true,
                error: action.error
            }
        default:
            return state
    }
}
export const CampaignBufferRatesAllData = (state = {
    isLoading: false,
    bufferRates: {},
    error: null
}, action) => {
    switch (action.type) {
        case 'CampaignBufferRatesAllData_Fetch_Request':
            return {
                ...state,
                isLoading: true
            }
        case 'CampaignBufferRatesAllData_Fetch_Success':
            return {
                ...state,
                isLoading: false,
                bufferRates: action.bufferRates

            }
        case 'CampaignBufferRatesAllData_Fetch_Failed':
            return {
                ...state,
                isLoading: true,
                error: action.error
            }
        default:
            return state
    }
}

export const CampaignCommentAllData = (state = {
    isLoading: false,
    commentData: {},
    error: null
}, action) => {
    switch (action.type) {
        case 'CampaignCommentAllData_Fetch_Request':
            return {
                ...state,
                isLoading: true
            }
        case 'CampaignCommentAllData_Fetch_Success':
            return {
                ...state,
                isLoading: false,
                commentData: action.commentData

            }
        case 'CampaignCommentAllData_Fetch_Failed':
            return {
                ...state,
                isLoading: true,
                error: action.error
            }
        default:
            return state
    }
}

export const CampaignStatsAllData = (state = {
    isLoading: false,
    stats: {},
    error: null
}, action) => {
    switch (action.type) {
        case 'CampaignStatsAllData_Fetch_Request':
            return {
                ...state,
                isLoading: true
            }
        case 'CampaignStatsAllData_Fetch_Success':
            return {
                ...state,
                isLoading: false,
                stats: action.stats

            }
        case 'CampaignStatsAllData_Fetch_Failed':
            return {
                ...state,
                isLoading: true,
                error: action.error
            }
        default:
            return state
    }
}
export const CampaignRatesAllData = (state = {
    isLoading: false,
    rates: {},
    error: null
}, action) => {
    switch (action.type) {
        case 'CampaignRatesAllData_Fetch_Request':
            return {
                ...state,
                isLoading: true
            }
        case 'CampaignRatesAllData_Fetch_Success':
            return {
                ...state,
                isLoading: false,
                rates: action.rates

            }
        case 'CampaignRatesAllData_Fetch_Failed':
            return {
                ...state,
                isLoading: true,
                error: action.error
            }
        default:
            return state
    }
}

export const CampaignBarAllData = (state = {
    isLoading: false,
    basicBarData: {},
    error: null
}, action) => {
    switch (action.type) {
        case 'CampaignBarAllData_Fetch_Request':
            return {
                ...state,
                isLoading: true
            }
        case 'CampaignBarAllData_Fetch_Success':
            return {
                ...state,
                isLoading: false,
                basicBarData: action.basicBarData

            }
        case 'CampaignBarAllData_Fetch_Failed':
            return {
                ...state,
                isLoading: true,
                error: action.error
            }
        default:
            return state
    }
}

export const CampaignHeatAllData = (state = {
    isLoading: false,
    heatData: {},
    error: null
}, action) => {
    switch (action.type) {
        case 'CampaignHeatAllData_Fetch_Request':
            return {
                ...state,
                isLoading: true
            }
        case 'CampaignHeatAllData_Fetch_Success':
            return {
                ...state,
                isLoading: false,
                heatData: action.heatData

            }
        case 'CampaignHeatAllData_Fetch_Failed':
            return {
                ...state,
                isLoading: true,
                error: action.error
            }
        default:
            return state

    }
}

export const CampaignHeatBufferAllData = (state = {
    isLoading: false,
    heatBufferData: {},
    error: null
}, action) => {
    switch (action.type) {
        case 'CampaignHeatBufferAllData_Fetch_Request':
            return {
                ...state,
                isLoading: true
            }
        case 'CampaignHeatBufferAllData_Fetch_Success':
            return {
                ...state,
                isLoading: false,
                heatBufferData: action.heatBufferData

            }
        case 'CampaignHeatBufferAllData_Fetch_Failed':
            return {
                ...state,
                isLoading: true,
                error: action.error
            }

        default:
            return state

    }
}



const campaignMain = (state = {
    loading: false,
    selectedQuestions: [],
    demos: [],
    locations: [],
    departments: [],
    error: null
}, action) => {
    switch (action.type) {
        case 'CampaignMain_Request':
            return {
                ...state,
                loading: true,
                selectedQuestions: [],
                demos: [],
                locations: [],
                departments: [],
            }
        case 'CampaignMain_Success':
            return {
                ...state,
                loading: false,
                selectedQuestions: action.payload,
                demos: action.payload,
                locations: action.payload,
                departments: action.payload,
            }
        case 'CampaignMain_Failed':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}



const campaignMainByID = (state = {
    loading: true,
    formData: [],
    selectedQuestions: [],
    demos: [],
    locations: [],
    departments: [],
    regions: [],
    error: null
}, action) => {
    switch (action.type) {
        case 'CampaignMainID_Request':
            return {
                ...state,
                loading: true,
                formData: [],
                selectedQuestions: [],
                demos: [],
                locations: [],
                departments: [],
                regions: []
            }
        case 'CampaignMainID_Success':
            return {
                ...state,
                loading: false,
                formData: [],
                selectedQuestions: action.payload,
                demos: action.payload,
                locations: action.payload,
                departments: action.payload,
                regions: action.payload
            }
        case 'CampaignMainID_Failed':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const getPreferencesDemographic = (state = {
    loading: false,
    options: [],
    data: [],
    error: null
}, action) => {
    switch (action.type) {
        case 'PreferencesDemographic_Request':
            return {
                ...state,
                loading: true,
            }
        case 'PreferencesDemographic_Success':
            return {
                ...state,
                loading: false,
                options: action.payload,
                data: action.payload
            }
        case 'PreferencesDemographic_Failed':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const sendPreferencesDemographic = (state = {
    loading: false,
    error: null,
}, action) => {
    switch (action.type) {
        case 'SendPreferencesDemographic_Request':
            return {
                ...state,
                loading: true,

            }
        case 'SendPreferencesDemographic_Success':
            return {
                ...state,
                loading: false,
            }
        case 'SendPreferencesDemographic_Failed':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const toggleEnableDepartment = (state = {
    loading: false,
    error: null
}, action) => {
    switch (action.type) {
        case 'ToggleEnableDepartment_Request':
            return {
                ...state,
                loading: true,

            }
        case 'ToggleEnableDepartment_Success':
            return {
                ...state,
                loading: false,

            }
        case 'ToggleEnableDepartment_Failed':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const deleteAllNonUsedDepartments = (state = {
    loading: false,
    error: null
}, action) => {
    switch (action.type) {
        case 'DeleteAllNonUsedDepartments_Request':
            return {
                ...state,
                loading: true,

            }
        case 'DeleteAllNonUsedDepartments_Success':
            return {
                ...state,
                loading: false,

            }
        case 'DeleteAllNonUsedDepartments_Failed':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const sendDepartments = (state = {
    loading: false,
    error: null
}, action) => {
    switch (action.type) {
        case 'SendDepartments_Request':
            return {
                ...state,
                loading: true,

            }
        case 'SendDepartments_Success':
            return {
                ...state,
                loading: false,

            }
        case 'SendDepartments_Failed':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const sendDepartmentsEdit = (state = {
    loading: false,
    error: null
}, action) => {
    switch (action.type) {
        case 'SendDepartmentsEdit_Request':
            return {
                ...state,
                loading: true,

            }
        case 'SendDepartmentsEdit_Success':
            return {
                ...state,
                loading: false,

            }
        case 'SendDepartmentsEdit_Failed':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}



const deleteLocationFloor = (state = {
    loading: false,
    error: null
}, action) => {
    switch (action.type) {
        case 'LocationFloor_Request':
            return {
                ...state,
                loading: true,

            }
        case 'LocationFloor_Success':
            return {
                ...state,
                loading: false,

            }
        case 'LocationFloor_Failed':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const getLocationFloorData = (state = {
    loading: false,
    error: null,
}, action) => {
    switch (action.type) {
        case 'GetFloorLocationData_Request':
            return {
                ...state,
                loading: true,

            }
        case 'GetFloorLocationData_Success':
            return {
                ...state,
                loading: false,
                floorData: action.payload,


            }
        case 'GetFloorLocationData_Failed':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const getFloorData = (state = {
    loading: false,
    error: null
}, action) => {
    switch (action.type) {
        case 'GetFloorData_Request':
            return {
                ...state,
                loading: true,

            }
        case 'GetFloorData_Success':
            return {
                ...state,
                loading: false,
                locationData: action.payload,


            }
        case 'GetFloorData_Failed':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const helpDeskGetData = (state = {
    loading: false,
    error: null
}, action) => {
    switch (action.type) {
        case 'HelpDeskGet_Request':
            return {
                ...state,
                loading: true
            }

        case 'HelpDeskGet_Success':
            return {
                ...state,
                loading: false,
                modalData: action.payload,
                data: action.payload
            }

        case 'HelpDeskGet_Failed':
            return {
                ...state,
                loading: false,
                error: action.payload,

            }


        default:
            return state
    }
}

const getlocationGroupList = (state = {
    loading: false,
    modalData: [],
    locationGroupData: [],
    error: null,
}, action) => {
    switch (action.type) {
        case 'GetlocationGroupList_Request':
            return {
                ...state,
                loading: true
            }

        case 'GetlocationGroupList_Success':
            return {
                ...state,
                loading: false,
                modalData: action.payload,
                locationGroupData: action.payload
            }

        case 'GetlocationGroupList_Failed':
            return {
                ...state,
                loading: false,
                error: action.payload,

            }


        default:
            return state
    }
}

const getLocationData = (state = {
    loading: false,
    locationData: [],
    error: null
}, action) => {
    switch (action.type) {
        case 'GetLocationData_Request':
            return {
                ...state,
                loading: true
            }

        case 'GetLocationData_Success':
            return {
                ...state,
                loading: false,
                locationData: action.payload,

            }

        case 'GetLocationData_Failed':
            return {
                ...state,
                loading: false,
                error: action.payload,

            }


        default:
            return state
    }
}

const locationListData = (state = {
    loading: false,
    data: [],
    regionData: [],
    error: null
}, action) => {
    switch (action.type) {
        case 'LocationList_Request':
            return {
                ...state,
                loading: true
            }

        case 'LocationList_Success':
            return {
                ...state,
                loading: false,
                data: action.payload,
                regionData: action.payload,


            }

        case 'LocationList_Failed':
            return {
                ...state,
                loading: false,
                error: action.payload,

            }


        default:
            return state
    }
}

const getNotificationManagement = (state = {
    loading: false,
    questions: [],
    locations: [],
    campaigns: [],
    notifications: [],
    data: [],
    error: null
}, action) => {
    switch (action.type) {
        case 'NotificationManagement_Request':
            return {
                ...state,
                loading: true,
                questions: [],
                locations: [],
                campaigns: [],
                notifications: [],
                data: [],
            }

        case 'NotificationManagement_Success':
            return {
                ...state,
                loading: false,
                questions: action.payload,
                locations: action.payload,
                campaigns: action.payload,
                notifications: action.payload,
                data: action.payload,


            }

        case 'NotificationManagement_Failed':
            return {
                ...state,
                loading: false,
                error: action.payload,

            }


        default:
            return state
    }
}

const clientsManagement = (state = {
    loading: false,
    clientList: [],
    totalClientsCount: 0,
    totalpageCount: 0,
    error: null
}, action) => {
    switch (action.type) {
        case 'ClientsManagementSearch_Request':
            return {
                ...state,
                loading: true
            }

        case 'ClientsManagementSearch_Success':
            return {
                ...state,
                loading: false,
                clientList: action.payload.clientList,
                totalClientsCount: action.payload.totalClientsCount,
                totalpageCount: action.payload.totalpageCount
            }

        case 'NotificationManagement_Failed':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

const exportClients = (state = {
    result: false,
    error: null
}, action) => {
    switch (action.type) {
        case 'ExportClients_Request':
            return {
                ...state
            }

        case 'ExportClients_Success':
            return {
                ...state,
                result: action.payload.result
            }

        case 'ExportClients_Failed':
            return {
                ...state,
                result: false,
                error: action.payload
            }
        default:
            return state;
    }
}

const saveClientsMainSettings = (state = {
    loading: false,
    response: {},
    error: null
}, action) => {
    switch (action.type) {
        case 'SaveClientsMainSettings_Request':
            return {
                ...state,
                loading: true
            }

        case 'SaveClientsMainSettings_Success':
            return {
                ...state,
                loading: false,
                response: action.payload.response
            }

        case 'SaveClientsMainSettings_Failed':
            return {
                ...state,
                loading: false,
                response: {},
                error: action.payload
            }
        default:
            return state;
    }
}

export {
    userManagementDepartments,
    userManagementLocations,
    userManagementUsers,
    userManagementDomainHeader,
    campaignMain,
    campaignMainByID,
    clientsManagement,
    getPreferencesDemographic,
    sendPreferencesDemographic,
    toggleEnableDepartment,
    deleteAllNonUsedDepartments,
    sendDepartments,
    sendDepartmentsEdit,
    deleteLocationFloor,
    getLocationFloorData,
    getFloorData,
    helpDeskGetData,
    getlocationGroupList,
    getLocationData,
    locationListData,
    getNotificationManagement,
    exportClients,
    saveClientsMainSettings
} 