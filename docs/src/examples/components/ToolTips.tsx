export const TooltipsBasic = `
<div className="d-flex">
  <OverlayTrigger
    key="overlay1"
    placement="top"
    overlay={<Tooltip id="btntooltip">Button Tooltip</Tooltip>}
  >
    <Button variant="primary">Button</Button>
  </OverlayTrigger>

  <OverlayTrigger
    key="overlay2"
    placement="top"
    overlay={<Tooltip id="icontooltip">Icon Tooltip</Tooltip>}
  >
    <i className="modus-icon material-icons ml-3">settings</i>
  </OverlayTrigger>

  <p className="ml-3 mb-0">
    Tooltips can even be used with{" "}
    <OverlayTrigger
      key="overlay3"
      placement="top"
      overlay={<Tooltip id="texttooltip">Text Tooltip</Tooltip>}
    >
      <strong> text</strong>
    </OverlayTrigger>
  </p>
</div>
`

export const TooltipsPlacement = `
<div className="d-flex">
  <OverlayTrigger
    key="overlay1"
    placement="top"
    overlay={<Tooltip id="toptooltip">Tooltip on top</Tooltip>}
  >
    <Button variant="primary" id="toptooltipbtn" className="mr-3">
      Tooltip on top
    </Button>
  </OverlayTrigger>
  <OverlayTrigger
    key="overlay2"
    placement="bottom"
    overlay={<Tooltip id="bottomtooltip">Tooltip on bottom</Tooltip>}
  >
    <Button variant="primary" id="bottomtooltipbtn" className="mr-3">
      Tooltip on bottom
    </Button>
  </OverlayTrigger>
  <OverlayTrigger
    key="overlay3"
    placement="left"
    overlay={<Tooltip id="lefttooltip">Tooltip on left</Tooltip>}
  >
    <Button variant="primary" id="lefttooltipbtn" className="mr-3">
      Tooltip on left
    </Button>
  </OverlayTrigger>
  <OverlayTrigger
    key="overlay4"
    placement="right"
    overlay={<Tooltip id="righttooltip">Tooltip on right</Tooltip>}
  >
    <Button variant="primary" id="righttooltipbtn">
      Tooltip on right
    </Button>
  </OverlayTrigger>
</div>
`

export const TooltipsWithHtml = `
<OverlayTrigger
  key="overlay1"
  placement="top"
  overlay={
    <Tooltip id="toptooltip">
      <em>Tooltip</em> <u>with</u> <b>HTML</b>
    </Tooltip>
  }
>
  <Button variant="primary" id="toptooltipbtn" className="mr-3">
    Tooltip with HTML
  </Button>
</OverlayTrigger>
`
