export const ChipsInput = `
<div>
  <Chip
    avatar={<img src={chipImage} alt="" />}
    label="Solid"
    dismissible
    variant="solid"
    type="input"
    className="mr-2"
  ></Chip>
  <Chip
    avatar={<img src={chipImage} alt="" />}
    label="Outline"
    dismissible
    variant="outline"
    type="input"
  ></Chip>
</div>
`

export const ChipsLiveExample = `function Example() {
  const [showSolid, setShowSolid] = useState(true);
  const [showOutline, setShowOutline] = useState(true);

  const handleSolid = () => setShowSolid(!showSolid);
  const handleOutline = () => setShowOutline(!showOutline);

  return (
    <div>
        <Chip
          avatar={<img src={chipImage} alt="" />}
          label="Solid"
          onClose={handleSolid}
          show={showSolid}
          variant="solid"
          type="input"
          className="mr-2"
        ></Chip>
        <Chip
          avatar={<img src={chipImage} alt="" />}
          label="Outline"
          onClose={handleOutline}
          show={showOutline}
          variant="outline"
          type="input"
        ></Chip>
      </div>
  );
}

render(<Example />);`

export const ChipsFilter = `
<div>
  <Chip
    icon={<i className="material-icons">check</i>}
    label="Solid"
    variant="solid"
    type="filter"
    className="mr-2"
  ></Chip>
  <Chip label="Outline" variant="outline" type="filter"></Chip>
</div>
`

export const ChipsSmall = `
<div>
  <Chip
    avatar={<img src={chipImage} alt="" />}
    label="Solid"
    dismissible
    variant="solid"
    type="input"
    size="sm"
    className="mr-2"
  ></Chip>
  <Chip
    avatar={<img src={chipImage} alt="" />}
    label="Outline"
    dismissible
    variant="outline"
    type="input"
    closeIcon={<i className="modus-icon material-icons">cancel</i>}
    size="sm"
    className="mr-2"
  ></Chip>
  <Chip
    icon={<i className="modus-icon material-icons">check</i>}
    label="Solid"
    variant="solid"
    type="filter"
    size="sm"
    className="mr-2 active"
  ></Chip>
  <Chip label="Outline" variant="outline" type="filter" size="sm"></Chip>
</div>
`
