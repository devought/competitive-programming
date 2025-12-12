import { ListNode } from "..";

export const reverseList = function (head: ListNode | null) {
	let previous = null;
	while (head) {
		const temp: ListNode | null = head.next;
		head.next = previous;
		previous = head;
		head = temp;
	}
	return previous;
};

export const getListLength = function (head: ListNode | null) {
	if (!head) {
		return 0;
	}

	let currentNode: ListNode | null = head;
	let length = 0;

	while (currentNode) {
		length++;
		currentNode = currentNode.next;
	}

	return length;
};
