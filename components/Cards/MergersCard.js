import { FiChevronRight } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";

const MergersCard = ({ data, alter, text }) => {
    return (
        <>
            {!alter ? <div className="mergers-card px-4 py-4">
                <h5 className="font-bold mt-2 pr-5">{data.title}</h5>
                <p className="mt-4 mb-5">{data.text} </p>
                <div className="dot-lg"></div>
                <div className="font-26 chevron-container">
                    <FaChevronRight />
                </div>
            </div> :
                <div className="mergers-card px-4 pb-5 py-4">
                    <h5 className="font-weight-600 font-26 mt-2 pr-5">{text}</h5>
                    <div className="dot-lg"></div>
                </div>
            }
        </>
    );
};

export default MergersCard;