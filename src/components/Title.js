import React from 'react';

const Title = ({ failedCounter, score, total, seconds }) => {
  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    <>
      <div className="row">
        <div className="col-lg-9">
          <div className="row ">
            <div className="col-lg-12">
              <h1>The Memory Game</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <span>Failed Attempts: {failedCounter}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <span>
                Score: {score} / {total}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">{seconds} seconds</div>
          </div>
        </div>
        <div className="col-lg-2 h-100 my-auto text-right">
          <button className="btn btn-light form-control" onClick={refreshPage}>
            Reset
          </button>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Title;
