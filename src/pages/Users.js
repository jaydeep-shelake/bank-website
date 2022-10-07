import React from "react";
import { useState, useEffect } from "react";
import { API_URL } from "../global";
import { AiFillEdit } from "react-icons/ai";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
const axios = require("axios");
const Users = () => {
  const [finalData, setFinalData] = useState([]);
  const [userName, setUserName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [balance, setBalance] = useState("");
  const [deduction, setDeduction] = useState("");
  const [interest, setInterest] = useState("");
  const [install, setInstall] = useState("");
  const [id, setId] = useState("");

  const fetchSupplierList = () => {
    let url = API_URL;
    const query = `SELECT * FROM sheet1 ORDER BY name,year,STR_TO_DATE(CONCAT('0001', month, '01'), '%Y %M %d') ASC`;
    let data = { crossDomain: true, crossOrigin: true, query: query };
    axios
      .post(url, data)
      .then((res) => {
        console.log("supplier data: ", res.data);
        setFinalData(res.data);
      })
      .catch((err) => {
        console.log("id + name fetch error: ", err);
      });
  };

  const deleteData = (name, month, year) => {
    let url = API_URL;
    console.log(name, month, year);
    const query = `DELETE FROM sheet1 WHERE name='${name}' AND month='${month}' AND year='${year}';`;

    let data = { crossDomain: true, crossOrigin: true, query: query };
    axios
      .post(url, data)
      .then((res) => {
        console.log("supplier data: ", res.data);
      })
      .catch((err) => {
        console.log("id + name fetch error: ", err);
      });
  };

  const addData = () => {
    let url = API_URL;

    const query = `INSERT INTO sheet1(name, month, year, balance, deduction, interest, install) VALUES
    ('${userName}','${month}','${year}','${balance}','${deduction}','${interest}','${install}');`;

    let data = { crossDomain: true, crossOrigin: true, query: query };
    axios
      .post(url, data)
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        console.log("id + name fetch error: ", err);
      });
    setUserName("");
    setMonth("");
    setBalance("");
    setDeduction("");
    setInterest("");
    setInstall("");
  };
  useEffect(() => {
    fetchSupplierList();
  }, []);

  const updateData = (name, usermonth, useryear) => {
    let url = API_URL;
    console.log(name, usermonth, useryear);
    const query = `UPDATE sheet1 SET name='${userName}',month='${month}',year='${year}',balance='${balance}',deduction='${deduction}'
    ,interest='${interest}',install='${install}' WHERE name='${userName}' AND month='${month}' AND year='${year}';`;

    let data = { crossDomain: true, crossOrigin: true, query: query };
    axios
      .post(url, data)
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        console.log("id + name fetch error: ", err);
      });
    setUserName("");
    setMonth("");
    setBalance("");
    setDeduction("");
    setInterest("");
    setInstall("");
  };
  return (
    <>
      <div className="container">
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button btn btn-success my-5"
          table="table-to-xls"
          filename="tablexls"
          sheet="tablexls"
          buttonText="Download as XLS"
        />
        {/* add  new entry section starts here */}
        <button
          className="btn btn-primary ms-3"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal2"
          onClick={() => {}}
        >
          <AiFillEdit color="black" size="20" />
          ADD NEW ENTRY
        </button>
        <div
          class="modal fade"
          id="exampleModal2"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    defaultValue=""
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label for="monthlist" class="form-label">
                    Month
                  </label>
                  <select
                    name="cars"
                    id="monthlist"
                    defaultValue=""
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                  >
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="Novermber">Novermber</option>
                    <option value="December">December</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Year
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    defaultValue=""
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Balance
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    defaultValue=""
                    value={balance}
                    onChange={(e) => setBalance(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Deduction
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    defaultValue=""
                    value={deduction}
                    onChange={(e) => setDeduction(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    INTEREST
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    defaultValue=""
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    INSTALL
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    defaultValue=""
                    value={install}
                    onChange={(e) => setInstall(e.target.value)}
                  />
                </div>
              </div>

              <div class="modal-footer d-flex justify-content-center align-items-center">
                <button type="button" class="btn btn-warning" onClick={addData}>
                  ADD DATA
                </button>

                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* add  new entry section ends here */}

        <table id="table-to-xls" className="table table-bordered">
          <thead>
            <tr className="table-primary">
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Month</th>
              <th scope="col">Year</th>
              <th scope="col">Balance</th>
              <th scope="col">Deduction</th>
              <th scope="col">Interest</th>
              <th scope="col">Install</th>
            </tr>
          </thead>
          <tbody>
            {finalData.map((data, id) => {
              return (
                <>
                  <tr>
                    <th scope="row">{id + 1}</th>
                    <td>{data.name}</td>
                    <td>{data.month}</td>
                    <td>{data.year}</td>
                    <td>{data.balance}</td>
                    <td>{data.deduction}</td>
                    <td>{data.interest}</td>
                    <td>{data.install}</td>

                    <td className="d-flex justify-content-evenly align-items-center">
                      <button
                        className="btn btn-warning"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => {
                          setUserName(data.name);
                          setMonth(data.month);
                          setYear(data.year);
                          setBalance(data.balance);
                          setDeduction(data.deduction);
                          setInterest(data.interest);
                          setInstall(data.install);
                        }}
                      >
                        <AiFillEdit color="black" size="20" />
                        SHOW DETAILS
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={() => {
                          deleteData(data.name, data.month, data.year);
                        }}
                      >
                        DELETE
                      </button>
                      <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <div className="mb-3">
                                <label
                                  for="exampleInputEmail1"
                                  class="form-label"
                                >
                                  Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                  defaultValue=""
                                  value={userName}
                                  onChange={(e) => setUserName(e.target.value)}
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  for="exampleInputEmail1"
                                  class="form-label"
                                >
                                  Month
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                  defaultValue=""
                                  value={month}
                                  onChange={(e) => setMonth(e.target.value)}
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  for="exampleInputEmail1"
                                  class="form-label"
                                >
                                  Year
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                  defaultValue=""
                                  value={year}
                                  onChange={(e) => setYear(e.target.value)}
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  for="exampleInputEmail1"
                                  class="form-label"
                                >
                                  Balance
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                  defaultValue=""
                                  value={balance}
                                  onChange={(e) => setBalance(e.target.value)}
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  for="exampleInputEmail1"
                                  class="form-label"
                                >
                                  Deduction
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                  defaultValue=""
                                  value={deduction}
                                  onChange={(e) => setDeduction(e.target.value)}
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  for="exampleInputEmail1"
                                  class="form-label"
                                >
                                  INTEREST
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                  defaultValue=""
                                  value={interest}
                                  onChange={(e) => setInterest(e.target.value)}
                                />
                              </div>

                              <div className="mb-3">
                                <label
                                  for="exampleInputEmail1"
                                  class="form-label"
                                >
                                  INSTALL
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                  defaultValue=""
                                  value={install}
                                  onChange={(e) => setInstall(e.target.value)}
                                />
                              </div>
                            </div>
                            <div class="modal-footer d-flex justify-content-center align-items-center">
                              <button
                                type="button"
                                class="btn btn-warning"
                                onClick={() => {
                                  updateData(data.name, data.month, data.year);
                                }}
                              >
                                UPDATE DATA
                              </button>

                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users