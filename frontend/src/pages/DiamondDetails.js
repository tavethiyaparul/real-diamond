import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { makeApiCall } from "../common/MakeApicall"

const DiamondDetails = () => {
    const { id } = useParams()
    const [diamond, setDiamond] = useState({})
    const [flag, setFlag] = useState(true)

    const getData = async () => {
        await makeApiCall("get", `/diamond/${id}`, "", "raw")
            .then((res) => {
                console.log(res)
                setDiamond(res?.data?.result)
            })
            .catch((error) => {
                console.log("error", error)
            })
    }

    useEffect(() => {
        getData()
    }, [flag])

    console.log("diamond?.Photo", diamond?.Photo, diamond?.VideoLink)
    // Now you can use the 'id' parameter in your component
    return (
        <>
            <section class="stone-details section-padding first-section row justify-content-center">
                <div class="col-md-10 col-xs-12">
                    <div class="container">
                        {/* <div class="diamond-media card-box"> */}
                            {/* <div class="details-header">:: Diamond Media ::</div>
                            {flag ? (
                                <div class="media-option-view video active">
                                    <iframe width="100%" height="570" id="d-iframe" frameborder="0" src={diamond?.VideoLink}></iframe>
                                </div>
                            ) : (
                                <div class="media-option-view image">
                                    <img src={diamond.Photo ? diamond.Photo : ""} />
                                </div>
                            )} */}
                            {/* <div class="media-option-view video active">
                                <iframe width="100%" height="570" id="d-iframe" frameborder="0" src={diamond?.VideoLink}></iframe>
                            </div>
                            <div class="media-option-view image">
                                <img src={diamond.Photo} />
                            </div> */}

                            {/* <div class="diamond-media-options" id="media-selection">
                                <i class="fa fa-video-camera fa-3x active" data-value="video" onClick={() => setFlag(true)}></i>
                                <i class="fa fa-image fa-3x" data-value="image" onClick={() => setFlag(false)}></i>
                            </div> */}
                        {/* </div> */}
                        <div class="stone-data card-box">
                            <div class="details-header"> Diamond Details </div>
                            {/* <!--                <div class="row ">-->
<!--                    <div class="col-md-6 col-sm-6 col-xs-6">-->
<!--                        <p class="sd-table-title ml-2 text-right text-lg">Stone ID</p>-->
<!--                    </div>-->
<!--                    <div class="col-md-6 col-sm-6 col-xs-6">-->
<!--                        <p class="sd-table-detail"></p>-->
<!--                    </div>-->
<!--                </div>--> */}
                            <table class="sd-stone-details-table table-striped table">
                                {/* <!--                        <tr>-->
                    <!--                            <td colspan="2" class="sd-table-title">Status</td>-->
                    <!--                            <td colspan="2" class="sd-table-detail sd-text-red">Available</td>-->
                    <!--                        </tr>--> */}

                                <tbody>
                                    <tr>
                                        <td class="sd-table-title">Diamond</td>
                                        <td class="sd-table-detail">
                                            577-7A <small>(Non Certi)</small>
                                        </td>
                                        <td class="sd-table-title">Rap Rate</td>
                                        <td class="sd-table-detail"> {/* {diamond?.Rap - price} ( {diamond?.["Rap%"]}% Off) */}</td>
                                    </tr>
                                    <tr>
                                        <td class="sd-table-title">Shape</td>
                                        <td class="sd-table-detail">{diamond?.Shape}</td>
                                        <td class="sd-table-title">Price (per carat)</td>
                                        <td class="sd-table-detail">
                                            {" "}
                                            <a target="_blank" href="https://wa.me/919978227111">
                                                Get Price
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="sd-table-title">Carat</td>
                                        <td class="sd-table-detail">{diamond?.Weight}</td>
                                        <td class="sd-table-title">Stone Price</td>
                                        <td class="sd-table-detail">12300.49 </td>
                                    </tr>
                                    <tr>
                                        <td class="sd-table-title">Color</td>
                                        <td class="sd-table-detail">{diamond?.Color}</td>
                                        <td class="sd-table-title">Fluorescence</td>
                                        <td class="sd-table-detail">{diamond?.Fl}</td>
                                    </tr>
                                    <tr>
                                        <td class="sd-table-title">Clarity</td>
                                        <td class="sd-table-detail">{diamond?.Clarity}</td>
                                        <td class="sd-table-title">Brown</td>
                                        <td class="sd-table-detail"></td>
                                    </tr>
                                    <tr>
                                        <td class="sd-table-title">Cut</td>
                                        <td class="sd-table-detail">{diamond?.Cut}</td>
                                        <td class="sd-table-title">Milky</td>
                                        <td class="sd-table-detail">{diamond?.Milky}</td>
                                    </tr>
                                    <tr>
                                        <td class="sd-table-title">Polish</td>
                                        <td class="sd-table-detail">{diamond?.Polish}</td>
                                        <td class="sd-table-title">Eye Clean</td>
                                        <td class="sd-table-detail"></td>
                                    </tr>
                                    <tr>
                                        <td class="sd-table-title">Symmetry</td>
                                        <td class="sd-table-detail">{diamond?.Sym}</td>
                                        <td class="sd-table-title">Key To Symbol</td>
                                        <td class="sd-table-detail"> </td>
                                    </tr>
                                    <tr>
                                        <td class="sd-table-title">Certificate No.</td>
                                        <td class="sd-table-detail"> {diamond?.Lab}</td>
                                        <td class="sd-table-title">Measurement</td>
                                        <td class="sd-table-detail">
                                            {diamond?.Length}* {diamond?.width} * {diamond?.Depth}{" "}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="sd-stone-details-table table-striped table ">
                                <tbody>
                                    <tr>
                                        <td class="sd-table-title">Black Table</td>
                                        <td class="sd-table-detail">BCRL1</td>
                                        <td class="sd-table-title">White Table</td>
                                        <td class="sd-table-detail">FR2 SPR1 C</td>
                                    </tr>
                                    <tr>
                                        <td class="sd-table-title">Black Crown</td>
                                        <td class="sd-table-detail">BCRL1 </td>
                                        <td class="sd-table-title">White Crown</td>
                                        <td class="sd-table-detail">FR2 CRL2</td>
                                    </tr>
                                    <tr>
                                        <td class="sd-table-title">Table Open</td>
                                        <td class="sd-table-detail"> </td>
                                        <td class="sd-table-title">Crown Open</td>
                                        <td class="sd-table-detail"></td>
                                    </tr>
                                    <tr>
                                        <td class="sd-table-title">Depth %</td>
                                        <td class="sd-table-detail">{diamond?.TD}</td>
                                        <td class="sd-table-title">Table %</td>
                                        <td class="sd-table-detail">{diamond?.TA}</td>
                                    </tr>
                                    <tr>
                                        <td class="sd-table-title">Cr Ang</td>
                                        <td class="sd-table-detail">{diamond?.["Crn Ag"]}</td>
                                        <td class="sd-table-title">Pav Ang</td>
                                        <td class="sd-table-detail">{diamond?.["Pav Ag"]}</td>
                                    </tr>
                                    <tr>
                                        <td class="sd-table-title">Cr Height</td>
                                        <td class="sd-table-detail">{diamond?.["Crn Ht"]}</td>
                                        <td class="sd-table-title">Pav Height</td>
                                        <td class="sd-table-detail">{diamond?.["Pav Dp"]}</td>
                                    </tr>
                                    <tr>
                                        <td class="sd-table-title">HNA</td>
                                        <td class="sd-table-detail"></td>
                                        <td class="sd-table-title">Ratio</td>
                                        <td class="sd-table-detail">0.00</td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* <div class=" text-center">
                                <div class="sd-table-title mb-2"> Sharing and Downloading</div>
                                <div class="diamond-media-options download-options">
                                    <a>
                                        <i id="diamond-video-link" data-url="https://sundiam.co.in/view.php?d=577-7A">
                                            {" "}
                                            <span class="fa fa-share fa-1x active"></span> Video <span class="fa fa-file-video-o fa-1x active"></span>{" "}
                                        </i>
                                    </a>
                                </div>
                            </div>{" "} */}
                        </div>
                    </div>
                </div>

                <div class="clearfix"></div>
            </section>
        </>
    )
}

export default DiamondDetails
