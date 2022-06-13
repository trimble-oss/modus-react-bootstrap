/** Credit:
 *  https://github.com/reach/reach-ui/blob/86a046f54d53b6420e392b3fa56dd991d9d4e458/packages/descendants/README.md
 *  Modified to suit our purposes.
 *
 */

/**
 * useTreeViewDescendants:
 * A custom hook to enable TreeViewItem to
 *  - maintain details about its descendants
 *  - update the state in parent TreeViewItem or root TreeView
 */

import {
  useState,
  useContext,
  useRef,
  useCallback,
  useEffect,
  useMemo,
} from "react"
import {
  findIndex as _findIndex,
  every as _every,
  merge as _merge,
} from "lodash"
import TreeViewItemContext from "./TreeViewItemContext"
import { TreeItem } from "./types"

type DescendantProviderParam = {
  nodeId: number
  element: any
  hasCheckBoxSelected?: (nodeId: number) => boolean
  handleCheckboxSelection?: (
    event: any,
    selected?: number[],
    unselected?: number[]
  ) => void
}

export default function useTreeViewDescendants({
  nodeId,
  element,
  hasCheckBoxSelected,
  handleCheckboxSelection,
}: DescendantProviderParam) {
  const registeredChildren = useRef<TreeItem[]>([])
  const hasRegisteredFlag = useRef(false)

  // will be -1 until the node is registered in the parent
  const [index, setIndex] = useState(-1)

  // descendant context methods from the parent node if any
  const treeItemContext = useContext(TreeViewItemContext)
  const {
    parentId,
    level,
    registerDescendant: registerOnParent,
    unRegisterDescendant: unRegisterOnParent,
    updateDescendant: updateParent,
    updateCheckboxSelection: updateCheckboxSelectionOnParent,
  } = treeItemContext || {}

  const descendants = useMemo(
    () => registeredChildren.current,
    [registeredChildren.current]
  )

  useEffect(() => {
    if (registerOnParent && element) {
      hasRegisteredFlag.current = true
      const newIndex = registerOnParent(
        nodeId,
        registeredChildren.current,
        element
      )
      setIndex(newIndex)
    }
    return () => {
      unRegisterOnParent && unRegisterOnParent(nodeId)
    }
  }, [registerOnParent, unRegisterOnParent, setIndex, element])

  const registerDescendant = useCallback(
    (id, children, descendantElement) => {
      let newIndex = -1

      if (registeredChildren.current) {
        let newItems = registeredChildren.current
        let oldIndex = _findIndex(newItems, node => node.id === id)

        // new index based on DOM position
        newIndex = binaryFindElement(newItems, descendantElement)

        // If the descendant already exist, delete it and insert at the new index
        if (oldIndex >= 0) {
          newItems.splice(oldIndex, 1)
        }
        newItems.splice(newIndex, 0, {
          id,
          children,
          parentId: nodeId,
          index: newIndex,
          element: descendantElement,
        })
        newItems.forEach((item, position) => {
          item.index = position
        })
        registeredChildren.current = newItems

        if (updateParent && hasRegisteredFlag.current) {
          updateParent(nodeId, registeredChildren.current, element)
        }
      }
      return newIndex
    },
    [registeredChildren.current, nodeId, updateParent]
  )

  const unRegisterDescendant = useCallback(
    id => {
      if (registeredChildren.current) {
        registeredChildren.current = registeredChildren.current.filter(
          node => node.id !== id
        )
        registeredChildren.current.forEach((item, position) => {
          item.index = position
        })
      }
    },
    [registeredChildren.current]
  )

  const updateDescendant = useCallback(
    (id, children, descendantElement) => {
      if (registeredChildren.current) {
        let currentIndex = _findIndex(
          registeredChildren.current,
          node => node.id === id
        )
        let newIndex =
          currentIndex < 0 ? registeredChildren.current.length : currentIndex

        registeredChildren.current.splice(newIndex, 1, {
          id,
          children,
          parentId: nodeId,
          index: newIndex,
          element: descendantElement,
        })

        if (updateParent && hasRegisteredFlag.current) {
          updateParent(nodeId, registeredChildren.current, element)
        }
      }
    },
    [
      registeredChildren.current,
      nodeId,
      updateParent,
      hasRegisteredFlag.current,
    ]
  )

  const updateCheckboxSelection = useCallback(
    (event, descendantId, checkedArray, uncheckedArray) => {
      if (registeredChildren.current) {
        const childNodesFiltered = registeredChildren.current
          .map(node => node.id)
          .filter(id => id !== descendantId)

        let finalCheckedArray = [...checkedArray]
        let finalUnCheckedArray = [...uncheckedArray]
        childNodesFiltered.forEach(id => {
          if (hasCheckBoxSelected(id)) finalCheckedArray.push(id)
          else finalUnCheckedArray.push(id)
        })

        // decides whether current node should be in the checked array or unchecked array
        if (finalUnCheckedArray.length > 0) finalUnCheckedArray.push(nodeId)
        else finalCheckedArray.push(nodeId)

        updateCheckboxSelectionOnParent
          ? updateCheckboxSelectionOnParent(
              event,
              nodeId,
              finalCheckedArray,
              finalUnCheckedArray
            )
          : handleCheckboxSelection(
              event,
              finalCheckedArray,
              finalUnCheckedArray
            )
      }
    },
    [
      registeredChildren.current,
      nodeId,
      hasCheckBoxSelected,
      handleCheckboxSelection,
      updateCheckboxSelectionOnParent,
    ]
  )

  function binaryFindElement(array, element) {
    let start = 0
    let end = array.length - 1

    while (start <= end) {
      const middle = Math.floor((start + end) / 2)

      if (array[middle].element === element) {
        return middle
      }

      // eslint-disable-next-line no-bitwise
      if (
        array[middle].element &&
        array[middle].element.compareDocumentPosition(element) &
          Node.DOCUMENT_POSITION_PRECEDING
      ) {
        end = middle - 1
      } else {
        start = middle + 1
      }
    }

    return start
  }
  return {
    parentId,
    level,
    index,
    descendants,
    registerDescendant,
    unRegisterDescendant,
    updateDescendant,
    updateCheckboxSelection,
    updateCheckboxSelectionOnParent,
  }
}
