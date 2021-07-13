
const ModernServiceCard = ({ data }) => {
    return (
        <>
            <div className="new-service-card mb-4 p-3">
                <div className="row d-flex align-items-center">
                    <div className="col-md-9 py-3">
                        <h3>{data.title} </h3>
                        <p className="font-14">{data.text} </p>
                    </div>
                    <div className="col-md-3">
                        <img src={data.icon} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModernServiceCard;