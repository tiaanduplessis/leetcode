/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function getValues (list) {
  let arr = []
  while (list.next) {
    arr.push(list.val)
    list = list.next
  }
  arr.push(list.val)
  return arr
}

function computeNumbers (arr1, arr2) {
  const newArr = []
  let arr = arr1
  let other = arr2
  let carry = 0

  if (arr1.length < arr2.length) {
    arr = arr2
    other = arr1
  }

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i] + (other[i] || 0) + carry

    if (val > 9) {
      carry = Number.parseInt(val / 10)
      val = val - 10
    } else {
      carry = 0
    }

    newArr.push(val)
  }

  if (carry) {
    newArr.push(carry)
  }

  return newArr
}

function buildList (arr) {
  const firstNode = new ListNode(arr[0])
  arr.slice(1).reduce((acc, cur) => {
    const node = new ListNode(cur)
    acc.next = node
    return acc.next
  }, firstNode)

  return firstNode
}

function addTwoNumbers (l1, l2) {
  const arr1 = getValues(l1)
  const arr2 = getValues(l2)
  return buildList(computeNumbers(arr1, arr2))
}
