import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../Header";

function Viewmed() {
  const params = useParams();
  const id = params.id;
  const data = useSelector((store) => store.list);
  const val = data.find((item) => item.id == id);
  const [currentDate] = useState(getDate());

  function getDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    return { year, month, date };
  }

  const expiryDate = new Date(val.expiry_date);
  const currentDateObj = new Date();
  const flag = expiryDate > currentDateObj;

  return (
    <Fragment>
      <div className="container-fluid">
        <Header />

        <div className="row mt-3 ">
          <div className="col col-7 pt-3 mx-auto d-block bg-light mt-5 rounded">
            <h2 className="bg-success rounded text-white text-center">
              Details of {val.name}
            </h2>
            {val && (
              <>
                <h5>Name: {val.name}</h5>
                <h5>Company: {val.company}</h5>
                <h5>Today: {currentDate.year}-{currentDate.month}-{currentDate.date}</h5>
                <h5 className={flag ? 'text-success' : 'text-danger'}>
                  Expiry: {val.expiry_date}
                </h5>
              </>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Viewmed;
