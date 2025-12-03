import { SPECIAL_CHARS } from "..";

export const isDigit = function (n: string) {
	const ascii = n.charCodeAt(0);
	return ascii >= 48 && ascii <= 57;
};

export const isLowercase = function (n: string) {
	const ascii = n.charCodeAt(0);
	return ascii >= 97 && ascii <= 122;
};

export const isUppercase = function (n: string) {
	const ascii = n.charCodeAt(0);
	return ascii >= 65 && ascii <= 90;
};

export const isLetter = function (n: string) {
	return isLowercase(n) || isUppercase(n);
};

export const isSpecialChar = function (n: string) {
	return SPECIAL_CHARS.has(n.charCodeAt(0));
};

export const capitalize = function (s: string) {
	if (!s.length || !isLetter(s[0]) || isUppercase(s[0])) return s;
	const chars = Array.from(s);
	chars[0] = chars[0].toUpperCase();
	return chars.join("");
};

export function palindrome(s: string | number): boolean {
	const helper = (s: string) => {
		const len = s.length;
		for (let i = 0; i < len / 2; i++) {
			if (s[i] !== s[len - 1 - i]) return false;
		}
		return true;
	};
	if (typeof s === "string") {
		return helper(s);
	}
	if (typeof s === "number") {
		return helper(String(s));
	}
	return false;
}

export const anagram = function (s: string, t: string) {
	if (s.length !== t.length) return false;
	const map = new Map<string, number>();
	for (let i = 0; i < s.length; i++) {
		map.set(s[i], (map.get(s[i]) ?? 0) + 1);
		map.set(t[i], (map.get(t[i]) ?? 0) - 1);
	}
	for (let [_, v] of map) {
		if (v !== 0) return false;
	}
	return true;
};

export function filterDuplicates(str: string, sorted: boolean = false) {
	const chars = new Set(str);
	return sorted
		? Array.from(chars).sort().join("")
		: Array.from(chars).join("");
}
