const SimpleCardOne = ({ data }) => {
    return (
        <>
            <div className="simple-card py-5 px-4">
                <h5 className="font-bold">{data.title}</h5>
                <p className="mt-3">{data.text} </p>
            </div>
        </>
    )
}
export default SimpleCardOne;