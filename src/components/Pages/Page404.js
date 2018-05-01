import React, {Component} from "react";

class Page404 extends Component {
  render() {
    return (
      <section className="app-page-404">
        <div className="container">
          <div className="row">
            <div className="col s10 offset-s1 center">

                <h1 className="float-left display-3 mr-4">404</h1>
                <h4 className="pt-3">Oops! You're lost.</h4>
                <p className="text-muted float-left">The page you are looking for was not found.</p>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Page404;
