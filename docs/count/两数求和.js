const nums = [2, 7, 11, 15]
const target = 9;

function sum(nums, target) {
  const map = new Map();
  for (let item of nums) {
    const num = target - item;
    if (map.has(num)) {
      return [map.get(num), item];
    }
    map.set(item, item);
  }
}

// console.log(sum(nums, target))


// 双指针

const nums1 = [1, 2, 3, 0, 0, 0], m = 3;
const nums2 = [2, 5, 6], n = 3
const merge = function (nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, k = m + n - 1
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i];
      i--;
      k--;
    } else {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
};
merge(nums1, m, nums2, n);


