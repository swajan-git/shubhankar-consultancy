const OrangeHorizontalLine = ({ center, className }) => {
    return (
        <>
            {center ?
                <div  className={"d-flex justify-content-center " + className}>
                    <br />
                    <div style={{backgroundColor: '#fc5e24'}} className="line2"></div>
                </div> :
                <div  className={"d-flex justify-content-start " + className}>
                    <br />
                    <div style={{backgroundColor: '#fc5e24'}} className="line2"></div>
                </div>
            }
            <style>
                {
                    `
                    .line2 {
                        height: 6px;
                        width: 220px;
                        border-radius: 25px;
                        background-color: #fc5e24
                    }
                    .our-story .line2 {
                        background-color: #fc5e24
                    }
                    footer .line 2{
                        background-color: #fc5e24
                    }
                    `
                }
            </style>
        </>
    );
};
export default OrangeHorizontalLine;