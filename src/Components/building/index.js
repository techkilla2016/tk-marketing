"use client"
import { Row, Col } from 'react-bootstrap'
import React from 'react'
import { building } from '@/data/building'
import { BsCalendarMonth } from 'react-icons/bs'
import { HiMiniBuildingOffice2 } from 'react-icons/hi2'
import Link from 'next/link'
const Building = ({ city }) => {
    return (
        <Row className='py-5'>
            {
                building?.map((curItem, keys) => {
                    if(curItem.city == city)
                    {
                    return (
                        <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12} key={keys} className='mb-5 pb-4'>
                            <div className="col-inner px-3">
                                <div className="col-main py-3 d-flex align-item-center justify-content-between">
                                    <div className="icon-box">
                                        <div className="icon" style={{ background: curItem?.bg }}>
                                            <HiMiniBuildingOffice2 />
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <span><HiMiniBuildingOffice2 /></span>
                                        <Link href={`/dashbord/${city}/${curItem?.heading}/`}>{curItem?.heading}</Link>
                                    </div>
                                </div>
                                <div className="col-footer py-3">
                                    <div className="icon">
                                        <span><BsCalendarMonth /></span>
                                        <span className='px-2'>{curItem?.date}</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    )
                }})
            
            }
        </Row >
    )
}

export default Building
