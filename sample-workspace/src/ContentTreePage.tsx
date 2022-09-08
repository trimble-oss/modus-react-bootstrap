/* eslint-disable */
// @ts-nocheck\
/**
 * Sample project files only for testing purpose
 * Access components like `import TreeView from '../../lib/TreeView';`
 *
 */
import TreeView from '../../lib/esm/TreeView';
import TreeViewItem from '../../lib/esm/TreeViewItem';

function ContentTreePage() {
  return (
    <div style={{ width: '400px' }}>
      <TreeView
        nodeId={0}
        id="basic"
        checkBoxSelection
        multiSelectCheckBox
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
    </div>
  );
}

export default ContentTreePage;
