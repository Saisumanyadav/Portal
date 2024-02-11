import React, { useState, useEffect } from "react";
// import { Link, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function HandleFunc() {
  const [value, setValue] = useState();
  const [array, setArray] = useState([]);
  const [editItemId, setEditItemId] = useState(null);
  const [editItemValue, setEditItemValue] = useState("");
  const [apiData, setApiData] = useState(null);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  //         const jsonData = await response.json();
  //         setData(jsonData);
  //       } catch (error) {
  //         console.log("Error fetching data:", error);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  const handleSearch = (e) => {
    if (array) {
      const existingElement = array.find((el) => el.name === value);
      if (!existingElement && value !== undefined && value !== "") {
        const newIndex = array.length + 1;
        setArray([
          ...array,
          { index: newIndex, name: value, key: Math.random() },
        ]);
      } else if (existingElement) {
        alert("Name already exists");
      } else if (value === undefined || value === null || value === "") {
        alert("Please Fill value");
      }
    } else {
      setArray([{ index: 1, name: value, key: Math.random() }]);
    }
    e.target.value = "";
  };
  const handleCheck = (e, item) => {
    let filteredArray = array.map((el) =>
      el.key === item.key ? { ...el, checked: e.target.checked } : el
    );
    setArray(filteredArray);
  };
  const handleDelete = (item) => {
    let filteredArray = array.filter((el) => el.key !== item.key);
    setArray(filteredArray);
  };
  const handleEdit = (item) => {
    setEditItemId(item.key);
    setEditItemValue(item.name);
  };
  const handleEditChange = (e) => {
    setEditItemValue(e.target.value);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedArray = array.map((item) =>
      item.key === editItemId ? { ...item, name: editItemValue } : item
    );
    setArray(updatedArray);
    setEditItemId(null);
    setEditItemValue("");
  };
  const handleCancelEdit = () => {
    setEditItemId(null);
    setEditItemValue("");
  };

  const handleApi = async (item) => {
    try {
      const response = await fetch(
        "https://dummy.restapiexample.com/api/v1/employees"
      );
      const jsonData = await response.json();
      console.log("API response for item:", item.name, jsonData);
      setApiData(jsonData);
    } catch (error) {
      console.log("Error calling API:", error);
    }
  };

  return (
    <Router>
      <div style={{ display: "grid", justifyContent: "center" }}>
        <h1>Practice</h1>

        <div>
          <input
            placeholder="Enter Something"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <button
            onClick={(e) => {
              handleSearch(e);
            }}
          >
            Search
          </button>
        </div>
        <ul>
          {array.map((item) => (
            <li
              key={item.key}
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                margin: "6px 0px",
                padding: "2px",
              }}
            >
              <input
                type="checkBox"
                checked={item.checked}
                onClick={(e) => {
                  handleCheck(e, item);
                }}
              />
              {/* <p style={{ margin: "0px 8px", padding: "0px" }}>{item.name}</p> */}
              {editItemId === item.key ? (
                <form onSubmit={handleEditSubmit}>
                  <input
                    type="text"
                    value={editItemValue}
                    onChange={handleEditChange}
                  />
                  <button type="submit">Save</button>
                  <button type="button" onClick={handleCancelEdit}>
                    Cancel
                  </button>
                </form>
              ) : (
                <>
                  {
                    <Link
                      to="/other-page"
                      onClick={() => {
                        handleApi(item);
                      }}
                    >
                      {item.name}
                    </Link>
                  }
                  {item.checked && (
                    <>
                      <button
                        style={{ margin: "0px 4px" }}
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>
                      <button onClick={() => handleDelete(item)}>Delete</button>
                    </>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
        <Routes>
          <Route path="/other-page" element={<OtherPage apiData={apiData} />} />
        </Routes>
      </div>
    </Router>
  );
}

function OtherPage({ apiData }) {
  return (
    <div>
      <h2>Data</h2>
      {apiData && <pre>{JSON.stringify(apiData, null, 2)}</pre>}
    </div>
  );
}
