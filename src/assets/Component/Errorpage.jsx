import React from 'react';


    const Errorpage = ({ onReportClick, ...props }) => {
        return (
            <>
                <div className="row mb-3">
                    <div className="col-12 text-center">
                        <h1 className="display-4">
                            An error has been encountered.
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 text-center">
                        <button
                            className="btn btn-lg btn-outline-info"
                            onClick={onReportClick}>
                            Report feedback
                        </button>
                    </div>
                    <div className="col-6 text-center">
                        <a
                            href={process.env.REACT_APP_ENVIRONMENT_URL}
                            className="btn btn-lg btn-outline-info">
                            Go back to the worklist
                        </a>
                    </div>
                </div>
            </>
        );
    };

export default Errorpage;