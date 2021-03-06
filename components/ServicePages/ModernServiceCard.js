
const ModernServiceCard = ({ data, textR, br, reverse }) => {
    return (
        <>

            <div className={`new-service-card mb-4 p-3 ${br ? 'border-right': 'border-left'}`}>
                <div className="row d-flex align-items-center">
                    <div className={`col-9 py-3 order-md-${reverse ? 2 : 1} ${textR ? "text-right" : "text-left"}`}>
                        <h3>{data.title} </h3>
                        <p className="font-14">{data.text} </p>
                    </div>
                    <div className={`col-3 order-md-${reverse ? 1 : 2}`} >
                        <img src={data.icon} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
 
        </>
    );
};

export default ModernServiceCard;