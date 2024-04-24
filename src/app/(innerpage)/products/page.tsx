import OrderList from "@/app/_components/OrderList";
import Link from "next/link";
import routes from '../../_routes/router';
export default function page() {
  return (
    <div className="container-fluid page-body-wrapper">
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row ">
              <div className="col-12 grid-margin">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                    <h4 className="card-title">Products</h4>
                    <Link href={routes.productsCreate} className="btn btn-outline-success btn-fw">Add New</Link>
                    </div>
                    <OrderList />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
