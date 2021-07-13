const HorizontalLine = ({ center, className }) => {
    return (
        <>
            {center ?
                <div class={"d-flex justify-content-center " + className}>
                    <br />
                    <div className="line"></div>
                </div> :
                <div class={"d-flex justify-content-start " + className}>
                    <br />
                    <div className="line"></div>
                </div>
            }
            <style>
                {
                    `
                    .line {
                        height: 6px;
                        width: 90px;
                        border-radius: 25px;
                        background: linear-gradient(to right, #040826, #fc5e24);
                        // background: linear-gradient(15deg, #040826, #545b8f);
                    }
                    .our-story .line {
                        background: linear-gradient(15deg, #545b8f, #bebebe);
                    }
                    footer .line {
                        background: linear-gradient(15deg, #545b8f, #bebebe);
                    }
                    `
                }
            </style>
        </>
    );
};
export default HorizontalLine;