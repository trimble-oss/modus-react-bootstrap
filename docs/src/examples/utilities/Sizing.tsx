export const SizingBasic = `
<div>
  <div className="w-25 p-3 bg-dark text-white">Width 25%</div>
  <div className="w-50 p-3 bg-dark text-white">Width 50%</div>
  <div className="w-75 p-3 bg-dark text-white">Width 75%</div>
  <div className="w-100 p-3 bg-dark text-white">Width 100%</div>
  <div className="w-auto p-3 bg-dark text-white">Width auto</div>
</div>
`

export const SizingBasicMore = `
<div style={{height: "100px", backgroundColor: "rgba(255, 0, 0, 0.1)"}} className="mcr-2">
  <div className="h-25 d-inline-block" style={{width: "120px",backgroundColor: "rgba(0, 0, 255, .1)"}}>Height 25%</div>
  <div className="h-50 d-inline-block" style={{width: "120px",backgroundColor: "rgba(0, 0, 255, .1)"}}>Height 50%</div>
  <div className="h-75 d-inline-block" style={{width: "120px",backgroundColor: "rgba(0, 0, 255, .1)"}}>Height 75%</div>
  <div className="h-100 d-inline-block" style={{width: "120px",backgroundColor: "rgba(0, 0, 255, .1)"}}>Height 100%</div>
  <div className="h-auto d-inline-block" style={{width: "120px",backgroundColor: "rgba(0, 0, 255, .1)"}}>Height auto</div>
</div>
`

export const SizingSvg = `
<svg className="bd-placeholder-img mw-100" width="100%" height="100"
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Placeholder: Max-width 100%"
   preserveAspectRatio="xMidYMid slice" role="img" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#333" /><text x="50%" y="50%" fill="#eee" dy=".3em">Max-width 100%</text></svg>
`

export const SizingSvgMore = `
<div style={{height: "100px", backgroundColor: "rgba(255, 0, 0, 0.1)"}}>
  <div className="mh-100" style={{width: "100px", height: "200px", backgroundColor: "rgba(0, 0, 255, 0.1)"}}>Max-height 100%</div>
</div>
`

export const SizingViewPort = `
<div>
  <div className="min-vw-100">Min-width 100vw</div>
  <div className="min-vh-100">Min-height 100vh</div>
  <div className="vw-100">Width 100vw</div>
  <div className="vh-100">Height 100vh</div>
</div>
`
