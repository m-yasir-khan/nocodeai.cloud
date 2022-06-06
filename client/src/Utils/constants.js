import {
    AiOutlineDown,
    AiOutlineUser,
    AiOutlineSetting,
    AiOutlineDelete,
    AiOutlineEdit,
    AiOutlineCheckCircle,
    AiOutlineSplitCells,
    AiOutlineUpload,
    AiOutlineArrowRight,
    AiOutlineArrowLeft,
    AiOutlineArrowDown,
    AiOutlineArrowUp,
    AiTwotoneStar,
    AiOutlineDownload,
    AiOutlineMail,
    AiFillStar,
    AiOutlineDatabase,
    AiOutlinePhone,
    AiOutlineInbox,
    AiOutlineWarning,
    AiOutlineRedo,
    AiOutlineZoomIn,
    AiOutlineZoomOut
} from 'react-icons/ai';
import axios from 'axios';


import {
    TiStarburstOutline
} from 'react-icons/ti';

import {
    RiStackOverflowLine,
    RiOrganizationChart,
    RiNotificationBadgeLine
} from 'react-icons/ri';

import {
    SiOpslevel,
    SiGooglecloud,
    SiMysql,
    SiMicrosoftazure,
    SiPostgresql,
    SiMongodb,
    SiOracle
} from 'react-icons/si';

import {
    MdOutlineLink,
    MdOutlineArrowDropDownCircle,
    MdToggleOn,
    MdUnsubscribe,
    MdPublish,
    MdOutlineInventory,
    MdOutlineTagFaces,
    MdKeyboardArrowDown,
    MdKeyboardArrowUp,
    MdSettingsSuggest,
    MdOutlineWorkOutline
} from 'react-icons/md'

import {
    CgShapeCircle,
    CgArrowsExchange,
    CgTab,
    CgRemove,
    CgLoadbar
} from 'react-icons/cg';

import {
    FaFont,
    FaRegSquare,
    FaRegListAlt,
    FaRegWindowMaximize,
    FaHeading,
    FaDatabase,
    FaGripLines,
    FaLink,
    FaLaptop,
    FaFax
} from 'react-icons/fa';

import {
    FiAlertCircle,
    FiEdit
} from 'react-icons/fi';

import {
    BsArrowsExpand,
    BsTextareaT,
    BsCodeSlash,
    BsCardImage,
    BsImages,
    BsFileArrowDownFill,
    BsDiamondFill,
    BsStopCircleFill,
    BsBoxArrowUpRight,
    BsDiamond,
    BsCalendarDate,
    BsSquareHalf,
    BsArrowLeftRight,
    BsTriangle,
    BsHexagon,
    BsKanban,
    BsStackOverflow,
    BsEyeglasses
} from 'react-icons/bs';

import {
    BiRadioCircleMarked,
    BiRectangle,
    BiCylinder,
    BiCircle,
    BiTimeFive
} from 'react-icons/bi';

import {
    VscDebugStart,
    VscEditorLayout,
    VscArrowRight
}
    from 'react-icons/vsc';
import {
    DiDatabase,
    DiMysql
}
    from "react-icons/di";
import {
    GiLogicGateAnd,
    GiLogicGateOr,
    GiResize,
    GiCommercialAirplane,
    GiCargoShip,
    GiForklift,
    GiTruck
}
    from 'react-icons/gi';
import {
    ImLoop
}
    from 'react-icons/im'


import { GrMysql } from "react-icons/gr";
// db_Connection
export function postApi(data) {
    axios.post("http://localhost:4000/connection/auth_connection", data)
        .then((res) => {
            console.log(res?.data?.msg)
            console.log(res,"waesdfghfdsadfsghf")
        }).catch((error) => {
            console.log(error,"Error")
        })
}
// LOGO
const logo = "https://nocodeai.cloud/wp-content/uploads/2022/04/nocode-main-logo-300x41.png";
const constants = {
    logo,
    FaLaptop,
    AiOutlineDatabase,
    AiOutlineDown,
    AiOutlineUser,
    AiOutlineDelete,
    AiOutlineSetting,
    AiOutlineUpload,
    AiFillStar,
    FaFont,
    FaRegSquare,
    FaRegListAlt,
    FaLink,
    FaRegWindowMaximize,
    FaHeading,
    FaDatabase,
    FaGripLines,
    BsArrowsExpand,
    BsTextareaT,
    BsCodeSlash,
    BsCardImage,
    BsFileArrowDownFill,
    BsBoxArrowUpRight,
    BsCalendarDate,
    BiRadioCircleMarked,
    BiRectangle,
    AiOutlineEdit,
    AiOutlineCheckCircle,
    AiOutlineSplitCells,
    CgShapeCircle,
    CgArrowsExchange,
    CgTab,
    CgRemove,
    MdOutlineLink,
    MdSettingsSuggest,
    MdKeyboardArrowDown,
    MdKeyboardArrowUp,
    FiAlertCircle,
    FiEdit,
    VscEditorLayout,
    MdOutlineArrowDropDownCircle,
    MdToggleOn,
    AiOutlineArrowRight,
    AiOutlineArrowLeft,
    AiOutlineArrowDown,
    AiOutlineArrowUp,
    AiTwotoneStar,
    VscDebugStart,
    BsDiamondFill,
    BsStopCircleFill,
    AiOutlineDownload,
    AiOutlineMail,
    GiLogicGateAnd,
    GiLogicGateOr,
    MdUnsubscribe,
    MdPublish,
    GiResize,
    GiCommercialAirplane,
    GiCargoShip,
    GiForklift,
    TiStarburstOutline,
    GiTruck,
    MdOutlineInventory,
    RiStackOverflowLine,
    SiOpslevel,
    BiCylinder,
    BsDiamond,
    BiCircle,
    BiTimeFive,
    RiOrganizationChart,
    RiNotificationBadgeLine,
    BsSquareHalf,
    BsArrowLeftRight,
    CgLoadbar,
    MdOutlineTagFaces,
    BsTriangle,
    ImLoop,
    BsHexagon,
    BsImages,
    DiDatabase,
    DiMysql,
    SiMysql,
    SiGooglecloud,
    SiMicrosoftazure,
    SiPostgresql,
    SiMongodb,
    SiOracle,
    GrMysql,
    MdOutlineWorkOutline,
    AiOutlinePhone,
    FaFax,
    AiOutlineInbox,
    VscArrowRight,
    AiOutlineWarning,
    BsKanban,
    BsStackOverflow,
    VscArrowRight,
    AiOutlineRedo,
    BsEyeglasses,
    AiOutlineZoomIn,
    AiOutlineZoomOut
}

export { constants }