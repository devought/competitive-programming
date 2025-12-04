export {
	gcd,
	gcds,
	lcm,
	lcms,
	isPrime,
	generatePrimes,
	primesUntil,
	primeFactors,
	equals,
	getSum,
	getSquareSum,
	getCubeSum,
	fib,
	isPowerOfTwo,
	nextPowerOfTwo,
	isPowerOfFour,
	evenSum,
	oddSum,
	countSetBits,
} from "./algorithms/numbers";

export {
	isDigit,
	isLowercase,
	isUppercase,
	isLetter,
	isSpecialChar,
	isPalindrome,
	isAnagram,
	isPermutation,
	capitalize,
	filterDuplicates,
} from "./algorithms/strings";

export {
	countOccurence,
	deepEqual,
	isPrimitive,
	sameType,
} from "./algorithms/general";

export {
	isMonotonic,
	isSorted,
	search,
	hasDuplicates,
	swap,
	subsets,
} from "./algorithms/array";

export { Vector__ } from "./data-structures/vector";
export { Stack__ } from "./data-structures/stack";
export { Queue__ } from "./data-structures/queue";
export { Deque__ } from "./data-structures/deque";
export { Heap__ } from "./data-structures/heap";
export { UnionFind__ } from "./data-structures/union-find";
export { LRUCache__ } from "./data-structures/lru-cache";

export const MOD = 1_000_000_007;

export const ALPHABET_SIZE = 26;
export const UPPERCASE_ASCII_START = 65;
export const UPPERCASE_ASCII_END = 90;
export const LOWERCASE_ASCII_START = 97;
export const LOWERCASE_ASCII_END = 122;

export const SPECIAL_CHARS = new Set([
	33, 35, 36, 37, 38, 40, 41, 42, 43, 45, 64, 94,
]);

export const DIRS = [
	[0, 1],
	[1, 0],
	[0, -1],
	[-1, 0],
];

export class ListNode {
	val: number;
	next: ListNode | null;

	constructor(val?: number, next?: ListNode) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

export class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;

	constructor(val?: number, left?: TreeNode, right?: TreeNode) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

export class RandomNode {
	val: number;
	next: RandomNode | null;
	random: RandomNode | null;

	constructor(val?: number, next?: RandomNode, random?: RandomNode) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
		this.random = random === undefined ? null : random;
	}
}

export class GraphNode {
	val: number;
	neighbors: GraphNode[];

	constructor(val?: number, neighbors?: GraphNode[]) {
		this.val = val === undefined ? 0 : val;
		this.neighbors = neighbors === undefined ? [] : neighbors;
	}
}

export class DoubleNode {
	key: number;
	value: number;
	previous: DoubleNode | null = null;
	next: DoubleNode | null = null;

	constructor(key: number, value: number) {
		this.key = key;
		this.value = value;
	}
}
