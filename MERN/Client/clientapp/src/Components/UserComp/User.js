import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function User() {
  const [state, setState] = useState([]);
  const deleteRecord = (id) => {
    axios.delete(`http://localhost:8000/user/delete/${id}`).then(
      (res) => {
        alert(res.data);
        sendRequest();
      },
      (err) => {
        alert("while getting data");
      }
    );
  };
  const sendRequest = () => {
    axios.get("http://localhost:8000/user/").then(
      (res) => {
        console.log(res.data);
        setState(res.data);
      },
      (err) => {
        alert("while getting data from server");
        console.log(err);
      }
    );
  };
  useEffect(() => {
    axios.get("http://localhost:8000/user/").then(
      (res) => {
        console.log(res.data);
        setState(res.data);
      },
      (err) => {
        alert("Error while getting data from server");
        console.log(err);
      }
    );
   sendRequest();
  }, []);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          {state.length > 0 ? (
            <div>
              <table className="table table-hover">
                <thead className="bg-dark text-white">
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PASSWORD</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {state.map((element, index) => {
                    return (
                      <tr key={index + 1}>
                        <td>{element._id}</td>
                        <td>{element.name}</td>
                        <td>{element.password}</td>
                        <td>
                          <Link to="" className="btn btn-primary">
                            Edit{" "}
                          </Link>
                        </td>
                        <td>
                          <Link
                            to=""
                            className="btn btn-primary"
                            onClick={() => {
                              deleteRecord(element._id);
                            }}>
                          
                            Delete
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div>
              <h3>Data is not available</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default User;
