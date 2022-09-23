export const BadgesRegular = `
<div>
  <Badge variant="primary" className="mr-2">
    Primary
  </Badge>
  <Badge variant="secondary" className="mr-2">
    Secondary
  </Badge>
  <Badge variant="tertiary" className="mr-2">
    Tertiary
  </Badge>
  <Badge variant="dark" className="mr-2">
    Dark
  </Badge>
  <Badge variant="success" className="mr-2">
    Success
  </Badge>
  <Badge variant="warning" className="mr-2">
    Warning
  </Badge>
  <Badge variant="danger" className="mr-2">
    Danger
  </Badge>
</div>`
export const BadgesText = `
<div>
  <Badge variant="text-primary">Primary</Badge>
  <Badge variant="text-secondary">Secondary</Badge>
  <Badge variant="text-dark">Dark</Badge>
  <Badge variant="text-success">Success</Badge>
  <Badge variant="text-danger">Danger</Badge>
</div>`
export const BadgesCounter = `
<div>
  <Badge pill variant="primary" className="mr-2">
    1
  </Badge>
  <Badge pill variant="secondary" className="mr-2">
    2
  </Badge>
  <Badge pill variant="tertiary" className="mr-2">
    3
  </Badge>
  <Badge pill variant="dark" className="mr-2">
    4
  </Badge>
  <Badge pill variant="success" className="mr-2">
    5
  </Badge>
  <Badge pill variant="danger" className="mr-2">
    6
  </Badge>
  <Badge pill variant="warning">
    7
  </Badge>
</div>`
export const BadgesInOtherElements = `
<div className="bd-example">
  <Button variant="outline-primary">
    Button <Badge variant="primary">9</Badge>
    <span className="sr-only">unread messages</span>
  </Button>
  <Button variant="primary">
    Button <Badge variant="text-tertiary">9</Badge>
    <span className="sr-only">unread messages</span>
  </Button>

  <ul className="mt-3 list-group">
    <li className="list-group-item d-flex justify-content-between align-items-center">
      List with Badge
      <Badge pill variant="primary">
        14
      </Badge>
    </li>
  </ul>
  <ul className="mt-3 list-group">
    <li className="list-group-item d-flex justify-content-between align-items-center">
      List with Text Badge
      <Badge pill variant="text-primary">
        14
      </Badge>
    </li>
  </ul>
</div>`
export const BadgesSizes = `
<div>
  <Badge className="badge-sm mr-2" variant="primary">
    Small
  </Badge>
  <Badge variant="primary" className="mr-2">
    Default
  </Badge>
  <Badge className="badge-lg mr-2" variant="primary">
    Large
  </Badge>
</div>`
