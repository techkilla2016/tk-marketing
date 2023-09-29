import { Row, Col } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { LuLayoutDashboard } from 'react-icons/lu'
// import paginationFactory from 'react-bootstrap-table2-paginator';
import paginationFactory, { PaginationProvider, PaginationTotalStandalone, PaginationListStandalone } from 'react-bootstrap-table2-paginator';
import axios from 'axios';
const { SearchBar } = Search;
const columns = [
    {
        dataField: 'id',
        text: 'ID'
    }, {
        dataField: 'name',
        text: 'Name'
    }, {
        dataField: 'email',
        text: 'Email'
    }, {
        dataField: 'phone',
        text: 'Phone No.'
    },  {
        dataField: 'country',
        text: 'Country'
    }, {
        dataField: 'company',
        text: 'Company'
    }, {
        dataField: 'job',
        text: 'Job'
    },
    {
        dataField: 'utm_campaign',
        text: 'UTM Campaign'
    },
    {
        dataField: 'utm_medium',
        text: 'UTM Medium'
    },
    {
        dataField: 'utm_source',
        text: 'UTM Source'
    },
];

const Dashbord = () => {
    const [products, setProducts] = useState([])
    const options = {
        // sizePerPageRenderer,
        custom: true,
        totalSize: products.length
    };

    useEffect(() => {
        axios.get(`https://techkilla-server.vercel.app/qr-solution`).then(res => {
            const data = res?.data?.data?.map((item, index) => {
                return {
                    ...item,
                    id: index + 1
                }
            })
            setProducts(data)
        }).catch(error => {
            console.log(error)
        })
    }, [])
    return (
        <>
            <ToolkitProvider keyField="id" data={products} columns={columns} search >
                {
                    props => {
                        return < div >
                            <header>
                                <div className="header d-flex justify-content-between align-items-center">
                                    <div className="Heading d-flex align-items-center">
                                        <strong className='px-3'>
                                            <span><LuLayoutDashboard /></span>
                                            <span className='px-2'>Dashboard</span>
                                        </strong>
                                    </div>
                                    <SearchBar {...props.searchProps} />
                                </div>
                            </header>
                            <div className="mt-4">
                                <PaginationProvider pagination={paginationFactory(options)}>
                                    {
                                        ({ paginationProps, paginationTableProps }) => (
                                            <div>
                                                <PaginationTotalStandalone
                                                    {...paginationProps}
                                                />
                                                <div className="my-2">
                                                    <BootstrapTable
                                                        keyField="id"
                                                        data={products}
                                                        columns={columns}
                                                        {...paginationTableProps}
                                                    />
                                                </div>
                                                {
                                                    products?.length > 10 ? <PaginationListStandalone
                                                        {...paginationProps}
                                                    /> : ''
                                                }
                                            </div>
                                        )
                                    }
                                </PaginationProvider>
                            </div>
                        </div>
                    }
                }
            </ToolkitProvider >
        </>
    )
}

export default Dashbord
