// import "./App.css";
import React, { useState, useEffect } from "react";

export const Apps = () => {
  const url = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);
  // used async function
  const fetchInfo = async () => {
    const data = await fetch(url);
    const res = await data.json();
    setData(res);

    // return fetch(url)
    //   .then((res) => res.json())
    //   .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App">
      {/* <BrowserRouter>
 <Routes>
 <Route exact path= '' element={<Home/>} />
 

 </Routes>
 </BrowserRouter> */}
      <div
        style={{
          backgroundColor: "pink",
        }}
      >
        <h1 style={{ backgroundColor: "pink" }}> </h1>
        <center>
          {data.map((dataObj) => {
            return (
              <div
                style={{
                  width: "1210px",
                  height: "230px",
                  backgroundColor: "white",
                  padding: 2,
                  borderRadius: 5,
                  marginBlock: 10,
                }}
                key={dataObj.id}
              >
                <p style={{ fontSize: 20, color: "black" }}>
                  <div class="">
                    <figure>
                      <img
                        src={dataObj.image}
                        alt="Jumia box"
                        style={{ width: "180px", height: "150px" }}
                      />
                      <h2> {dataObj.title}</h2>
                    </figure>
                  </div>
                </p>
              </div>
            );
          })}
        </center>
      </div>
    </div>
  );
};
