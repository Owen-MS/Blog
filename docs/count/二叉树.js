const root = {
  value: 'A',
  left: {
    value: 'B',
    right: {
      value: 'E'
    },
    left: {
      value: 'D'
    }
  },
  right: {
    value: 'C',
    right: {
      value: 'F'
    }
  }
}

// 先序遍历
function preorder(root) {
  if (!root) return;
  console.log('先序遍历-当前遍历:', root.value);
  preorder(root.left);
  preorder(root.right);
}

// preorder(root);

// 中序遍历
function inorder(root) {
  if (!root) return;
  inorder(root.left);
  console.log('中序遍历：', root.value);
  inorder(root.right);
}

// inorder(root);

// 后序遍历
function postorder(root) {
  if(!root) return ;
  postorder(root.left);
  postorder(root.right);
  console.log('后序遍历：', root.value);
}
postorder(root);
