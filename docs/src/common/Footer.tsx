import * as React from "react"
import config from "../../config"
import logo from "../assets/img/trimble-logo-rev.svg"

const Footer = () => {
  const copyRightYear = new Date().getFullYear()
  return (
    <footer className="p-2 footer py-4">
      <div className="container">
        <div className="row pt-2">
          <div className="col-12 mb-4 mt-2">
            <img src={logo} width="107" height="25" alt="Trimble" />
          </div>
        </div>
        <div className="row py-2">
          <div className="col-11 col-md-5 col-lg-4">
            <p>
              Trimble is transforming the way the world works by delivering
              products and services that connect the physical and digital
              worlds.
            </p>
          </div>
          <div className="col-12 col-sm-1 col-lg-4"></div>
          <div className="col-6 col-md-3 col-lg-2">
            <p className="h5" hidden>
              About Modus
            </p>
            <ul className="list-unstyled">
              <li className="my-3 my-sm-2">
                <a href="/getting-started/" className="py-2">
                  Getting Started
                </a>
              </li>
              <li className="my-3 my-sm-2">
                <a href="/getting-started/changelog/" className="py-2">
                  Changelog
                </a>
              </li>
              <li className="my-3 my-sm-2">
                <a
                  href="https://modus.trimble.com/status/"
                  className="py-2"
                  target="_blank"
                  rel="noopener"
                >
                  Status
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <p className="h5" hidden>
              Help
            </p>
            <ul className="list-unstyled">
              <li className="my-3 my-sm-2">
                <a
                  href="https://github.com/orgs/trimble-oss/repositories?q=react&type=source&language=&sort="
                  target="_blank"
                  rel="noopener"
                  className="py-2"
                >
                  Contribute
                </a>
              </li>
              <li className="my-3 my-sm-2">
                <a
                  href="https://modus.trimble.com/community/contact/"
                  target="_blank"
                  rel="noopener"
                  className="py-2"
                >
                  Contact Us
                </a>
              </li>
              <li className="my-3 my-sm-2">
                <a
                  href="https://mail.google.com/chat/u/0/#chat/space/AAAAexugR1k"
                  target="_blank"
                  rel="noopener"
                  className="py-2"
                >
                  Google Chat Space
                </a>
              </li>
              <li className="my-3 my-sm-2">
                <a
                  href=""
                  className="py-2"
                  onClick={e => {
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSc5-PBOzJjT2Q8r5Pg7BPYzae-rz5fg5ySSBcHwfhBneUkvWg/viewform",
                      "window",
                      "left=20,top=20,width=500,height=660,toolbar=1,resizable=0"
                    )
                    e.preventDefault()
                    return false
                  }}
                >
                  Subscribe
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row p-3">
          <div className="col-12 border-top border-light opacity-50"></div>
        </div>
        <div className="row pt-2">
          <div className="col-12 col-sm-6 small">
            {`Copyright © ${copyRightYear}, Trimble Inc.`}
          </div>
          <div className="col-12 col-sm-6 text-sm-right small">
            <a
              href="https://www.trimble.com/en/our-commitment/responsible-business/data-privacy-and-security/data-privacy-center"
              target="_blank"
            >
              {"Privacy Center - "}
            </a>
            <a
              href="https://www.trimble.com/en/legal/terms-and-conditions/terms-of-use"
              target="_blank"
            >
              {"Terms of Use - "}
            </a>
            <a href="/cookies/" hidden>
              {"Cookies - "}
            </a>
            {"Modus React Bootstrap Version: "}
            {config.modusReactBootstrapVersion}
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
