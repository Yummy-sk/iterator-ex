/**
 * ES6 이전의 순회
 */

// 일반적인 배열 순회
const list1 = [1, 2, 3];
for (let i = 0; i < list1.length; i++) {
  console.log(list1[i]);
}
// 유사배열 순회
const str1 = 'abc';
for (let i = 0; i < str1.length; i++) {
  console.log(str1[i]);
}

/**
 * ES6 이후의 순회
 */

const list2 = [1, 2, 3];

for (const a of list2) {
  console.log(a);
}

const str2 = 'abc';

for (const a of str2) {
  console.log(a);
}

/**
 * Symbol.iterator 는 어떤 객체의 키로 사용될 수 있다.
 *
 * 이를 통해 이터러블 하게 만들어 줄 수 있다.
 *
 * - **이터러블/이터레이터 프로토콜**
 *   - 이터러블 : 이터레이터를 반환하는 `[Symbol.iterator]()`를 가진 값
 *   - 이터레이터 : { value, done } 객체를 리턴하는 next()를 가진 값
 *   - 이터러블/이터레이터 프로토콜 : 이터러블을 `for ... of` 전개 연산자 등과 함께 동작하도록한 규약
 */

const arr = [1, 2, 3];
const iterator1 = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for (const a of arr) console.log(a);

/**
 * set과 map도 이터러블/이터레이터 프로토콜을 따른다.
 */

const set = new Set([1, 2, 3]);
console.log(set[Symbol.iterator]);
for (const a of set) console.log(a);

const map = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
]);
const iterator2 = map.entries();

console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());

/**
 * 사용자 정의 이터러블
 */

const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i === 0 ? { done: true } : { value: i--, done: false };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};

let iterator3 = iterable[Symbol.iterator]();

iterator3.next(); // {value: 3, done: false}

for (const a of iterator3) console.log(a); // 2, 1

/**
 * 전개 연산자 또한 이터러블/이터레이터 프로토콜을 따른다.
 */

const a = [1, 2, 3];
const set1 = new Set([1, 2, 3]);
const map1 = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
]);

a[Symbol.iterator] = null;

console.log(...a, ...set, ...map);
