export const EmbedBasic = `
<div className="embed-responsive embed-responsive-16by9">
  <iframe className="embed-responsive-item" src='/video' title="Trimble video" loading="lazy"></iframe>
</div>
    `

export const EmbedAspectRatios = `
<div className="embed-responsive embed-responsive-16by9">
  <!-- 21:9 aspect ratio -->
  <div className="embed-responsive embed-responsive-21by9">
    <iframe className="embed-responsive-item" src="..."></iframe>
  </div>

  <!-- 16:9 aspect ratio -->
  <div className="embed-responsive embed-responsive-16by9">
    <iframe className="embed-responsive-item" src="..."></iframe>
  </div>

  <!-- 4:3 aspect ratio -->
  <div className="embed-responsive embed-responsive-4by3">
    <iframe className="embed-responsive-item" src="..."></iframe>
  </div>

  <!-- 1:1 aspect ratio -->
  <div className="embed-responsive embed-responsive-1by1">
    <iframe className="embed-responsive-item" src="..."></iframe>
  </div>
</div>
`
