import * as React from "react"
import DefaultLayout from "../layouts/DefaultLayout"
import NotFoundImgA from "../assets/img/404-a.svg"
import NotFoundImgB from "../assets/img/404-b.svg"
import NotFoundImgC from "../assets/img/404-c.svg"

const NotFoundPage = props => {
  return (
    <DefaultLayout location={props.location}>
      <main role="main" className="my-5">
        <header className="container mt-5">
          <div className="row">
            <div className="col-11 mx-auto text-center mt-2">
              <h1 className="display-2 font-weight-bold text-dark py-0 mt-4">
                404
              </h1>
              <h2 className="mt-2 mx-auto text-dark">Page can not be found</h2>
              <picture>
                <source srcset={NotFoundImgA} media="(max-width: 400px)" />
                <source srcset={NotFoundImgB} media="(max-width: 700px)" />
                <source srcset={NotFoundImgC} media="(max-width: 1700px)" />
                <img
                  src={NotFoundImgA}
                  srcset={NotFoundImgB}
                  className="mx-auto text-center img-fluid mb-1"
                  width="400"
                  height="400"
                  alt=""
                />
              </picture>
            </div>
          </div>
        </header>

        <div className="container text-center mb-5 pb-5">
          <p>
            The page you are looking for has moved or has not been constructed
            yet.
          </p>
          <p>
            Return to the <a href="/">Home page</a>, and let's try again.
          </p>
        </div>
      </main>
    </DefaultLayout>
  )
}

export default NotFoundPage
