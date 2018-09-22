import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';
import PageWrapper from '../../components/wrapper/page-wrapper';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Navbar />
                <div className="dashboard__section">
                    <div className="container">
                        <div className="row mb-3">
                            <div className="col-6">
                                <h1 className="customer-page__title">MSP Dashboard</h1>
                            </div>
                            <div className="col-6 d-flex justify-content-end align-items-center">
                                <button className="btn btn-info btn--shadowed mr-2" type="button"> <i className="fa fa-user-plus btn__icon"></i>Add New Customer</button>
                                <button className="btn btn-info btn--shadowed mr-2" type="button"> <i className="fa fa-user-plus btn__icon"></i>Create New Product</button>
                                <button className="btn btn--shadowed btn--orange" type="button"> <i className="fa fa-credit-card btn__icon"></i>Make Payment</button>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3 d-flex justify-content-center">
                        <div className="col-4">
                            <div className="card dashboard__image">
                                <div className="card-body">
                                    <h1 className="dashboard__text">Welcome</h1>
                                    <p className="dashboard__username">Joshua Angelo</p>
                                    <div className="row">
                                        <div className="col-2">
                                            <hr/>
                                        </div>
                                    </div>
                                    <p className="dashboard__tips">Tips</p>
                                    <p className="dashboard__tips-text">Don't forget. <br/> Always save your work.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="card card--turquoise card--is-hovered">
                                <div className="card-body">
                                    <p className="card-body__title mb-2">Total money in circulation in Pesos</p>
                                    <div className="row">
                                        <div className="col-md-2 card-body__icon card-body--centered card-body__icon--green"><i className="fa fa-3x fa-money"></i></div>
                                            <div className="col-md-10 card-body--centered">
                                                <p className="card-body__text card-body__text--green">&#8369;1,400,000.00</p>
                                                <p className="card-body__subtext">as of Sept 17, 2018</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="hr--reset"/>
                                    <div className="d-flex flex-row-reverse bd-highlight">
                                    <button className="btn btn-link btn--no-decoration" type="button">View Details <i className="fa fa-angle-right"></i></button>
                                </div>
                            </div>
                        </div>

                        <div className="col-2">
                            <div className="card card--blue card--is-hovered">
                                <div className="card-body p-3">
                                    <p className="card-body__title mb-2">Total number of borrowers</p>
                                    <div className="row">
                                        <div className="col-md-4 card-body__icon card-body__icon--red card-body--centered">
                                            <i className="fa fa-2x fa-address-book-o"></i>
                                        </div>
                                        <div className="col-md-8 card-body--centered">
                                            <p className="card-body__text card-body__text--red">78</p>
                                            <p className="card-body__subtext">as of Sept 17, 2018</p>
                                        </div>
                                    </div>
                                    <hr className="hr--reset"/>
                                    <div className="d-flex flex-row-reverse bd-highlight">
                                        <button className="btn btn-link btn--no-decoration" type="button">View Details <i className="fa fa-angle-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row mb-5 d-flex justify-content-center">
    <div className="col-2">
      <div className="card card--blue card--is-hovered">
        <div className="card-body p-3">
          <p className="card-body__title mb-2">Total number <br /> of borrowers</p>
          <div className="row">
            <div className="col-md-4 card-body__icon card-body--centered"><i className="fa fa-2x fa-users"></i></div>
            <div className="col-md-8 card-body--centered">
              <p className="card-body__text">324</p>
              <p className="card-body__subtext">as of Sept 17, 2018</p>
            </div>
          </div>
        </div>
        <hr className="hr--reset"/>
        <div className="d-flex flex-row-reverse bd-highlight">
          <button className="btn btn-link btn--no-decoration" type="button">View Details <i className="fa fa-angle-right"></i></button>
        </div>
      </div>
    </div>
    <div className="col-2">
      <div className="card card--violet card--is-hovered">
        <div className="card-body p-3">
          <p className="card-body__title mb-2">Total number <br /> of Overdue</p>
          <div className="row">
            <div className="col-md-4 card-body__icon card-body__icon--red card-body--centered"><i className="fa fa-2x fa-calendar-o"></i></div>
            <div className="col-md-8 card-body--centered">
              <p className="card-body__text card-body__text--red">126</p>
              <p className="card-body__subtext">as of Sept 17, 2018</p>
            </div>
          </div>
        </div>
        <hr className="hr--reset"/>
        <div className="d-flex flex-row-reverse bd-highlight">
          <button className="btn btn-link btn--no-decoration" type="button">View Details <i className="fa fa-angle-right"></i></button>
        </div>
      </div>
    </div>
    <div className="col-2">
      <div className="card card--violet card--is-hovered">
        <div className="card-body p-3">
          <p className="card-body__title mb-2">Total number <br /> of active borrowers</p>
          <div className="row">
            <div className="col-md-4 card-body__icon card-body--centered"><i className="fa fa-2x fa-users"></i></div>
            <div className="col-md-8 card-body--centered">
              <p className="card-body__text">235</p>
              <p className="card-body__subtext">as of Sept 17, 2018</p>
            </div>
          </div>
        </div>
        <hr className="hr--reset"/>
        <div className="d-flex flex-row-reverse bd-highlight">
          <button className="btn btn-link btn--no-decoration" type="button">View Details <i className="fa fa-angle-right"></i></button>
        </div>
      </div>
    </div>
    <div className="col-2">
      <div className="card card--yellow card--is-hovered">
        <div className="card-body p-3">
          <p className="card-body__title mb-2">Opened account for the past month</p>
          <div className="row">
            <div className="col-md-4 card-body__icon card-body--centered"><i className="fa fa-2x fa-address-book-o"></i></div>
            <div className="col-md-8 card-body--centered">
              <p className="card-body__text">235</p>
              <p className="card-body__subtext">as of Sept 17, 2018</p>
            </div>
          </div>
        </div>
        <hr className="hr--reset"/>
        <div className="d-flex flex-row-reverse bd-highlight">
          <button className="btn btn-link btn--no-decoration" type="button">View Details <i className="fa fa-angle-right"></i></button>
        </div>
      </div>
    </div>
    <div className="col-2">
      <div className="card card--dark-blue card--is-hovered">
        <div className="card-body p-3">
          <p className="card-body__title mb-2">Total number of overdue today</p>
          <div className="row">
            <div className="col-md-4 card-body__icon card-body--centered"><i className="fa fa-2x fa-undo"></i></div>
            <div className="col-md-8 card-body--centered">
              <p className="card-body__text">38</p>
              <p className="card-body__subtext">as of Sept 17, 2018</p>
            </div>
          </div>
        </div>
        <hr className="hr--reset"/>
        <div className="d-flex flex-row-reverse bd-highlight">
          <button className="btn btn-link btn--no-decoration" type="button">View Details <i className="fa fa-angle-right"></i></button>
        </div>
      </div>
    </div>
  </div>
  <div className="card dashboard-card--no-border">
    <div className="card-body">
      <div className="row py-3">
        <div className="col-5">
          <h1 className="dashboard__text mb-4">Names of overdue for today (38)</h1>
          <table className="table table-sm table-responsive-md mb-5">
            <thead>
              <tr>
                <th className="th__text th--no-border" scope="col">Name</th>
                <th className="th__text th--no-border" scope="col">Status</th>
                <th className="th__text th--no-border" scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td--no-border">Kate Bradley</td>
                <td className="td--no-border">
                  <p className="status status--orange">&#11044; Processing</p>
                </td>
                <td className="td--no-border">$2,000</td>
              </tr>
              <tr>
                <td className="td--no-border">Sam Nelson</td>
                <td className="td--no-border">
                  <p className="status status--red">&#11044; Pending</p>
                </td>
                <td className="td--no-border">$2,000</td>
              </tr>
              <tr>
                <td className="td--no-border">Jeffrey Howard</td>
                <td className="td--no-border">
                  <p className="status status">&#11044; On-Hold</p>
                </td>
                <td className="td--no-border">$2,000</td>
              </tr>
              <tr>
                <td className="td--no-border">Sue Huff</td>
                <td className="td--no-border">
                  <p className="status status--red">&#11044; Pending</p>
                </td>
                <td className="td--no-border">$2,000</td>
              </tr>
            </tbody>
          </table>
          <hr/>
          <button className="btn btn-link btn--no-decoration" type="button">View all customers</button>
        </div>
        <div className="col-5">
          <h1 className="dashboard__text mb-4">Collector Status (20)</h1>
          <table className="table table-sm table-responsive-md mb-5">
            <thead>
              <tr>
                <th className="th__text th--no-border" scope="col">Name</th>
                <th className="th__text th--no-border" scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td--no-border">Kate Bradley</td>
                <td className="td--no-border">
                  <p className="status status--violet">&#11044; Out for business</p>
                </td>
              </tr>
              <tr>
                <td className="td--no-border">Sam Nelson</td>
                <td className="td--no-border">
                  <p className="status status--red">&#11044; On-queue</p>
                </td>
              </tr>
              <tr>
                <td className="td--no-border">Jeffrey Howard</td>
                <td className="td--no-border">
                  <p className="status status">&#11044; On-Hold</p>
                </td>
              </tr>
              <tr>
                <td className="td--no-border">Sue Huff</td>
                <td className="td--no-border">
                  <p className="status status--red">&#11044; On-queue</p>
                </td>
              </tr>
            </tbody>
          </table>
          <hr/>
          <button className="btn btn-link btn--no-decoration" type="button">View all collectors</button>
        </div>
        <div className="col-2 d-flex flex-column">
          <button className="btn btn-outline-info btn--shadowed mb-3" type="button">Print All <br/> Transaction Today</button>
          <button className="btn btn-outline-info btn--shadowed mb-3" type="button">Print All <br/> Customer Data</button>
          <button className="btn btn-outline-info btn--shadowed" type="button">Download Data (CSV)</button>
        </div>
      </div>
    </div>
    <div className="container-fluid mb-3">
      <hr/><small className="product__footer">All Right Reserved 2018. © Copyright 2018. Designed and Developed by </small>
    </div>
  </div>
                </div>
            </div>
        );
    }
}