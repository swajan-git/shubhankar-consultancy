import { Spinner } from 'react-bootstrap';

const SectionSpinner = () => {
    return (
        <>
            <div className="text-center py-5 my-5">
                <div className="py-5">
                    <Spinner variant="primary" />
                </div>
            </div>
        </>
    );
};

export default SectionSpinner;