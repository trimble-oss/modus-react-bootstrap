import { createContext, useCallback, useContext, useState } from 'react';
import styled from 'styled-components';
import TreeView from './components/TreeView';
import TreeViewItem from './components/TreeViewItem';

// const StyledTreeViewItem = styled.div`
//   position: relative;
//   &.expanded:before {
//     content: '';
//     position: absolute;
//     left: 0;
//     right: 0;
//     width: 0.3rem;
//     height: 100%;
//     z-index: 5;
//     -webkit-box-shadow: inset 0.3rem 0 0 0 #217cbb;
//     -moz-box-shadow: inset 0.3rem 0 0 0 #217cbb;
//     box-shadow: inset 0.3rem 0 0 0 #217cbb;
//   }
// `;

// const TreeViewContext = createContext<number | null>(null);

// const CustomTreeViewItem: React.FunctionComponent<{
//   nodeId: number;
//   label: string;
//   children: any;
// }> = ({ nodeId, label, children, ...props }) => {
//   const expanded = useContext(TreeViewContext);

//   return (
//     <StyledTreeViewItem
//       className={expanded === nodeId ? 'expanded' : undefined}
//     >
//       <TreeViewItem nodeId={nodeId} label={label} {...props}>
//         {children}
//       </TreeViewItem>
//     </StyledTreeViewItem>
//   );
// };

// function App() {
//   const [expanded, setExpanded] = useState<number | null>(null);

//   const handleNodeToggle = useCallback(
//     (event: any, nodes: number[], nodeInFocus: number) => {
//       if (nodes.includes(nodeInFocus)) setExpanded(nodeInFocus);
//       else {
//         const prevExpandedNode = expanded;
//         setExpanded(
//           prevExpandedNode && nodes.includes(prevExpandedNode)
//             ? prevExpandedNode
//             : null,
//         );
//       }
//     },
//     [expanded, setExpanded],
//   );

//   return (
//     <div style={{ width: '400px' }} className="p-5">
//       <TreeViewContext.Provider value={expanded}>
//         <TreeView nodeId={0} id="basic" onNodeToggle={handleNodeToggle}>
//           <div>
//             <CustomTreeViewItem nodeId={7} label="Inbox">
//               <TreeViewItem nodeId={8} label="Personal"></TreeViewItem>
//               <TreeViewItem nodeId={9} label="Work"></TreeViewItem>
//               <TreeViewItem nodeId={10} label="Community"></TreeViewItem>
//               <TreeViewItem nodeId={11} label="Social"></TreeViewItem>
//               <TreeViewItem nodeId={12} label="Friends"></TreeViewItem>
//               <TreeViewItem nodeId={14} label="More ..."></TreeViewItem>
//             </CustomTreeViewItem>
//           </div>

//           <CustomTreeViewItem nodeId={15} label="Sent">
//             <TreeViewItem nodeId={16} label="Mail1"></TreeViewItem>
//             <TreeViewItem nodeId={17} label="Mail2"></TreeViewItem>
//             <TreeViewItem nodeId={18} label="Mail3"></TreeViewItem>
//           </CustomTreeViewItem>
//           <CustomTreeViewItem nodeId={1} label="Archived">
//             <CustomTreeViewItem nodeId={2} label="Folder1">
//               <TreeViewItem nodeId={3} label="File1"></TreeViewItem>
//               <CustomTreeViewItem nodeId={4} label="Folder2">
//                 <TreeViewItem nodeId={5} label="File2"></TreeViewItem>
//               </CustomTreeViewItem>
//               <TreeViewItem nodeId={6} label="File3"></TreeViewItem>
//             </CustomTreeViewItem>
//           </CustomTreeViewItem>
//           <TreeViewItem nodeId={19} label="Spam"></TreeViewItem>
//         </TreeView>
//       </TreeViewContext.Provider>
//     </div>
//   );
// }

function App() {
  return (
    <TreeView
      style={{ width: '400px' }}
      className="p-5"
      nodeId={0}
      id="basic"
      multiSelectNode
    >
      <TreeViewItem nodeId={7} label="Inbox">
        <TreeViewItem nodeId={8} label="Personal"></TreeViewItem>
        <TreeViewItem nodeId={9} label="Work"></TreeViewItem>
        <TreeViewItem nodeId={10} label="Community"></TreeViewItem>
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
  );
}
export default App;
