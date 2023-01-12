import { Button, Input, Space, Table } from 'antd';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { useDispatch, useSelector } from 'react-redux';

import { clientsManagementAction } from '../../../../../actions/adminActions';
import BreadcrumbDashboard from '../../../elements/breadcrumb_dashboard';
import CustomSelect from '../../../elements/custom_select';
import LoaderPage from '../../../elements/loader_page';
import DeleteModal from '../../../elements/modal_delete';
import TopFilter from '../../../elements/top_filter_dashboard';

const ClientManagementAdmin = () => {
  useLayoutEffect(() => {
    document.body.classList.add("temp__class");
  }, []);

  const dispatch = useDispatch();
  const { loading, clientList, totalClientsCount } = useSelector(store => store.clientsManagement);

  // Table Drop Functions
  const [actionKey, setActionKey] = useState('');
  const [letterOne, setLetterOne] = useState("");
  const [letterTwo, setLetterTwo] = useState("");
  const isAction = (record) => record.key === actionKey;
  const openDrop = (record) => setActionKey(record.key);
  const ref_clients_table_drop = useRef();

  useEffect(() => {
    const handleClick = e => {
      if (!e.target.classList.contains('clients_table_drop')) {
        setActionKey('')
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [setActionKey]);

  // Reset Drop Select
  const [isTopSelectFlag, setTopSelectFlag] = useState('');
  // Reset Drop Select
  const [deleteModal, setDeleteModal] = useState(false);

  const select_items_3 = [
    {
      id: 1,
      options: [
        "Contains",
        "Option 001…",
        "Option 002…",
        "Option 003…",
        "Option 004…",
        "Option 005…",
      ]
    }
  ];

  //   Custom ANT Filter
  const [searchText, setSearchText] = useState('');
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
      total: totalClientsCount,
      showSizeChanger: false
    },
  });

  const refreshTable = () => {
    dispatch(clientsManagementAction({
      pageId: tableParams.pagination.current,
      letterOne,
      letterTwo,
      searchKey: searchText
    }));
  }

  useEffect(() => {
    refreshTable();
  }, [JSON.stringify(tableParams)]);

  useEffect(() => {
    if (tableParams.pagination.current !== 1) {
      setTableParams({
        pagination: {
          ...tableParams.pagination,
          current: 1
        }
      });
    }
    else {
      refreshTable();
    }
  }, [searchText, letterOne, letterTwo]);

  useEffect(() => {
    setTableParams({
      pagination: {
        ...tableParams.pagination,
        total: totalClientsCount
      }
    });
  }, [totalClientsCount]);

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    /* if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    } */
  };

  /* const columns = [
    {
      title: 'Client name',
      dataIndex: 'client',
      key: 'client',
      ...getColumnSearchProps('client'),
    },
    {
      title: 'Client ref no',
      dataIndex: 'reference',
      key: 'reference',
      ...getColumnSearchProps('reference'),
    },
    {
      title: 'Industry / sector',
      dataIndex: 'industry',
      key: 'industry',
      ...getColumnSearchProps('industry'),
    },
    {
      title: 'Surveys',
      dataIndex: 'surveys',
      key: 'surveys',
      ...getColumnSearchProps('surveys'),
    },
    {
      title: 'Number of locations',
      dataIndex: 'locationCount',
      key: 'locationCount',
      ...getColumnSearchProps('locationCount'),
    },
    {
      title: 'Agents',
      dataIndex: 'agents',
      key: 'agents',
      ...getColumnSearchProps('agents'),
    },
    {
      title: 'Number of users',
      dataIndex: 'userCount',
      key: 'userCount',
      ...getColumnSearchProps('userCount'),
    },
    {
      title: 'Action',
      key: 'action',
      width: "80px",
      render: (_, record) => {
        const action = isAction(record);
        return (
          <div className="action_btns">
            <div className={`drop__btn ${action ? " show" : ""} `}>
              <button className="icon__btn" onClick={action ? () => setActionKey('') : () => openDrop(record)}><span ref={ref_clients_table_drop} className="cxv-action-l-icn clients_table_drop"></span></button>
              <div className="drop__menu">
                <ul>
                  <li><Link to="/client-settings">Edit</Link></li>
                  <li><button onClick={() => setDeleteModal(true)}>Delete</button></li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
    },
  ]; */

  const columns = [
    {
      title: "Client ID",
      dataIndex: "client_id",
      key: "client_id"
    },
    {
      title: "Client Name",
      dataIndex: "client_name",
      key: "client_name",
      render: (text) =>
        searchText ? (
          <Highlighter
            highlightStyle={{
              backgroundColor: '#ffc069',
              padding: 0,
            }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ''}
          />
        ) : (
          text
        ),
    },
    {
      title: "Reference Code",
      dataIndex: "reference_code",
      key: "reference_code"
    },
    {
      title: "Survey Name",
      dataIndex: "survey_name",
      key: "survey_name"
    },
  ]

  /* const data = [
    {
      key: 'AB001',
      client: 'Name…',
      reference: 'Filter type…',
      surveys: 'Survey…',
      agents: 'Created at…',
    },
    {
      key: 'AB002',
      client: 'Name…',
      reference: 'Filter type…',
      surveys: 'Survey…',
      agents: 'Created at…',
    },
    {
      key: 'AB003',
      client: 'Name…',
      reference: 'Filter type…',
      surveys: 'Survey…',
      agents: 'Created at…',
    },
    {
      key: 'AB004',
      client: 'Name…',
      reference: 'Filter type…',
      surveys: 'Survey…',
      agents: 'Created at…',
    },
    {
      key: 'AB005',
      client: 'Name…',
      reference: 'Filter type…',
      surveys: 'Survey…',
      agents: 'Created at…',
    },
  ]; */

  return (
    <>
      <DeleteModal visibleDatasetModal={deleteModal} setDeleteModal={setDeleteModal} />
      <LoaderPage />

      <div className="container-fluid">
        <div className="row clearfix top-info">
          <div className="col-lg-12">
            <BreadcrumbDashboard isShow={false} />
            <h1>Client management</h1>
          </div>
        </div>

        <div className="row clearfix">
          <div className="col-lg-12">
            <TopFilter
              setTopSelectFlag={setTopSelectFlag}
              isTopSelectFlag={isTopSelectFlag}
              isClientPage={true}

              // Filter items
              isExport={true}
              isSearchClients={true}
              isSearchAlphabetical={true}
              isCreateNew={true}
              setLetterOne={setLetterOne}
              setLetterTwo={setLetterTwo}
              searchText={searchText}
              setSearchText={setSearchText}
            />
          </div>

          <div className="col-lg-12">
            <div className="n_table has__filter">
              <Table
                columns={columns}
                rowKey={(record) => record.reference_code}
                dataSource={clientList}
                pagination={tableParams.pagination}
                loading={loading}
                onChange={handleTableChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ClientManagementAdmin;