import styled from "styled-components"

export const TreeViewBasic = `
<div style={{width: "400px"}}>
  <TreeView nodeId={0} id="basic">
    <TreeViewItem nodeId={7} label="Inbox">
      <TreeViewItem nodeId={8} label="Personal"></TreeViewItem>
      <TreeViewItem nodeId={9} label="Work"></TreeViewItem>
      <TreeViewItem
        nodeId={10}
        label="Community"
      ></TreeViewItem>
      <TreeViewItem nodeId={11} label="Social"></TreeViewItem>
      <TreeViewItem nodeId={12} label="Friends"></TreeViewItem>
      <TreeViewItem nodeId={14} label="More ..."></TreeViewItem>
    </TreeViewItem>
    <TreeViewItem nodeId={15} label="Sent">
      <TreeViewItem nodeId={16} label="Mail1"></TreeViewItem>
      <TreeViewItem nodeId={17} label="Mail2"></TreeViewItem>
      <TreeViewItem nodeId={18} label="Mail3"></TreeViewItem>
    </TreeViewItem>
    <TreeViewItem nodeId={1} label="Archived">
      <TreeViewItem nodeId={2} label="Folder1">
        <TreeViewItem nodeId={3} label="File1"></TreeViewItem>
        <TreeViewItem nodeId={4} label="Folder2">
          <TreeViewItem nodeId={5} label="File2"></TreeViewItem>
        </TreeViewItem>
        <TreeViewItem nodeId={6} label="File3"></TreeViewItem>
      </TreeViewItem>
    </TreeViewItem>
    <TreeViewItem nodeId={19} label="Spam"></TreeViewItem>
  </TreeView>
</div>

`

export const TreeViewBorderless = `
<div style={{width: "400px"}}>
  <TreeView nodeId={0} id="borderless" className="list-group-borderless">
    <TreeViewItem nodeId={7} label="Inbox">
      <TreeViewItem nodeId={8} label="Personal"></TreeViewItem>
      <TreeViewItem nodeId={9} label="Work"></TreeViewItem>
      <TreeViewItem
        nodeId={10}
        label="Community"
      ></TreeViewItem>
      <TreeViewItem nodeId={11} label="Social"></TreeViewItem>
      <TreeViewItem nodeId={12} label="Friends"></TreeViewItem>
      <TreeViewItem nodeId={14} label="More ..."></TreeViewItem>
    </TreeViewItem>
    <TreeViewItem nodeId={15} label="Sent">
      <TreeViewItem nodeId={16} label="Mail1"></TreeViewItem>
      <TreeViewItem nodeId={17} label="Mail2"></TreeViewItem>
      <TreeViewItem nodeId={18} label="Mail3"></TreeViewItem>
    </TreeViewItem>
    <TreeViewItem nodeId={1} label="Archived">
      <TreeViewItem nodeId={2} label="Folder1">
        <TreeViewItem nodeId={3} label="File1"></TreeViewItem>
        <TreeViewItem nodeId={4} label="Folder2">
          <TreeViewItem nodeId={5} label="File2"></TreeViewItem>
        </TreeViewItem>
        <TreeViewItem nodeId={6} label="File3"></TreeViewItem>
      </TreeViewItem>
    </TreeViewItem>
    <TreeViewItem nodeId={19} label="Spam"></TreeViewItem>
  </TreeView>
</div>

`

export const TreeViewMultiSelect = `
<div style={{width: "400px"}}>
  <TreeView nodeId={0} id="multiselect"  multiSelectCheckBox>
    <TreeViewItem nodeId={1} label="Layout">
      <TreeViewItem nodeId={2} label="Main Layout">
        <TreeViewItem nodeId={3} label="Header"></TreeViewItem>
        <TreeViewItem nodeId={4} label="Body">
          <TreeViewItem
            nodeId={5}
            label="Section"
          ></TreeViewItem>
        </TreeViewItem>
        <TreeViewItem nodeId={6} label="Footer"></TreeViewItem>
      </TreeViewItem>
    </TreeViewItem>
    <TreeViewItem nodeId={7} label="UI Elements">
      <TreeViewItem nodeId={8} label="Accordion"></TreeViewItem>
      <TreeViewItem nodeId={9} label="Alerts"></TreeViewItem>
      <TreeViewItem nodeId={10} label="Badges"></TreeViewItem>
      <TreeViewItem
        nodeId={11}
        label="Breadcrumbs"
      ></TreeViewItem>
      <TreeViewItem nodeId={12} label="Buttons"></TreeViewItem>
      <TreeViewItem nodeId={13} label="Cards"></TreeViewItem>
      <TreeViewItem nodeId={14} label="More ..."></TreeViewItem>
    </TreeViewItem>
    <TreeViewItem nodeId={15} label="Patterns">
      <TreeViewItem nodeId={16} label="Events"></TreeViewItem>
      <TreeViewItem nodeId={17} label="State"></TreeViewItem>
      <TreeViewItem nodeId={18} label="Styles"></TreeViewItem>
    </TreeViewItem>
    <TreeViewItem
      nodeId={19}
      label="Configuration"
    ></TreeViewItem>
  </TreeView>
</div>
`

export const TreeViewCondensed = `
<div style={{width: "400px"}}>
  <TreeView nodeId={0} id="condensed" size="sm">
    <TreeViewItem nodeId={1} label="Layout">
      <TreeViewItem nodeId={2} label="Main Layout">
        <TreeViewItem nodeId={3} label="Header"></TreeViewItem>
        <TreeViewItem nodeId={4} label="Body">
          <TreeViewItem
            nodeId={5}
            label="Section"
          ></TreeViewItem>
        </TreeViewItem>
        <TreeViewItem nodeId={6} label="Footer"></TreeViewItem>
      </TreeViewItem>
    </TreeViewItem>
    <TreeViewItem nodeId={7} label="UI Elements">
      <TreeViewItem nodeId={8} label="Accordion"></TreeViewItem>
      <TreeViewItem nodeId={9} label="Alerts"></TreeViewItem>
      <TreeViewItem nodeId={10} label="Badges"></TreeViewItem>
      <TreeViewItem
        nodeId={11}
        label="Breadcrumbs"
      ></TreeViewItem>
      <TreeViewItem nodeId={12} label="Buttons"></TreeViewItem>
      <TreeViewItem nodeId={13} label="Cards"></TreeViewItem>
      <TreeViewItem nodeId={14} label="More ..."></TreeViewItem>
    </TreeViewItem>
    <TreeViewItem nodeId={15} label="Patterns">
      <TreeViewItem nodeId={16} label="Events"></TreeViewItem>
      <TreeViewItem nodeId={17} label="State"></TreeViewItem>
      <TreeViewItem nodeId={18} label="Styles"></TreeViewItem>
    </TreeViewItem>
    <TreeViewItem
      nodeId={19}
      label="Configuration"
    ></TreeViewItem>
  </TreeView>
</div>
`

export const TreeViewWithItemIcon = `
function TreeViewWithIcon() {
  const [expanded, setExpanded] = React.useState([1])
  const [selected, setSelected] = React.useState([])

  const handleExpansion = React.useCallback((event, nodesExpanded) => {
    setExpanded(nodesExpanded)
  }, [])
  const handleSelection = React.useCallback((event, nodesSelected) => {
    setSelected(nodesSelected)
  }, [])
  const isExpanded = nodeId => expanded.indexOf(nodeId) > -1
  const isSelected = nodeId => selected.indexOf(nodeId) > -1

  const CustomTreeViewItem = ({ nodeId, label, ...props }) => {
    const labelNode = (
      <div className="d-flex justify-content-between w-100">
        <div>{label}</div>
        <div>{isSelected(nodeId) && <i className="modus-icons">check</i>}</div>
      </div>
    )
      return (
        <TreeViewItem
          nodeId={nodeId}
          label={labelNode}
          itemIcon={<i className="material-icons">email</i>}
        ></TreeViewItem>
      )
  }

  return (
    <div style={{width: "400px"}}>
      <TreeView nodeId={0} id="withIcons" onNodeToggle={handleExpansion} onNodeSelect={handleSelection} defaultExpanded={[1]}>
        <TreeViewItem
          nodeId={1}
          label="Inbox"
          itemIcon={<i className="material-icons">folder</i>}
        >
          <CustomTreeViewItem nodeId={4} label="Personal" />
          <CustomTreeViewItem nodeId={5} label="Work" />
          <CustomTreeViewItem nodeId={3} label="Community" />
          <CustomTreeViewItem nodeId={2} label="Social" />
          <CustomTreeViewItem nodeId={6} label="Friends" />
          <CustomTreeViewItem nodeId={8} label="More ..." />
        </TreeViewItem>
      </TreeView>
    </div>
  )
}
render(<TreeViewWithIcon />);`

export const StyledIcon = styled("i")`
  line-height: 0.8 !important;
  top: 0 !important;
  position: relative !important;
  display: inline-block !important;
`

export const TreeViewWithActionBar = `
const ActionBarButton = ({ icon, tooltip, disabled, onClick, ...props }) => {
  return (
    <button
      className="btn btn-icon-only btn-text-dark"
      data-toggle="tooltip"
      data-placement="top"
      disabled={disabled}
      title={tooltip}
      onClick={onClick}
    >
      <StyledIcon className="material-icons">{icon}</StyledIcon>
    </button>
  )
}

const CustomTreeViewItem = ({
  nodeId,
  isNew,
  label,
  children,
  onNodeAdd,
  onNodeEdit,
  onChange,
  isNodeEditable,
  ...props
}) => {
  const isEditable = isNodeEditable(nodeId)

  const handleOnKeyUp = e => {
    if (e.key === "Enter" || e.keyCode === 13) {
      if (isNew) onNodeAdd(e, nodeId, e.target.value)
      else if (isEditable) onNodeEdit(e, nodeId, e.target.value)
    } else {
      onChange(e, nodeId, e.target.value)
    }
  }

  if (isNew) {
    return (
      <li className="list-group-item list-item-leftright-control">
        <i className="modus-icons">blank</i>
        <Form.Control
          as="input"
          autoFocus
          onFocus={e => {}} // to retain the focus
          onKeyDown={handleOnKeyUp}
          size="lg"
          className="border-0"
          defaultValue={label}
        ></Form.Control>
      </li>
    )
  }
  return (
      <TreeViewItem
        nodeId={nodeId}
        label={
          isEditable ? (
            <Form.Control
              as="input"
              autoFocus
              onFocus={e => {}} // to retain the focus
              onKeyDown={handleOnKeyUp}
              onClick={e => e.stopPropagation()}
              size="lg"
              className="border-0"
              defaultValue={label}
            ></Form.Control>
          ) : (
            label
          )
        }
        {...props}
      >
        {children &&
          children.map(item => (
            <CustomTreeViewItem
              nodeId={item.nodeId}
              children={item.children}
              label={item.label}
              isNew={item.isNew}
              onNodeAdd={onNodeAdd}
              onNodeEdit={onNodeEdit}
              onChange={onChange}
              isNodeEditable={isNodeEditable}
              key={item.nodeId}
            />
          ))}
      </TreeViewItem>
  )
}

function TreeViewWithActionBar() {
  const [data, setData] = React.useState([
    {
      nodeId: 1,
      label: "Inbox",
      children: [
        { nodeId: 2, label: "Personal" },
        { nodeId: 3, label: "Work" },
        { nodeId: 4, label: "Community" },
        { nodeId: 5, label: "Social" },
        { nodeId: 6, label: "Friends" },
        { nodeId: 7, label: "More..." },
      ],
    },
    {
      nodeId: 8,
      label: "Archived",
      children: [
        {
          nodeId: 9,
          label: "Folder1",
          children: [
            {
              nodeId: 10,
              label: "Folder2",
              children: [{ nodeId: 13, label: "File1" }],
            },
            { nodeId: 11, label: "File2" },
          ],
        },
        { nodeId: 12, label: "File3" },
      ],
    },
  ])

  const [expanded, setExpanded] = React.useState([])
  const [selected, setSelected] = React.useState([])
  const forceUpdate = useForceUpdate()
  const ref = React.useRef(null)
  const editableNode = React.useRef(null)

  const handleClickOutside = e => {
    if (
      ref.current &&
      !ref.current.contains(e.target) &&
      editableNode.current
    ) {
      setData(prevData => {
        let newData = updateNodes(
          [...prevData],
          editableNode.current,
          (nodeIndex, nodes) => {
            if (nodes[nodeIndex].isNew) {
              nodes.splice(nodeIndex, 1, {
                ...nodes[nodeIndex],
                nodeId: editableNode.current,
                ...{ isNew: undefined },
              })
            }
          }
        )

        editableNode.current = null
        return newData
      })
    }
  }

  useEffect(() => {
    if (!(typeof window === "undefined" || !window.document)) {
      window.document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      if (!(typeof window === "undefined" || !window.document)) {
        window.document.removeEventListener("mousedown", handleClickOutside)
      }
    }
  }, [])

  // Action Bar Handlers
  const handleExpandAllClick = () => {
    setExpanded(oldExpanded =>
      oldExpanded.length === 0 ? getNodeIds(data) : []
    )
  }

  const handleAddClick = () => {
    const newNodeId = getNodeIds(data).length + 1
    editableNode.current = newNodeId
    setData(prevState => {
      const nodeId = selected[0] || prevState[0].nodeId
      const newNode = {
        nodeId: newNodeId,
        label: "",
        isNew: true,
        children: [],
      }
      return updateNodes([...prevState], nodeId, (nodeIndex, nodes) =>
        nodes.splice(nodeIndex, 0, newNode)
      )
    })
  }

  const handleDuplicateClick = () => {
    const newNodeId = getNodeIds(data).length + 1;
    editableNode.current = newNodeId;
    setData((prevState) => {
      const nodeId = selected[0];
      return updateNodes([...prevState], nodeId, (nodeIndex, nodes) => {
        let copy = JSON.parse(JSON.stringify(nodes[nodeIndex]));
        if (copy.children) {
          updateIdsForDuplicate(copy.children, newNodeId);
        }
        nodes.splice(nodeIndex + 1, 0, {
          ...copy,
          label: 'Copy of ' + copy.label,
          nodeId: newNodeId,
        });
      });
    });
  };

  const handleEditClick = event => {
    editableNode.current = selected[0]
    forceUpdate()
  }

  const handleDeleteClick = event => {
    const nodeId = selected[0]
    setData(prevState => {
      return updateNodes([...prevState], nodeId, (nodeIndex, nodes) =>
        nodes.splice(nodeIndex, 1)
      )
    })
    setSelected([])
  }

  // Tree View Handlers
  const handleAddNode = (event, nodeId, label) => {
    editableNode.current = null
    setData(prevState => {
      return updateNodes([...prevState], nodeId, (nodeIndex, nodes) =>
        nodes.splice(nodeIndex, 1, {
          ...nodes[nodeIndex],
          nodeId,
          ...{ label, isNew: undefined },
        })
      )
    })
  }

  const handleEditNode = (event, nodeId, label) => {
    editableNode.current = null
    handleTreeItemLabelChange(event, nodeId, label)
  }

  const handleTreeItemLabelChange = (event, nodeId, label) => {
    setData(prevState => {
      return updateNodes([...prevState], nodeId, (nodeIndex, nodes) =>
        nodes.splice(nodeIndex, 1, { ...nodes[nodeIndex], nodeId, label })
      )
    })
  }

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds)
  }

  const isNodeEditable = useCallback(
    nodeId => editableNode.current === nodeId,
    [editableNode.current]
  )

  // Helpers
  function getNodeIds(array) {
    return array.reduce((r, { nodeId, children }) => {
      r.push(nodeId, ...(children ? getNodeIds(children) : []))
      return r
    }, [])
  }

  function updateNodes(nodes, nodeId, action) {
    if (!nodes) return nodes
    let nodeIndex = findIndex(nodes, node => node.nodeId === nodeId)
    if (nodeIndex >= 0) {
      action(nodeIndex, nodes)
    } else {
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].children = updateNodes(nodes[i].children, nodeId, action)
      }
    }
    return nodes
  }

  function updateIdsForDuplicate(nodes, incrementFrom) {
    let nextIncrementFrom = incrementFrom;
    for (let i = 0; i < nodes.length; i++) {
      nextIncrementFrom = nextIncrementFrom + 1;
      nodes[i].nodeId = nextIncrementFrom;

      if (nodes[i].children)
        nextIncrementFrom = updateIdsForDuplicate(
          nodes[i].children,
          nextIncrementFrom,
        );
    }
    return nextIncrementFrom;
  }

  return (
    <div style={{ width: "400px" }}>
      <div className="container" ref={ref}>
        <div className="row row-cols-1">
          <div className="col">
            <div
              className="d-flex justify-content-end align-items-center"
              style={{ minHeight: "3rem" }}
            >
              <ActionBarButton
                icon="delete"
                tooltip="Delete"
                onClick={handleDeleteClick}
                disabled={!selected.length}
              />
              <ActionBarButton
                icon="content_copy"
                disabled={!selected.length}
                onClick={handleDuplicateClick}
                tooltip="Duplicate"
              />
              <ActionBarButton
                icon="edit"
                onClick={handleEditClick}
                disabled={!selected.length || editableNode.current}
                tooltip="Edit"
              />
              <ActionBarButton
                icon="add"
                onClick={handleAddClick}
                disabled={editableNode.current || !data || !data.length}
                tooltip="Add"
              />
              <ActionBarButton icon="drag_indicator" disabled tooltip="Drag" />
              <ActionBarButton
                icon={expanded.length === 0 ? "unfold_more" : "unfold_less"}
                tooltip={expanded.length === 0 ? "Expand" : "Collapse"}
                onClick={handleExpandAllClick}
                disabled={!data || !data.length}
              />
            </div>
          </div>
          <div className="col">
            <TreeView
              nodeId={0}
              id="example"
              expanded={expanded}
              onNodeSelect={handleSelect}
            >
              {data.map(item => (
                <CustomTreeViewItem
                  nodeId={item.nodeId}
                  children={item.children}
                  label={item.label}
                  isNew={item.isNew}
                  onNodeAdd={handleAddNode}
                  onNodeEdit={handleEditNode}
                  onChange={handleTreeItemLabelChange}
                  isNodeEditable={isNodeEditable}
                  key={item.nodeId}
                />
              ))}
            </TreeView>
          </div>
        </div>
      </div>
    </div>
  )
}


render(<TreeViewWithActionBar />);
`

export const TreeViewWithFilter = `
const CustomTreeViewItem = ({
  nodeId,
  label,
  children,
  ...props
}) => {
  return (
    <>
      <TreeViewItem nodeId={nodeId} label={label} {...props}>
        {children &&
          children.map(item => (
            <CustomTreeViewItem
              nodeId={item.nodeId}
              children={item.children}
              label={item.label}
              key={item.nodeId}
            />
          ))}
      </TreeViewItem>
    </>
  )
}

const ActionBarButton = ({ icon, tooltip, disabled, onClick, ...props }) => {
  return (
    <button
      className="btn btn-icon-only btn-text-dark"
      data-toggle="tooltip"
      data-placement="top"
      disabled={disabled}
      title={tooltip}
      onClick={onClick}
    >
      <StyledIcon className="material-icons">{icon}</StyledIcon>
    </button>
  )
}

function TreeViewWithFilter() {
  const initialData = [
    {
      nodeId: 1,
      label: "Inbox",
      children: [
        { nodeId: 2, label: "Personal" },
        { nodeId: 3, label: "Work" },
        { nodeId: 4, label: "Community" },
        { nodeId: 5, label: "Social" },
        { nodeId: 6, label: "Friends" },
        { nodeId: 7, label: "More..." },
      ],
    },
    {
      nodeId: 8,
      label: "Archived",
      children: [
        {
          nodeId: 9,
          label: "Folder1",
          children: [
            {
              nodeId: 10,
              label: "Folder2",
              children: [{ nodeId: 13, label: "File1" }],
            },
            { nodeId: 11, label: "File2" },
          ],
        },
        { nodeId: 12, label: "File3" },
      ],
    },
  ]
  const [data, setData] = React.useState(initialData)
  const [expanded, setExpanded] = React.useState([])

  // Action Bar Handlers
  const handleExpandAllClick = () => {
    setExpanded(oldExpanded =>
      oldExpanded.length === 0 ? getNodeIds(data) : []
    )
  }

  const handleFilter = event => {
    setExpanded(getNodeIds(initialData))
    if (!event.target.value) {
      setData(initialData)
      return
    }

    let ancestors = []
    const flatData = flattenData(initialData, null)
    const searchText = event.target.value.toLowerCase()
    const searchResult = Object.keys(flatData)
      .filter(key => {
        return flatData[key].label.toLowerCase().indexOf(searchText) > -1
      })
      .map(i => Number(i))

    searchResult.forEach(i => {
      let { parentId } = flatData[i]
      while (parentId != null) {
        ancestors.push(parentId)
        parentId = flatData[parentId].parentId
      }
    })
    setData(
      filterData([...initialData], [...searchResult, ...ancestors], searchText)
    )
  }

  // Helpers
  function flattenData(array, parentId) {
    if (!array) return []
    return array.reduce((r, { nodeId, label, children }) => {
      r[nodeId] = { nodeId, label, parentId }
      r = { ...r, ...flattenData(children, nodeId) }
      return r
    }, [])
  }

  function filterData(nodes, searchResult, searchText, skip) {
    if (!nodes || !searchResult || searchResult.length === 0 || !searchText)
      return []
    let removeNodes = []
    nodes.forEach((node, i) => {
      if (searchResult.indexOf(node.nodeId) > -1) {
        let skipNode = false
        if (node.label.toLowerCase().indexOf(searchText) > -1) {
          node.label = <div style={{ color: "#0063a3" }}>{node.label}</div>
          skipNode = true
        }
        node.children = filterData(
          node.children,
          searchResult,
          searchText,
          skipNode
        )
      } else {
        if (!skip) removeNodes.push(node.nodeId)
      }
    })
    return nodes.filter(node => !removeNodes.includes(node.nodeId))
  }

  function getNodeIds(array) {
    return array.reduce((r, { nodeId, children }) => {
      r.push(nodeId, ...(children ? getNodeIds(children) : []))
      return r
    }, [])
  }

  return (
    <div style={{ width: "400px" }}>
      <div className="container">
        <div className="row row-cols-1">
          <div className="col">
            <div>
              <div className="input-with-icon-left">
                <FormControl
                  as="input"
                  placeholder="Search"
                  onChange={handleFilter} className="form-control-lg"
                ></FormControl>
                <div className="input-icon">
                  <i className="modus-icons material-icons">search</i>
                </div>
              </div>
            </div>
            <div
              className="d-flex justify-content-end align-items-center"
              style={{ minHeight: "3rem" }}
            >
             <ActionBarButton icon="delete" disabled tooltip="Delete" />
              <ActionBarButton icon="content_copy" disabled tooltip="Duplicate"/>
              <ActionBarButton icon="edit" disabled tooltip="Edit"/>
              <ActionBarButton icon="add" disabled tooltip="Add"/>
              <ActionBarButton icon="drag_indicator" disabled tooltip="Drag" />
              <ActionBarButton
                icon={expanded.length === 0 ? "unfold_more" : "unfold_less"}
                tooltip={expanded.length === 0 ? "Expand" : "Collapse"}
                onClick={handleExpandAllClick}
              />
            </div>
          </div>
          <div className="col">
            <TreeView nodeId={0}  id="example" expanded={expanded}>
              {data.map(item => (
                <CustomTreeViewItem
                  nodeId={item.nodeId}
                  children={item.children}
                  label={item.label}
                  key={item.nodeId}
                />
              ))}
            </TreeView>
          </div>
        </div>
      </div>
    </div>
  )
}

render(<TreeViewWithFilter />);
`
export const TreeViewWithDragDrop = `
const disabledNodes = [14]
const CustomTreeViewItem = ({
  nodeId,
  isNew,
  label,
  parentIds,
  children,
  onNodeAdd,
  onNodeEdit,
  onChange,
  registerTreeItem,
  unRegisterTreeItem,
  handleMouseDown,
  draggable: draggableProp,
  ...props
}) => {
  const showDragIcon = useRef(false);
  const ref = useRef(null);
  const forceUpdate = useForceUpdate();
  const isDisabled = disabledNodes.includes(nodeId);

  const handleMouseEnter = useCallback(
    (e) => {
      showDragIcon.current = true;
      forceUpdate();
    },
    [showDragIcon],
  );
  const handleMouseLeave = useCallback(
    (e) => {
      showDragIcon.current = false;
      forceUpdate();
    },
    [showDragIcon],
  );

  useEffect(() => {
    if (ref.current) {
      const treeItemDiv = ref.current.firstChild;
      treeItemDiv.addEventListener('mouseenter', handleMouseEnter);
      treeItemDiv.addEventListener('mouseleave', handleMouseLeave);
    }
  }, [ref, handleMouseEnter, handleMouseLeave]);

  useEffect(() => {
    registerTreeItem(
      {
        nodeId,
        label,
        draggable: draggableProp && !isDisabled,
        droppable: !isDisabled,
        parentIds,
      },
      ref.current,
    );
    return () => {
      unRegisterTreeItem(nodeId);
    };
  }, [nodeId, label, draggableProp, isDisabled, ref.current]);

  return (
    <TreeViewItem
      nodeId={nodeId}
      label={label}
      {...props}
      ref={ref}
      disabled={isDisabled}
      dragIcon={
        !isDisabled && (draggableProp || showDragIcon.current) ? (
          <i
            className="material-icons"
            onMouseDown={(e) => handleMouseDown(e, { nodeId, label })}
          >
            drag_indicator
          </i>
        ) : undefined
      }
    >
      {children &&
        children.map((item) => (
          <CustomTreeViewItem
            nodeId={item.nodeId}
            children={item.children}
            parentIds={[...(parentIds || []), nodeId]}
            label={item.label}
            key={item.nodeId}
            registerTreeItem={registerTreeItem}
            unRegisterTreeItem={unRegisterTreeItem}
            handleMouseDown={handleMouseDown}
            draggable={draggableProp}
          />
        ))}
    </TreeViewItem>
  );
};

const ActionBarButton = ({ icon, tooltip, disabled, onClick, ...props }) => {
  return (
    <button
      className="btn btn-icon-only btn-text-dark"
      data-toggle="tooltip"
      data-placement="top"
      disabled={disabled}
      title={tooltip}
      onClick={onClick}
    >
      <StyledIcon className="material-icons">{icon}</StyledIcon>
    </button>
  )
}

function TreeViewWithDrag() {
  const POSITION = { x: 0, y: 0 }
  const initialData = [
    {
      nodeId: 1,
      label: "Inbox",
      children: [
        { nodeId: 2, label: "Personal" },
        { nodeId: 3, label: "Work" },
        { nodeId: 4, label: "Community" },
        { nodeId: 5, label: "Social" },
        { nodeId: 6, label: "Friends" },
        { nodeId: 7, label: "More..." },
      ],
    },
    {
      nodeId: 8,
      label: "Archived",
      children: [
        {
          nodeId: 9,
          label: "Folder1",
          children: [
            {
              nodeId: 10,
              label: "Folder2",
              children: [{ nodeId: 13, label: "File1" }],
            },
            { nodeId: 11, label: "File2" },
          ],
        },
        { nodeId: 12, label: "File3" },
      ],
    },
    {
      nodeId: 14,
      label: "Disabled Node",
    },
  ]
  const [data, setData] = useState(initialData)
  const [drag, setDrag] = useState(false)
  const [expanded, setExpanded] = useState([])
  const forceUpdate = useForceUpdate()

  const draggingState = useRef({
    isDragging: false,
    origin: POSITION,
    translation: POSITION,
    width: "0px",
    height: "0px",
    node: null,
  })
  const droppingState = useRef({ node: null, validTarget: null })
  const treeItemRefs = useRef([])
  const bodyRef = useRef(null)

  // Callbacks
  const registerTreeItem = (node, ref) => {
    treeItemRefs.current.push({ ...node, ref })
  }

  const unRegisterTreeItem = nodeId => {
    treeItemRefs.current = treeItemRefs.current.filter(
      node => node.nodeId !== nodeId
    )
  }

  // Action Bar Handlers
  const handleExpandAllClick = () => {
    setExpanded(oldExpanded =>
      oldExpanded.length === 0 ? getNodeIds(data) : []
    )
  }
  const handleDrag = useCallback(event => {
    setDrag(prevState => !prevState)
  }, [])

  // Drag and Drop
  const handleMouseDown = (event, node) => {
    const { clientX, clientY, target } = event
    const prevState = draggingState.current

    clearDroppingState()
    draggingState.current = {
      ...prevState,
      isDragging: true,
      origin: { x: clientX, y: clientY },
      node,
      width:
        (target && target.offsetParent && target.offsetParent.width) || "400px",
      height:
        (target && target.offsetParent && target.offsetParent.height) || "40px",
    }
    forceUpdate()
  }

  const handleMouseMove = useCallback(
    ({ clientX, clientY }) => {
      const translation = {
        x: clientX,
        y: clientY,
      }
      const prevState = draggingState.current
      const dropNode = getDroppableNode(clientX, clientY)

      clearDroppingState()
      draggingState.current = {
        ...prevState,
        translation,
      }
      if (dropNode) {
        droppingState.current.node = dropNode
        if (
          dropNode.droppable &&
          !(dropNode.parentIds && dropNode.parentIds.includes(draggingState.current.node.nodeId))
        ) {
          droppingState.current.validTarget = true
          dropNode.ref.classList.add("drop-allow")
        } else {
          droppingState.current.validTarget = false
          dropNode.ref.classList.add("drop-block")
        }
      }
      forceUpdate()
    },
    [draggingState.current.origin]
  )

  const handleMouseUp = useCallback(event => {
    const prevDragState = draggingState.current
    if (
      droppingState.current.validTarget &&
      droppingState.current.node &&
      draggingState.current.node
    ) {
      const dropNode = droppingState.current.node.nodeId
      const dragNode = draggingState.current.node.nodeId
      if (dropNode !== dragNode) {
        setData(prevState => {
          let dragNodeOriginal = {}
          const newData = updateNodes(
            [...prevState],
            dragNode,
            (nodeIndex, nodes) => {
              dragNodeOriginal = nodes[nodeIndex]
              nodes.splice(nodeIndex, 1)
            }
          )
          return updateNodes(newData, dropNode, (nodeIndex, nodes) =>
            nodes.splice(nodeIndex, 0, dragNodeOriginal)
          )
        })
      }
    }
    draggingState.current = {
      ...prevDragState,
      isDragging: false,
    }
  }, [])

  // Helpers
  function getNodeIds(array) {
    return array.reduce((r, { nodeId, children }) => {
      r.push(nodeId, ...(children ? getNodeIds(children) : []))
      return r
    }, [])
  }
  function updateNodes(nodes, nodeId, action) {
    if (!nodes) return nodes
    let nodeIndex = findIndex(nodes, node => node.nodeId === nodeId)
    if (nodeIndex >= 0) {
      action(nodeIndex, nodes)
    } else {
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].children = updateNodes(nodes[i].children, nodeId, action)
      }
    }
    return nodes
  }
  function getDroppableNode(x, y) {
    const node = treeItemRefs.current.find(({ nodeId, ref }) => {
      const rect = ref.getBoundingClientRect()
      if (rect) {
        const inVerticalBounds = y >= rect.top && y <= rect.bottom
        const inHorizontalBounds = x >= rect.left && x <= rect.right
        return inVerticalBounds && inHorizontalBounds
      }
      return false
    })
    return node
  }
  function clearDroppingState() {
    if (droppingState.current.node) {
      droppingState.current.node.ref.classList.remove("drop-allow")
      droppingState.current.node.ref.classList.remove("drop-block")
      droppingState.current.validTarget = null
    }
    droppingState.current.node = null
  }

  // Style
  const dragItemStyle = useMemo(
    () => ({
      width: draggingState.current.width,
      height: draggingState.current.height,
      transform:
        "translate(calc(" +
        draggingState.current.translation.x +
        "px - 10%), calc(" +
        draggingState.current.translation.y +
        "px - 50%))",
      msTransform:
        "translateX(" +
        draggingState.current.translation.x +
        "px) translateX(-10%) translateY(" +
        draggingState.current.translation.y +
        "px) translateY(-50%)",
      zIndex: 1000,
      left: 0,
      top: 0,
      cursor: draggingState.current.isDragging
        ? "-webkit-grabbing"
        : "-webkit-grab",
    }),
    [draggingState.current]
  )

  useEffect(() => {
    bodyRef.current = document.body
  }, [])

  useEffect(() => {
    if (draggingState.current.isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
    } else {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)

      const prevState = draggingState.current
      draggingState.current = {
        ...prevState,
        translation: POSITION,
        node: null,
      }
      clearDroppingState()
      forceUpdate()
    }
  }, [draggingState.current.isDragging])

  return (
    <div style={{ width: "400px" }}>
      <div className="container">
        <div className="row row-cols-1">
          <div className="col">
            <div
              className="d-flex justify-content-end align-items-center"
              style={{ minHeight: "3rem" }}
            >
              <ActionBarButton icon="delete" disabled tooltip="Delete"/>
              <ActionBarButton icon="content_copy" disabled tooltip="Duplicate"/>
              <ActionBarButton icon="edit" disabled tooltip="Edit"/>
              <ActionBarButton icon="add" disabled tooltip="Add"/>
              <ActionBarButton icon="drag_indicator" tooltip="Drag" onClick={handleDrag}
              />
              <ActionBarButton
                icon={expanded.length === 0 ? "unfold_more" : "unfold_less"}
                tooltip={expanded.length === 0 ? "Expand" : "Collapse"}
                onClick={handleExpandAllClick}
              />
            </div>
          </div>
          <div className="col">
            <TreeView nodeId={0}  id="example" expanded={expanded} multiSelectNode>
              <StyledCustomTreeViewItem>
                {data.map(item => (
                  <CustomTreeViewItem
                    nodeId={item.nodeId}
                    children={item.children}
                    label={item.label}
                    key={item.nodeId}
                    registerTreeItem={registerTreeItem}
                    unRegisterTreeItem={unRegisterTreeItem}
                    handleMouseDown={handleMouseDown}
                    draggable={drag}
                  />
                ))}
              </StyledCustomTreeViewItem>
            </TreeView>
          </div>
        </div>
      </div>
      {draggingState.current.isDragging &&
        bodyRef.current &&
        createPortal(
          <StyledDragItem
            className="list-group d-inline-block position-fixed"
            style={dragItemStyle}
          >
            <li
              className={classNames(
                "list-group-item list-item-left-control",
                droppingState.current.validTarget ? "drop-allow" : "drop-block"
              )}
            >
              <div className="d-flex align-items-center">
                <i className="material-icons" style={{ fontSize: "1rem" }}>
                  drag_indicator
                </i>
              </div>
              <div className="d-flex align-items-center">
                {draggingState.current.node
                  ? draggingState.current.node.label
                  : ""}
              </div>
            </li>
          </StyledDragItem>,
          bodyRef.current
        )}
    </div>
  )
}
render(<TreeViewWithDrag />);
`

export const StyledDragItem = styled.div`
  opacity: 0.9;
  li {
    :hover {
      background: white;
    }
    &.drop-allow {
      border: 2px dashed #0063a3 !important;
    }
    &.drop-block {
      border: 2px dashed red !important;
    }
  }
`
export const StyledCustomTreeViewItem = styled.div`
  li {
    &.drop-allow {
      border-top: 2px solid #0063a3 !important;
    }
    &.drop-block {
      border-top: 2px solid red !important;
    }
  }
`
