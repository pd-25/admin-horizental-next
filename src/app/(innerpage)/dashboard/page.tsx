import OrderList from "@/app/_components/OrderList";

export default function page() {
  return (
    <>
      <div className="container-fluid page-body-wrapper">
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-sm-4 grid-margin">
                <div className="card">
                  <div className="card-body">
                    <h5>Revenue</h5>
                    <div className="row">
                      <div className="col-8 col-sm-12 col-xl-8 my-auto">
                        <div className="d-flex d-sm-block d-md-flex align-items-center">
                          <h2 className="mb-0">$3212</h2>
                          <p className="text-success ms-2 mb-0 font-weight-medium">
                            +3.5%
                          </p>
                        </div>
                        <h6 className="text-muted font-weight-normal">
                          11.38% Since last month
                        </h6>
                      </div>
                      <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                        <i className="icon-lg mdi mdi-codepen text-primary ml-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 grid-margin">
                <div className="card">
                  <div className="card-body">
                    <h5>Sales</h5>
                    <div className="row">
                      <div className="col-8 col-sm-12 col-xl-8 my-auto">
                        <div className="d-flex d-sm-block d-md-flex align-items-center">
                          <h2 className="mb-0">$4585</h2>
                          <p className="text-success ms-2 mb-0 font-weight-medium">
                            +8.3%
                          </p>
                        </div>
                        <h6 className="text-muted font-weight-normal">
                          {" "}
                          9.61% Since last month
                        </h6>
                      </div>
                      <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                        <i className="icon-lg mdi mdi-wallet-travel text-danger ml-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 grid-margin">
                <div className="card">
                  <div className="card-body">
                    <h5>Purchase</h5>
                    <div className="row">
                      <div className="col-8 col-sm-12 col-xl-8 my-auto">
                        <div className="d-flex d-sm-block d-md-flex align-items-center">
                          <h2 className="mb-0">$2039</h2>
                          <p className="text-danger ms-2 mb-0 font-weight-medium">
                            -2.1%{" "}
                          </p>
                        </div>
                        <h6 className="text-muted font-weight-normal">
                          2.27% Since last month
                        </h6>
                      </div>
                      <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                        <i className="icon-lg mdi mdi-monitor text-success ml-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-9">
                        <div className="d-flex align-items-center align-self-start">
                          <h3 className="mb-0">$12.34</h3>
                          <p className="text-success ms-2 mb-0 font-weight-medium">
                            +3.5%
                          </p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="icon icon-box-success ">
                          <span className="mdi mdi-arrow-top-right icon-item" />
                        </div>
                      </div>
                    </div>
                    <h6 className="text-muted font-weight-normal">
                      Potential growth
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-9">
                        <div className="d-flex align-items-center align-self-start">
                          <h3 className="mb-0">$17.34</h3>
                          <p className="text-success ms-2 mb-0 font-weight-medium">
                            +11%
                          </p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="icon icon-box-success">
                          <span className="mdi mdi-arrow-top-right icon-item" />
                        </div>
                      </div>
                    </div>
                    <h6 className="text-muted font-weight-normal">
                      Revenue current
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-9">
                        <div className="d-flex align-items-center align-self-start">
                          <h3 className="mb-0">$12.34</h3>
                          <p className="text-danger ms-2 mb-0 font-weight-medium">
                            -2.4%
                          </p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="icon icon-box-danger">
                          <span className="mdi mdi-arrow-bottom-left icon-item" />
                        </div>
                      </div>
                    </div>
                    <h6 className="text-muted font-weight-normal">
                      Daily Income
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-9">
                        <div className="d-flex align-items-center align-self-start">
                          <h3 className="mb-0">$31.53</h3>
                          <p className="text-success ms-2 mb-0 font-weight-medium">
                            +3.5%
                          </p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="icon icon-box-success ">
                          <span className="mdi mdi-arrow-top-right icon-item" />
                        </div>
                      </div>
                    </div>
                    <h6 className="text-muted font-weight-normal">
                      Expense current
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-12 grid-margin">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Order Status</h4>
                    <OrderList />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer container">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
              <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
                Copyright © {new Date().getFullYear()}{" "}
                <a href="#" target="_blank">
                  Pradipta
                </a>
                . All rights reserved.
              </span>
              <span className="text-muted float-none float-sm-end d-block mt-1 mt-sm-0 text-center">
                Hand-crafted &amp; made with{" "}
                <i className="mdi mdi-heart text-danger" />
              </span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
