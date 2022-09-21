export const TabsBasic = `
<Tabs defaultActiveKey="home" id="tab-example">
  <Tab eventKey="home" title="Active"></Tab>
  <Tab eventKey="tab" title="Tab"></Tab>
  <Tab eventKey="longtab" title="Longer Tab Name"></Tab>
  <Tab eventKey="disabledtab" title="Disabled" disabled></Tab>
</Tabs>
`

export const TabsWithIcons = `
<Tabs defaultActiveKey="home" id="tab-example">
  <Tab
    eventKey="home"
    title={<i className="modus-icon material-icons">mood</i>}
  ></Tab>
  <Tab
    eventKey="tab"
    title={<i className="modus-icon material-icons">face</i>}
  ></Tab>
  <Tab
    eventKey="longtab"
    title={<i className="modus-icon material-icons">sentiment_satisfied</i>}
  ></Tab>
  <Tab
    eventKey="disabledtab"
    title={
      <i className="modus-icon material-icons">sentiment_very_dissatisfied</i>
    }
    disabled
  ></Tab>
</Tabs>
`

export const TabsSmall = `
<div>
  <Tabs defaultActiveKey="home" className="nav-tabs-sm" id="tab-example1">
    <Tab eventKey="home" title="Active"></Tab>
    <Tab eventKey="tab" title="Tab"></Tab>
    <Tab eventKey="longtab" title="Longer Tab Name"></Tab>
    <Tab eventKey="disabledtab" title="Disabled" disabled></Tab>
  </Tabs>
  <br />

  <Tabs defaultActiveKey="home" className="nav-tabs-sm" id="tab-example2">
    <Tab
      eventKey="home"
      title={<i className="modus-icon material-icons">mood</i>}
    ></Tab>
    <Tab
      eventKey="tab"
      title={<i className="modus-icon material-icons">face</i>}
    ></Tab>
    <Tab
      eventKey="longtab"
      title={<i className="modus-icon material-icons">sentiment_satisfied</i>}
    ></Tab>
    <Tab
      eventKey="disabledtab"
      title={
        <i className="modus-icon material-icons">sentiment_very_dissatisfied</i>
      }
      disabled
    ></Tab>
  </Tabs>
</div>
`
export const TabsWithContent = `
<Tabs defaultActiveKey="home" id="tab-example">
  <Tab eventKey="home" title="First tab">
    <div className="py-3">
      <h5 id="first-tab-content">First Tab Content</h5>
      <p>
        Placeholder content for the tab panel. This one relates to the First
        tab. Takes you miles high, so high, 'cause she’s got that one
        international smile. There's a stranger in my bed, there's a pounding in
        my head. Oh, no. In another life I would make you stay.
      </p>
    </div>
  </Tab>
  <Tab eventKey="tab" title="Second tab content">
    <div className="py-3">
      <h5 id="second-tab-content">Second Tab Content</h5>
      <p>
        Placeholder content for the tab panel. This one relates to the Second
        tab. You got the finest architecture. Passport stamps, she's
        cosmopolitan. Fine, fresh, fierce, we got it on lock. Never planned that
        one day I'd be losing you. She eats your heart out.
      </p>
    </div>
  </Tab>
  <Tab eventKey="longtab" title="Third Tab Content">
    <div className="py-3">
      <h5 id="third-tab-content">Third Tab Content</h5>
      <p>
        Placeholder content for the tab panel. This one relates to the Third
        tab. Her love is like a drug. All my girls vintage Chanel baby. Got a
        motel and built a fort out of sheets. 'Cause she's the muse and the
        artist. (This is how we do) So you wanna play with magic.
      </p>
    </div>
  </Tab>
  <Tab eventKey="disabledtab" title="Disabled Tab" disabled>
    <div className="py-3">
      {" "}
      <h5 id="disabled-tab-content">Disabled Tab Content</h5>
      <p>This content is disabled and unviewable.</p>
    </div>
  </Tab>
</Tabs>
`
