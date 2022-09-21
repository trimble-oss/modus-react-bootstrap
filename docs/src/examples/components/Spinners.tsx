export const SpinnersBasic = `
<div className="d-flex justify-content-start">
  <div className="pr-3">
    <Button variant="primary" className="display-active" disabled aria-label="loading" role="button">
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
        className="mr-1 text-white"
      />
      <span className="sr-only">Loading...</span> Loading
    </Button>
  </div>
  <div className="px-3">
    <Spinner animation="border" role="status" variant="primary">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </div>
  <div className="px-3">
    <Spinner animation="border" role="status" variant="secondary">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </div>
  <div className="px-3">
    <div className="text-center">
      <Spinner animation="border" variant="primary" role="status" />
      <div className="h3 text-primary mt-3">Loading...</div>
    </div>
  </div>
</div>
`
