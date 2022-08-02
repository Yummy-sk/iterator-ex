/**
 * 일반적인 제너레이터 함수
 *
 * 제너레이터는 이터레이터이자 이터러블을 생성하는 함수를 말한다.
 *
 * 제너레이터를 만들려면 '제너레이터 함수’라 불리는 특별한 문법 구조,
 * function*이 필요하다.
 */
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
const iterator1 = gen();
console.log(iterator1.next()); // { value: 1, done: false }
console.log(iterator1.next()); // { value: 2, done: false }
console.log(iterator1.next()); // { value: 3, done: false }
console.log(iterator1.next()); // { value: undefined, done: true }

/**
 * 제너레이터 순회
 */

function* gen() {
  yield 1;
  yield 2;
  yield 3;
  return 100;
}

const iterator2 = gen();

console.log(iterator2.next()); // { value: 1, done: false }
console.log(iterator2.next()); // { value: 2, done: false }
console.log(iterator2.next()); // { value: 3, done: false }
console.log(iterator2.next()); // { value: 100, done: true }

for (const a of gen()) console.log(a); // 1, 2, 3 여기서 과연 return 값을 받을 수 있을까?

/**
 * 제너레이터는 어떠한 값이든 순회 가능하다.
 */

function* gen() {
  yield { name: 'a' };
  yield { name: 'b' };
  yield { name: 'c' };
  return 100;
}

const iterator3 = gen();

for (const a of gen()) console.log(a);
// { name: 'a' }
// { name: 'b' }
// { name: 'c' }

/**
 * 제너레이터 무한 루프
 */

function* Infinite(i = 0) {
  while (true) {
    yield i++;
  }
}

const iterator4 = gen(10);
console.log(iterator4.next());
console.log(iterator4.next());
console.log(iterator4.next());
console.log(iterator4.next());

/**
 * 제너레이터 홀수 순회
 */

function* gen(num) {
  for (let i = 0; i < num; i++) {
    if (i % 2) yield i;
  }
}

const iterator5 = gen(10);
console.log(iterator5.next()); // { value: 1, done: false }
console.log(iterator5.next()); // { value: 3, done: false }
console.log(iterator5.next()); // { value: 5, done: false }
console.log(iterator5.next()); // { value: 7, done: false }
console.log(iterator5.next()); // { value: 9, done: false }
console.log(iterator5.next()); // { value: undefined, done: true }
