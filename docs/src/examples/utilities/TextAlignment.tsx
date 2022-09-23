export const TextBasicAlignment = `
<div>
  <p className="text-left">Left aligned text on all viewport sizes.</p>
  <p className="text-center">Center aligned text on all viewport sizes.</p>
  <p className="text-right">Right aligned text on all viewport sizes.</p>

  <p className="text-sm-left">
    Left aligned text on viewports sized SM (small) or wider.
  </p>
  <p className="text-md-left">
    Left aligned text on viewports sized MD (medium) or wider.
  </p>
  <p className="text-lg-left">
    Left aligned text on viewports sized LG (large) or wider.
  </p>
  <p className="text-xl-left">
    Left aligned text on viewports sized XL (extra-large) or wider.
  </p>
</div>
    `

export const TextWrappingOverflow = `
<div className="badge badge-primary text-wrap" style={{width: "6rem"}}>
  This text should wrap.
</div>
    `

export const TextTransform = `
<div>
  <p className="text-lowercase">Lowercased text.</p>
  <p className="text-uppercase">Uppercased text.</p>
  <p className="text-capitalize">CapiTaliZed text.</p>
</div>
    `

export const TextFont = `
<div>
  <p className="font-weight-bold">Bold text.</p>
  <p className="font-weight-bolder">
    Bolder weight text (relative to the parent element).
  </p>
  <p className="font-weight-normal">Normal weight text.</p>
  <p className="font-weight-light">Light weight text.</p>
  <p className="font-weight-lighter">
    Lighter weight text (relative to the parent element).
  </p>
  <p className="font-italic">Italic text.</p>
</div>
    `

export const TextResetColor = `
<p className="text-muted">
  Muted text with a <a href="#" className="text-reset">reset link</a>.
</p>
    `
