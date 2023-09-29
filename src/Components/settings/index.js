import React, { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
const Setting = () => {

    const dataInit = {
        isHacker: true,
        isAdvisor: true,
        hasProject: true,
    }

    const list = [
        {
            key: "isHacker",
            cls: '',
            title: "Is Hacker",
        },
        {
            key: 'isAdvisor',
            cls: 'row-1',
            title: "Is Advisor"
        },
        {
            key: 'hasProject',
            cls: '',
            title: "Has Project"
        },
    ]

    const [isShow, setIsShow] = useState(false)
    const [mouse, setMouse] = useState({
        x: 0,
        y: 0
    })
    const [userData, setUserData] = useState(dataInit)
    const [curData, setCurData] = useState({})
    const handleToggle = (event, data) => {
        setCurData(data)
        setIsShow(false)
        setMouse({
            x: event.pageX,
            y: event.pageY,
        })
        setIsShow(false)
        setTimeout(() => {
            setIsShow(true)
        }, 100)
    }

    const handleSelectOption = (pyload, isValue) => {
        setUserData({
            ...userData,
            [pyload]: isValue
        })
    }


    const handleUpdate = async () => {
        console.log(userData)
    }

    return (
        <div className='setting py-4'>
            <div className="setting-list">
                <table>
                    <thead>
                        <tr className='row-1'>
                            <th>Heading</th>
                            <th>Eligibility</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list?.map((item, keys) => {
                                return <tr className={item?.cls} key={keys}>
                                    <td>{item?.title}</td>
                                    <td className='toggle_td'>
                                        <button className="btn display" onClick={(event) => { handleToggle(event, item) }}>
                                            <span>{userData[item?.key] ? "Yes" : "No"}</span>
                                            <IoMdArrowDropdown />
                                        </button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                {
                    isShow && <div className="toggle-btn-box" onClick={() => setIsShow(false)}>
                        <div className="togggle-option" style={{ left: `${mouse.x}px`, top: `${mouse.y}px` }}>
                            <button className='btn btn-primary' onClick={() => handleSelectOption(curData?.key, true)}>Yes</button>
                            <button className='btn btn-primary mt-2' onClick={() => handleSelectOption(curData?.key, false)}>No</button>
                        </div>
                    </div>
                }
            </div>
            <div className="py-4 d-flex justify-content-end">
                <button className='btn btn-primary' onClick={handleUpdate}>Update</button>
            </div>
        </div>
    )
}

export default Setting
