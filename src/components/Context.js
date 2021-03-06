import React, { useEffect, useState } from "react";

const Context = () => {
  const [product, setProduct] = useState([])
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState([])


  // API is converted into JSON file and storing data in local variable
  async function getAPIdata() {
    const response = await fetch("https://demo7303877.mockable.io/");
    const actualData = await response.json();
    console.log(actualData.products);
    setProduct(actualData.products)
  }
  useEffect(() => {
    getAPIdata();
  }, []);

  const searchItems = (event) => {
    const data = event.target.value;
    setSearch(data);
    if (search !== "") {
      const filterData = product.filter((item) => {
        return Object.values(item).join("").toLowerCase().includes(search.toLowerCase())
      })
      setFilter(filterData);
    } else {
      setFilter(product)
    }
  }


  return (
    <>
      <h1 className="text-center mt-3">List of Products</h1>
      <div>
        <nav className="navbar navbar-light  justify-content-between">
          <a className="navbar-brand"></a>
          <form className="form-inline">
            <input class="form-control mr-sm-5" type="text" placeholder="Search" aria-label="Search" onChange={searchItems} value={search}></input>
          </form>
        </nav>
      </div>

      {search.length > 1 ? (
        <div className="container-fluid mt-5">
        <div className="row text-center">
          {
            filter.map((currEle, index) => {
              return (
                <>
                  <div key={index}>
                    <div className="col-10 col-md-4 mt-5 mb-3">
                      <div className="card p-2 ">
                        <div className="d-flex align-items-center">
                          <div className="image">
                            <img src={currEle.images[0].src} className="rounded" width="155" alt="Product "></img>
                          </div>
                          <div className="ml-3 w-100">
                            <h4 className="mb-0 mt-0 textLeft">{currEle.brand}</h4><span className="textLeft">{currEle.productName}</span>
                            <div className="p-2 m-2 bg-primary d-flex justify-content-between rounded text-white stats">
                              <div className="d-flex flex-column "><span className="articles">RS</span><span className="number1">{currEle.price}</span></div>
                              <div className="d-flex flex-column "><span className="followers">Gender</span><span className="number2">{currEle.gender}</span></div>
                              <div className="d-flex flex-column "><span className="rating">Rating</span><span className="number3">{currEle.rating.toFixed(2)}</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
      ) : (
        <div className="container-fluid mt-5">
        <div className="row text-center">
          {
            product.map((currEle, index) => {
              return (
                <>
                  <div key={index}>
                    <div className="col-10 col-md-4 mt-5 mb-3">
                      <div className="card p-2 ">
                        <div className="d-flex align-items-center">
                          <div className="image">
                            <img src={currEle.images[0].src} className="rounded" width="155" alt="Product "></img>
                          </div>
                          <div className="ml-3 w-100">
                            <h4 className="mb-0 mt-0 textLeft">{currEle.brand}</h4><span className="textLeft">{currEle.productName}</span>
                            <div className="p-2 m-2 bg-primary d-flex justify-content-between rounded text-white stats">
                              <div className="d-flex flex-column "><span className="articles">RS</span><span className="number1">{currEle.price}</span></div>
                              <div className="d-flex flex-column "><span className="followers">Gender</span><span className="number2">{currEle.gender}</span></div>
                              <div className="d-flex flex-column "><span className="rating">Rating</span><span className="number3">{currEle.rating.toFixed(2)}</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
      )
    

      }
      

    </>
  );
};

export default Context;