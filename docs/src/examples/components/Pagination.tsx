export const PaginationBasic = `
<nav aria-label="Pagination Example">
  <Pagination>
    <Pagination.Item aria-label="Previous">
      <i className="modus-icons" aria-hidden="true">chevron_left</i>
    </Pagination.Item>
    <Pagination.Item  aria-label="Go to previous pages">
      <i className="modus-icons" aria-hidden="true">more_horizontal</i>
    </Pagination.Item>

    <Pagination.Item>{3}</Pagination.Item>
    <Pagination.Item>{4}</Pagination.Item>
    <Pagination.Item active aria-current="page">{5}</Pagination.Item>
    <Pagination.Item>{6}</Pagination.Item>
    <Pagination.Item>{7}</Pagination.Item>

    <Pagination.Item aria-label="Go to next pages">
      <i className="modus-icons" aria-hidden="true">more_horizontal</i>
    </Pagination.Item>
    <Pagination.Item aria-label="Next">
      <i className="modus-icons" aria-hidden="true">chevron_right</i>
    </Pagination.Item>
  </Pagination>
</nav>
`

export const PaginationDisabledActiveStates = `
<nav aria-label="Pagination Example">
  <Pagination>
    <Pagination.Item disabled aria-disabled="true">Disabled</Pagination.Item>
    <Pagination.Item>1</Pagination.Item>
    <Pagination.Item active aria-selected="true" aria-current="page">2 (active)</Pagination.Item>
    <Pagination.Item>3</Pagination.Item>
    <Pagination.Item>4</Pagination.Item>
  </Pagination>
</nav>
`

export const PaginationSizing = `
<div>
  <nav aria-label="Pagination Example">
    <Pagination size="sm">
      <Pagination.Item disabled aria-disabled="true">Disabled</Pagination.Item>
      <Pagination.Item aria-label="Previous">
        <i className="modus-icons" aria-hidden="true">chevron_left</i>
      </Pagination.Item>
      <Pagination.Item aria-label="Go to previous pages">
        <i className="modus-icons" aria-hidden="true">more_horizontal</i>
      </Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item active aria-current="page">{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Item aria-label="Go to next pages">
        <i className="modus-icons" aria-hidden="true">more_horizontal</i>
      </Pagination.Item>
      <Pagination.Item aria-label="Next">
        <i className="modus-icons" aria-hidden="true">chevron_right</i>
      </Pagination.Item>
      <Pagination.Item>Next</Pagination.Item>
    </Pagination>
  </nav>

  <nav aria-label="Pagination Example">
    <Pagination size="lg">
      <Pagination.Item disabled aria-disabled="true">Disabled</Pagination.Item>
      <Pagination.Item aria-label="Previous">
        <i className="modus-icons" aria-hidden="true">chevron_left</i>
      </Pagination.Item>
      <Pagination.Item aria-label="Go to previous pages">
        <i className="modus-icons" aria-hidden="true">more_horizontal</i>
      </Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item active aria-current="page">{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Item aria-label="Go to next pages">
        <i className="modus-icons" aria-hidden="true">more_horizontal</i>
      </Pagination.Item>
      <Pagination.Item aria-label="Next">
        <i className="modus-icons" aria-hidden="true">chevron_right</i>
      </Pagination.Item>
      <Pagination.Item>Next</Pagination.Item>
    </Pagination>
  </nav>
</div>
`
