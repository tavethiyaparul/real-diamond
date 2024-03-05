import React, { useEffect, useState } from "react"
import Select, { components, OptionProps } from "react-select"
import { useTable } from "react-table"
import roundshape from "../images/round1.png"
import pearshape from "../images/pear.png"
import ovelshape from "../images/ovel.png"
import marquiseshape from "../images/marquise.png"
import heartshape from "../images/heart.png"
import princessshape from "../images/princess.png"
import emeraldshape from "../images/Emerald.png"
import radiantshape from "../images/radiant.png"
import asschershape from "../images/Asscher.png"
import baguetteshape from "../images/Baguette.jpeg"
import cushionshape from "../images/Cushion.png"
import triangleshape from "../images/Triangle.jpeg"
import { makeApiCall } from "../common/MakeApicall"
import Whatsapp_icon from "../images/ic_whatsapp.svg"

import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import { Button, Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
const Search = () => {
    const [shape, setShape] = useState([])
    const [fromSize, setfromSize] = useState(0)
    const [toSize, setToSize] = useState(0)
    const [color, setColor] = useState([])
    const [clarity, setClarity] = useState([])
    const [fluo, setFluo] = useState([])
    const [grading, setGrading] = useState([])
    const [eyeClean, setEyeClean] = useState()
    const [finish, setFinish] = useState()
    const [cut, setCut] = useState([])
    const [polish, setPolish] = useState([])
    const [sym, setSym] = useState([])
    const [flueColor, setFlueColor] = useState()
    const [location, setLocation] = useState([])
    const navigate = useNavigate()

    //pagination
    const [perPage, setPerPage] = useState(10)
    const [page, setPage] = useState(1)
    const [totalCount, setTotalCount] = useState({
        totalCount: 0,
        resultPerPage: 10,
    })
    let pageDiff = Math.ceil(totalCount.totalCount / totalCount.resultPerPage)

    const [AllDiamond, setDiamond] = useState([])
    const getData = async () => {
        let addQuery = []
        let data = {}

        if (shape.length > 0) {
            data.shape = shape
        }
        if (color.length > 0) {
            data.color = color
        }
        if (clarity.length > 0) {
            data.clarity = clarity
        }
        if (fluo.length > 0) {
            data.fluo = fluo
        }
        if (grading.length > 0) {
            data.lab = grading
        }
        if (cut.length > 0) {
            data.cut = cut
        }
        if (polish.length > 0) {
            data.polish = polish
        }
        if (sym.length > 0) {
            data.sym = sym
        }
        if (location.length > 0) {
            data.location = location
        }
        if (eyeClean) {
            data.eyeClean = eyeClean
        }
        if (fromSize !== 0 && toSize !== 0) {
            data.fromSize = fromSize
            data.toSize = toSize
        }

        await makeApiCall("post", `/diamond?page=${page}&&resultperpage=${perPage}`, data, "raw")
            .then((res) => {
                setDiamond(res?.data?.data?.result)
                setTotalCount({
                    totalCount: res?.data?.data?.totalCount,
                    resultPerPage: res?.data?.data?.resultperpage,
                })
            })
            .catch((error) => {
                console.log("error", error)
            })
    }

    useEffect(() => {
        getData()
    }, [perPage, page])

    const shapeOption = [
        { value: "ROUND", label: "Round", image: roundshape },
        { value: "PEAR", label: "Pear", image: pearshape },
        { value: "OVEL", label: "Ovel", image: ovelshape },
        { value: "MARAUISE", label: "Marquise", image: marquiseshape },
        { value: "HEART", label: "Heart", image: heartshape },
        { value: "RADIANT", label: "Radiant", image: radiantshape },
        { value: "PRINCESS", label: "Princess", image: princessshape },
        { value: "EMERALD", label: "Emerald", image: emeraldshape },
        { value: "ASSCHER", label: "Asscher", image: asschershape },
        { value: "BAGUETTE", label: "Baguette", image: baguetteshape },
        { value: "EMERALD", label: "Emerald", image: emeraldshape },
        { value: "TRIANGLE", label: "Triangle", image: triangleshape },
        { value: "CUSHION", label: "Cushion", image: cushionshape },
        { value: "MARAUISE", label: "Marquise", image: marquiseshape },
    ]

    const fromSizeOption = [
        { value: 0, label: "None" },
        { value: 0.3, label: "0.30" },
        { value: 0.4, label: "0.40" },
        { value: 0.5, label: "0.50" },
        { value: 0.6, label: "0.60" },
        { value: 0.7, label: "0.70" },
        { value: 0.8, label: "0.80" },
        { value: 0.9, label: "0.90" },
        { value: 1.0, label: "1.00" },
        { value: 1.5, label: "1.50" },
        { value: 3.0, label: "3.00" },
        { value: 4.0, label: "4.00" },
        { value: 5.0, label: "5.00" },
        { value: 6.0, label: "6.00" },
        { value: 10.0, label: "10.00" },
    ]

    const toSizeOption = [
        { value: 0, label: "None" },
        { value: 0.39, label: "0.39" },
        { value: 0.49, label: "0.49" },
        { value: 0.59, label: "0.59" },
        { value: 0.69, label: "0.69" },
        { value: 0.79, label: "0.79" },
        { value: 0.89, label: "0.89" },
        { value: 0.99, label: "0.99" },
        { value: 1.49, label: "1.49" },
        { value: 1.99, label: "1.99" },
        { value: 3.99, label: "3.99" },
        { value: 4.99, label: "4.99" },
        { value: 5.99, label: "5.99" },
        { value: 9.99, label: "9.99" },
        { value: 10.99, label: "10.99" },
    ]

    const colorOption = [
        { value: "D", label: "D" },
        { value: "E", label: "E" },
        { value: "F", label: "F" },
        { value: "G", label: "G" },
        { value: "H", label: "H" },
        { value: "I", label: "I" },
        { value: "J", label: "J" },
        { value: "K", label: "K" },
        { value: "L", label: "L" },
        { value: "M", label: "M" },
        { value: "N", label: "N" },
        { value: "O", label: "O" },
        { value: "P", label: "P" },
        { value: "Q", label: "Q" },
        { value: "R", label: "R" },
        { value: "S", label: "S" },
        { value: "T", label: "T" },
        { value: "U", label: "U" },
        { value: "V", label: "V" },
        { value: "W", label: "W" },
        { value: "X", label: "X" },
        { value: "Y", label: "Y" },
        { value: "Z", label: "Z" },
    ]

    const clarityOption = [
        { value: "FL", label: "FL" },
        { value: "IF", label: "IF" },
        { value: "VVS1", label: "VVS1" },
        { value: "VVS2", label: "VVS2" },
        { value: "VS1", label: "VS1" },
        { value: "VS2", label: "VS2" },
        { value: "SI1", label: "SI1" },
        { value: "SI2", label: "SI2" },
        { value: "SI3", label: "SI3" },
        { value: "I1", label: "I1" },
        { value: "I2", label: "I2" },
        { value: "I3", label: "I3" },
    ]

    const fluoOption = [
        { value: "NONE", label: "None" },
        { value: "VSL", label: "Very Slight" },
        { value: "FAINT", label: "Faint" },
        { value: "SL", label: "Slight" },
        { value: "MED", label: "Medium" },
        { value: "STG", label: "Storang" },
        { value: "VST", label: "Very Storang" },
    ]

    const fluocColorOption = [
        { value: "BLUE", label: "Blue" },
        { value: "YELLOW", label: "Yellow" },
        { value: "VG", label: "Very Good" },
    ]
    const gardingOption = [
        { value: "GIA", label: "GIA" },
        { value: "IGI", label: "IGI" },
        { value: "HRD", label: "HRD" },
        { value: "NONCERT", label: "NONCERT" },
    ]

    const eyeCleanOption = [
        { value: "GIA", label: "Yes" },
        { value: "IGI", label: "Borderline" },
        { value: "HRD", label: "El" },
        { value: "NONCERT", label: "E2(No)" },
    ]

    const finishOption = [
        { value: "3X", label: "3X" },
        { value: "EX-", label: "EX-" },
        { value: "VG+", label: "VG+" },
        { value: "VG-", label: "VG-" },
    ]

    const cutOption = [
        { value: "EX", label: "Excellent" },
        { value: "GD", label: "Good" },
        { value: "VG", label: "Very Good" },
    ]

    const polishOption = [
        { value: "EX", label: "Excellent" },
        { value: "GD", label: "Good" },
        { value: "VG", label: "Very Good" },
    ]

    const symOption = [
        { value: "EX", label: "Excellent" },
        { value: "GD", label: "Good" },
        { value: "VG", label: "Very Good" },
    ]

    const flueColorOption = [
        { value: "BLUE", label: "Blue" },
        { value: "YELLOW", label: "Yellow" },
    ]

    const locationOption = [
        { value: "INDIA", label: "India" },
        { value: "HONG KONG", label: "Hong Kong" },
    ]

    const Option = (props) => (
        <components.Option {...props}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <input type="checkbox" checked={props.isSelected} onChange={() => null} style={{ marginRight: "10px" }} />
                <img src={props.data.image} alt={props.label} style={{ marginRight: "10px", width: "30px", height: "30px" }} />
                {props.label}
            </div>
        </components.Option>
    )

    const InputOption = ({ getStyles, Icon, isDisabled, isFocused, isSelected, children, innerProps, ...rest }) => {
        const [isActive, setIsActive] = useState(false)

        const onMouseDown = () => setIsActive(true)
        const onMouseUp = () => setIsActive(false)
        const onMouseLeave = () => setIsActive(false)

        // styles
        let bg = "transparent"
        if (isFocused) bg = "#eee"
        if (isActive) bg = "#B2D4FF"

        const style = {
            alignItems: "center",
            backgroundColor: bg,
            color: "inherit",
            display: "flex ",
        }

        // prop assignment
        const props = {
            ...innerProps,
            onMouseDown,
            onMouseUp,
            onMouseLeave,
            style,
        }

        return (
            <components.Option {...rest} isDisabled={isDisabled} isFocused={isFocused} isSelected={isSelected} getStyles={getStyles} innerProps={props}>
                <input type="checkbox" checked={isSelected} className="me-4" />
                {children}
            </components.Option>
        )
    }

    const columns = React.useMemo(
        () => [
            { Header: "No.", accessor: "SRNo" },
            { Header: "Shape", accessor: "Shape" },
            { Header: "Weight", accessor: "Weight" },
            { Header: "Color", accessor: "Color" },
            { Header: "Clarity", accessor: "Clarity" },
            { Header: "Cut", accessor: "Cut" },
            { Header: "Polish", accessor: "Polish" },
            { Header: "sym", accessor: "Sym" },
            { Header: "Floura", accessor: "Fl" },
            {
                Header: "Price",
                accessor: "-",
                Cell: ({ row }) => {
                    return (
                        <>
                            <a target="_blank" href="https://wa.me/919978227111">
                                Get Price
                                {/* <img src={Whatsapp_icon} /> */}
                            </a>
                        </>
                    )
                },
            },
            { Header: "Lab", accessor: "Lab" },
            { Header: "Location", accessor: "LOCATION" },
            {
                Header: "Action",
                accessor: "",
                Cell: ({ row }) => {
                    console.log("row,", row?.original?._id)
                    return (
                        <div className="d-flex align-items-center ">
                            <button
                                type="button"
                                className="fa fa-eye"
                                aria-hidden="true"
                                style={{
                                    color: "#5d78ff",
                                    backgroundColor: "transparent",
                                    border: "none",
                                    fontSize: "25px",
                                }}
                                onClick={() => navigate(`/diamond/${row?.original?._id}`)}
                            ></button>
                        </div>
                    )
                },
            },
        ],
        []
    )

    //table
    const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({
        columns,
        data: AllDiamond ? AllDiamond : [],
    })
    return (
        <div className="p-4">
            <div className="align-item-center">
                <h2 className="text-center p-2">Fast Diamond Search</h2>
            </div>
            {/* <h3>
                Search Over <span>1,000,000</span> Diamonds from Thousands of Verified Suppliers Worldwide!
            </h3> */}
            {/* 1 */}
            <div class="grid-wrapper text-center panel panel-blue">
                <div class="g-item ">
                    <div className="filterGridItm">
                        <span className="fs-5 text-start">Shape</span>
                        <div className="w-100">
                            <Select
                                defaultValue={[]}
                                isMulti
                                closeMenuOnSelect={false}
                                hideSelectedOptions={false}
                                options={shapeOption}
                                components={{
                                    Option,
                                }}
                                onChange={(options) => {
                                    if (Array.isArray(options)) {
                                        setShape(options.map((opt) => opt.value))
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="g-item ">
                    <div className="d-flex align-items-center">
                        <span className="fs-5 pe-3">Size</span>
                        <div>
                            <Select
                                defaultValue={[]}
                                options={fromSizeOption}
                                width={200}
                                onChange={(selectedOption) => {
                                    setfromSize(selectedOption.value)
                                }}
                            />
                        </div>
                        -
                        <div>
                            <Select
                                defaultValue={[]}
                                options={toSizeOption}
                                onChange={(selectedOption) => {
                                    setToSize(selectedOption.value)
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div class="g-item ">
                    <div className="d-flex align-items-center">
                        <span className="fs-5 pe-3">GradingReport</span>
                        <div className="w-100">
                            <Select
                                defaultValue={[]}
                                isMulti
                                closeMenuOnSelect={false}
                                hideSelectedOptions={false}
                                options={gardingOption}
                                components={{
                                    Option: InputOption,
                                }}
                                onChange={(options) => {
                                    if (Array.isArray(options)) {
                                        setGrading(options.map((opt) => opt.value))
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* 2 */}
            <div class="grid-wrapper text-center panel panel-blue ">
                <div class="g-item ">
                    <div className="d-flex align-items-center ">
                        <span className="fs-5 pe-3">ColorWhite</span>
                        <div className="w-100 ">
                            <Select
                                defaultValue={[]}
                                isMulti
                                closeMenuOnSelect={false}
                                hideSelectedOptions={false}
                                options={colorOption}
                                components={{
                                    Option: InputOption,
                                }}
                                onChange={(options) => {
                                    if (Array.isArray(options)) {
                                        setColor(options.map((opt) => opt.value))
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div class="g-item">
                    <div className="d-flex align-items-center">
                        <span className="fs-5 pe-3">Clarity</span>
                        <div className="w-100 ">
                            <Select
                                defaultValue={[]}
                                isMulti
                                closeMenuOnSelect={false}
                                hideSelectedOptions={false}
                                options={clarityOption}
                                components={{
                                    Option: InputOption,
                                }}
                                onChange={(options) => {
                                    if (Array.isArray(options)) {
                                        setClarity(options.map((opt) => opt.value))
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div class="g-item ">
                    <div className="d-flex align-items-center">
                        <span className="fs-5  pe-3">EyeClean</span>
                        <div className="w-100 ">
                            <Select
                                defaultValue={[]}
                                closeMenuOnSelect={false}
                                hideSelectedOptions={false}
                                options={eyeCleanOption}
                                onChange={(selectedOption) => {
                                    setEyeClean(selectedOption.value)
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* 3 */}
            <div class="grid-wrapper text-center panel panel-blue">
                <div class="g-item ">
                    <div className="d-flex align-items-center ">
                        <span className="fs-5 pe-3">Cut</span>
                        <div className="w-100 ">
                            <Select
                                defaultValue={[]}
                                isMulti
                                closeMenuOnSelect={false}
                                hideSelectedOptions={false}
                                options={cutOption}
                                components={{
                                    Option: InputOption,
                                }}
                                onChange={(options) => {
                                    if (Array.isArray(options)) {
                                        setCut(options.map((opt) => opt.value))
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="g-item ">
                    <div className="d-flex align-items-center ">
                        <span className="fs-5 pe-3">Polish</span>
                        <div>
                            <div className="w-100 ">
                                <Select
                                    defaultValue={[]}
                                    isMulti
                                    closeMenuOnSelect={false}
                                    hideSelectedOptions={false}
                                    options={polishOption}
                                    components={{
                                        Option: InputOption,
                                    }}
                                    onChange={(options) => {
                                        if (Array.isArray(options)) {
                                            setPolish(options.map((opt) => opt.value))
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="g-item ">
                    <div className="d-flex align-items-center ">
                        <span className="fs-5 pe-3">symmetry</span>
                        <div>
                            <div className="w-100 ">
                                <Select
                                    defaultValue={[]}
                                    isMulti
                                    closeMenuOnSelect={false}
                                    hideSelectedOptions={false}
                                    options={symOption}
                                    components={{
                                        Option: InputOption,
                                    }}
                                    onChange={(options) => {
                                        if (Array.isArray(options)) {
                                            setSym(options.map((opt) => opt.value))
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4 */}
            <div class="grid-wrapper text-center panel panel-blue">
                <div class="g-item ">
                    <div className="d-flex align-items-center ">
                        <span className="fs-5 pe-3">Fluorescence</span>
                        <div className="w-100 ">
                            <Select
                                defaultValue={[]}
                                isMulti
                                closeMenuOnSelect={false}
                                hideSelectedOptions={false}
                                options={fluoOption}
                                components={{
                                    Option: InputOption,
                                }}
                                onChange={(options) => {
                                    if (Array.isArray(options)) {
                                        setFluo(options.map((opt) => opt.value))
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="g-item ">
                    <div className="d-flex align-items-center ">
                        <span className="fs-5 pe-3">Fl. Color</span>
                        <div>
                            <div className="w-100 ">
                                <Select
                                    defaultValue={[]}
                                    isMulti
                                    closeMenuOnSelect={false}
                                    hideSelectedOptions={false}
                                    options={flueColorOption}
                                    components={{
                                        Option: InputOption,
                                    }}
                                    onChange={(options) => {
                                        if (Array.isArray(options)) {
                                            setFlueColor(options.map((opt) => opt.value))
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="g-item ">
                    <div className="d-flex align-items-center ">
                        <span className="fs-5 pe-3">Location</span>
                        <div>
                            <div className="w-100 ">
                                <Select
                                    defaultValue={[]}
                                    isMulti
                                    closeMenuOnSelect={false}
                                    hideSelectedOptions={false}
                                    options={locationOption}
                                    components={{
                                        Option: InputOption,
                                    }}
                                    onChange={(options) => {
                                        if (Array.isArray(options)) {
                                            setLocation(options.map((opt) => opt.value))
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="position-relative p-2">
                <Button
                    variant="primary"
                    type="button"
                    onClick={() => {
                        getData()
                    }}
                  className="position-absolute top-0 end-0 w-30" 
                >
                    Result
                </Button>
            </div>

            <div className="table-responsive p-1 mt-5">
                    <table id="kt_table_users" className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer" {...getTableProps()}>
                        <thead>
                            <tr className="text-start fw-bold fs-6 text-uppercase gs-0 border " style={{ backgroundColor: "lightgrey" }}>
                                {headers.map((column) => (
                                    <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="text fw border" {...getTableBodyProps()}>
                            {rows.length > 0 ? (
                                rows.map((row, i) => {
                                    prepareRow(row)
                                    return (
                                        <tr
                                            {...row.getRowProps()}
                                            style={{
                                                backgroundColor: i % 2 === 0 ? "#f5f5f5" : "#fff",
                                            }}
                                        >
                                            {row.cells.map((cell) => {
                                                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                            })}
                                        </tr>
                                    )
                                })
                            ) : (
                                <tr>
                                    <td colSpan={7}>
                                        <div className="d-flex text-center w-100 align-content-center justify-content-center">No matching records found</div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            <div>
                {AllDiamond?.length > 0 ? (
                    <div className="d-flex justify-content-end align-items-center">
                        <div className="w-70px mt-3 mx-2">
                            <select
                                name="perpage"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Latest"
                                className="form-select form-select-white form-select-sm mb-3"
                                defaultValue="10"
                                onChange={(e) => {
                                    setPage(1)
                                    setPerPage(e.target.value)
                                }}
                            >
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                                <option value={50}>50</option>
                            </select>
                        </div>
                        <p className="ms-1 mt-3 mx-7">per page</p>
                        <div className="d-flex align-items-center me-10 ">
                            <Button
                                type="button"
                                disabled={page <= 1 ? true : false}
                                className="glyphicon glyphicon-chevron-right p-2"
                                onClick={() => {
                                    setPage(page - 1)
                                }}
                            >
                                Prev
                            </Button>
                            <p className="mx-3 mt-3">{page}</p>
                            <Button
                                type="button"
                                disabled={page <= pageDiff - 1 ? false : true}
                                className="glyphicon glyphicon-chevron-left p-2"
                                onClick={() => {
                                    setPage(page + 1)
                                }}
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                ) : (
                    ""
                )}

                
            </div>
        </div>
    )
}

export default Search
