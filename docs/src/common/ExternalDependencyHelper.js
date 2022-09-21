import React from "react"

// React Helmet manages changes to document head
import { Helmet } from "react-helmet"

export const ModusIconsScripts = () => {
  return (
    <Helmet>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link
        rel="stylesheet"
        href="https://modus.trimble.com/assets/0.5.1/fonts/modus-icons.css"
      />
    </Helmet>
  )
}
export const ModusLayoutScripts = () => {
  return (
    <Helmet>
      <link
        rel="stylesheet"
        href="https://modus.trimble.com/css/modus-layout.min.css"
      />
      ,
      <script src="https://modus.trimble.com/css/modus-layout.min.js" async />
    </Helmet>
  )
}
export const OneTrustCookieBannerScript = () => {
  return (
    <Helmet>
      <script
        key="onetrust"
        type="text/javascript"
        src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
        data-language="en"
        charSet="UTF-8"
        data-domain-script="64fba379-cc84-440d-b90b-0a32ebabc3a1"
        onLoad="function OptanonWrapper() {};"
      />
    </Helmet>
  )
}
