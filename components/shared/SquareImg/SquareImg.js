import styles from "./squareImg.module.css"

const SquareImg = ({img, height, width}) => {
    return (
        <>
            <div className="w-100 square-img">

            </div>
            <style jsx>
                {`
                .square-img{
                    background-image: url(${img});
                    height: ${height? height : '100px'};
                    width: ${width? width : '100%'};
                    background-size: cover;
                    background-position: center center;
                    border: 1px solid rgba(128, 128, 128, 0.3);
                }`}
            </style>
        </>
    );
};

export default SquareImg;