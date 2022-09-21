export const FlexDirection = `
<div>
  <div className="d-flex flex-row highlighted mb-3">
    <div className="p-2 highlighted">Flex item 1</div>
    <div className="p-2 highlighted">Flex item 2</div>
    <div className="p-2 highlighted">Flex item 3</div>
  </div>
  <div className="d-flex flex-row-reverse highlighted">
    <div className="p-2 highlighted">Flex item 1</div>
    <div className="p-2 highlighted">Flex item 2</div>
    <div className="p-2 highlighted">Flex item 3</div>
  </div>
</div>
`

export const FlexColumn = `
<div>
  <div className="d-flex flex-column highlighted mb-3">
    <div className="p-2 highlighted">Flex item 1</div>
    <div className="p-2 highlighted">Flex item 2</div>
    <div className="p-2 highlighted">Flex item 3</div>
  </div>
  <div className="d-flex flex-column-reverse highlighted">
    <div className="p-2 highlighted">Flex item 1</div>
    <div className="p-2 highlighted">Flex item 2</div>
    <div className="p-2 highlighted">Flex item 3</div>
  </div>
</div>
`

export const FlexJustifyContent = `
<div>
  <div className="d-flex justify-content-start">...</div>
  <div className="d-flex justify-content-end">...</div>
  <div className="d-flex justify-content-center">...</div>
  <div className="d-flex justify-content-between">...</div>
  <div className="d-flex justify-content-around">...</div>
</div>
    `

export const FlexAlignItems = `
<div>
  <div className="d-flex align-items-start">...</div>
  <div className="d-flex align-items-end">...</div>
  <div className="d-flex align-items-center">...</div>
  <div className="d-flex align-items-baseline">...</div>
  <div className="d-flex align-items-stretch">...</div>
</div>
    `

export const FlexAlignSelf = `
<div>
  <div className="align-self-start">Aligned flex item</div>
  <div className="align-self-end">Aligned flex item</div>
  <div className="align-self-center">Aligned flex item</div>
  <div className="align-self-baseline">Aligned flex item</div>
  <div className="align-self-stretch">Aligned flex item</div>
</div>
    `

export const FlexFill = `

<div className="d-flex highlighted">
  <div className="p-2 flex-fill highlighted">Flex item with a lot of content</div>
  <div className="p-2 flex-fill highlighted">Flex item</div>
  <div className="p-2 flex-fill highlighted">Flex item</div>
</div>
    `

export const FlexGrowShrink = `
<div className="d-flex bd-highlight">
  <div className="p-2 flex-grow-1 bd-highlight">Flex item</div>
  <div className="p-2 bd-highlight">Flex item</div>
  <div className="p-2 bd-highlight">Third flex item</div>
</div>
    `

export const FlexShrink = `
<div className="d-flex bd-highlight">
  <div className="p-2 w-100 bd-highlight">Flex item</div>
  <div className="p-2 flex-shrink-1 bd-highlight">Flex item</div>
</div>
    `

export const FlexAutoMargins = `
<div>
  <div className="d-flex highlighted mb-3">
    <div className="p-2 highlighted">Flex item</div>
    <div className="p-2 highlighted">Flex item</div>
    <div className="p-2 highlighted">Flex item</div>
  </div>

  <div className="d-flex highlighted mb-3">
    <div className="mr-auto p-2 highlighted">Flex item</div>
    <div className="p-2 highlighted">Flex item</div>
    <div className="p-2 highlighted">Flex item</div>
  </div>

  <div className="d-flex highlighted mb-3">
    <div className="p-2 highlighted">Flex item</div>
    <div className="p-2 highlighted">Flex item</div>
    <div className="ml-auto p-2 highlighted">Flex item</div>
  </div>
</div>
    `

export const FlexWithAlignItems = `
<div>
  <div
    className="d-flex align-items-start flex-column highlighted mb-3"
    style="height: 200px"
  >
    <div className="mb-auto p-2 highlighted">Flex item</div>
    <div className="p-2 highlighted">Flex item</div>
    <div className="p-2 highlighted">Flex item</div>
  </div>

  <div
    className="d-flex align-items-end flex-column highlighted mb-3"
    style="height: 200px"
  >
    <div className="p-2 highlighted">Flex item</div>
    <div className="p-2 highlighted">Flex item</div>
    <div className="mt-auto p-2 highlighted">Flex item</div>
  </div>
</div>
`

export const FlexWrap = `

<div className="d-flex flex-nowrap">
  ...
</div>
    `

export const FlexOrder = `
<div className="d-flex flex-nowrap highlighted">
  <div className="order-3 p-2 highlighted">First flex item</div>
  <div className="order-2 p-2 highlighted">Second flex item</div>
  <div className="order-1 p-2 highlighted">Third flex item</div>
</div>
`

export const FlexAlignContent = `
<div className="d-flex align-content-start flex-wrap">
  <div className="p-2 highlighted">Flex item</div>
  <div className="p-2 highlighted">Flex item</div>
  <div className="p-2 highlighted">Flex item</div>
  <div className="p-2 highlighted">Flex item</div>
  <div className="p-2 highlighted">Flex item</div>
  <div className="p-2 highlighted">Flex item</div>
  <div className="p-2 highlighted">Flex item</div>
  <div className="p-2 highlighted">Flex item</div>
  <div className="p-2 highlighted">Flex item</div>
  <div className="p-2 highlighted">Flex item</div>
  <div className="p-2 highlighted">Flex item</div>
  <div className="p-2 highlighted">Flex item</div>
  <div className="p-2 highlighted">Flex item</div>
  <div className="p-2 highlighted">Flex item</div>
  <div className="p-2 highlighted">Flex item</div>
</div>
`
