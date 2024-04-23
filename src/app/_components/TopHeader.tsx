import Link from 'next/link';
import routes from '../_routes/router';
export default function TopHeader() {
  return (
    <>
      <nav className="navbar top-navbar col-lg-12 col-12 p-0">
        <div className="container">
          <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
            <Link className="navbar-brand brand-logo" href={routes.home}>
              <img
                src="https://demo.bootstrapdash.com/corona-new/themes/assets/images/logo.svg"
                alt="logo"
              />
            </Link>
            <Link className="navbar-brand brand-logo-mini" href={routes.home}>
              <img
                src="https://demo.bootstrapdash.com/corona-new/themes/assets/images/logo-mini.svg"
                alt="logo"
              />
            </Link>
          </div>
          <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
                  <input
                    type="text"
                    className="form-control w-100"
                    placeholder="Search products"
                  />
                </form>
              </li>
            </ul>
            <ul className="navbar-nav navbar-nav-right">
              <li className="nav-item dropdown d-none d-xl-block">
                <a
                  className="nav-link btn btn-success create-new-button"
                  id="createbuttonDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="#"
                >
                  + Create New Project
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end navbar-dropdown preview-list"
                  aria-labelledby="createbuttonDropdown"
                >
                  <h6 className="p-3 mb-0">Projects</h6>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-file-outline text-primary" />
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1">
                        Software Development
                      </p>
                    </div>
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-web text-info" />
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1">
                        UI Development
                      </p>
                    </div>
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-layers text-danger" />
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1">
                        Software Testing
                      </p>
                    </div>
                  </a>
                  <div className="dropdown-divider" />
                  <p className="p-3 mb-0 text-center">See all projects</p>
                </div>
              </li>
              <li className="nav-item nav-settings d-none d-lg-block">
                <a className="nav-link" href="#">
                  <i className="mdi mdi-view-grid" />
                </a>
              </li>
              <li className="nav-item dropdown border-left">
                <a
                  className="nav-link count-indicator dropdown-toggle"
                  id="messageDropdown"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-email" />
                  <span className="count bg-success" />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end navbar-dropdown preview-list"
                  aria-labelledby="messageDropdown"
                >
                  <h6 className="p-3 mb-0">Messages</h6>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img
                        src="../assets/images/faces/face4.jpg"
                        alt="image"
                        className="rounded-circle profile-pic"
                      />
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1">
                        Mark send you a message
                      </p>
                      <p className="text-muted mb-0"> 1 Minutes ago </p>
                    </div>
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img
                        src="../assets/images/faces/face2.jpg"
                        alt="image"
                        className="rounded-circle profile-pic"
                      />
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1">
                        Cregh send you a message
                      </p>
                      <p className="text-muted mb-0"> 15 Minutes ago </p>
                    </div>
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img
                        src="../assets/images/faces/face3.jpg"
                        alt="image"
                        className="rounded-circle profile-pic"
                      />
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1">
                        Profile picture updated
                      </p>
                      <p className="text-muted mb-0"> 18 Minutes ago </p>
                    </div>
                  </a>
                  <div className="dropdown-divider" />
                  <p className="p-3 mb-0 text-center">4 new messages</p>
                </div>
              </li>
              <li className="nav-item dropdown border-left">
                <a
                  className="nav-link count-indicator dropdown-toggle"
                  id="notificationDropdown"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <i className="mdi mdi-bell" />
                  <span className="count bg-danger" />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end navbar-dropdown preview-list"
                  aria-labelledby="notificationDropdown"
                >
                  <h6 className="p-3 mb-0">Notifications</h6>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-calendar text-success" />
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject mb-1">Event today</p>
                      <p className="text-muted ellipsis mb-0">
                        {" "}
                        Just a reminder that you have an event today{" "}
                      </p>
                    </div>
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-cog text-danger" />
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject mb-1">Settings</p>
                      <p className="text-muted ellipsis mb-0">
                        {" "}
                        Update dashboard{" "}
                      </p>
                    </div>
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-link-variant text-warning" />
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject mb-1">Launch Admin</p>
                      <p className="text-muted ellipsis mb-0">
                        {" "}
                        New admin wow!{" "}
                      </p>
                    </div>
                  </a>
                  <div className="dropdown-divider" />
                  <p className="p-3 mb-0 text-center">See all notifications</p>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link me-0"
                  id="profileDropdown"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <div className="navbar-profile">
                    <img
                      className="img-xs rounded-circle"
                      src="../assets/images/faces/face15.jpg"
                      alt=""
                    />
                    <p className="mb-0 d-none d-sm-block navbar-profile-name">
                      Henry Klein
                    </p>
                    <i className="mdi mdi-menu-down d-none d-sm-block" />
                  </div>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end navbar-dropdown preview-list"
                  aria-labelledby="profileDropdown"
                >
                  <h6 className="p-3 mb-0">Profile</h6>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-cog text-success" />
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject mb-1">Settings</p>
                    </div>
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-logout text-danger" />
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject mb-1">Log out</p>
                    </div>
                  </a>
                  <div className="dropdown-divider" />
                  <p className="p-3 mb-0 text-center">Advanced settings</p>
                </div>
              </li>
            </ul>
            <button
              className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
              type="button"
              data-toggle="horizontal-menu-toggle"
            >
              <span className="mdi mdi-menu" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
