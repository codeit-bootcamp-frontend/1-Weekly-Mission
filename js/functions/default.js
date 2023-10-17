/**
 * 파라미터로 받은 대상함수를 첫번째 인자를 받아 클로저로 저장하고 이후 인자가 입력되도록 함수를 반환합니다.
 * const c = curry( f( a , b ) );
 * c(a) === (b) => f(a,b);
 * c(a)(b) === f(a,b);
 * @param {Function} f - 대상함수
 */
export const curry = f =>
  /**
   * 
   * @param {*} a - 첫번째 인자
   * @param  {...any} _ - 이후에 들어올 인자를 rest Parameter로 선언하여 length를 확인함.
   */
  (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

// curry의 변형버전. 2개의 인자를 먼저 받아 클로저로 저장하고, 이후 인자가 입력되면 호출됨.
export const curryTwo = f =>
  (a, b, ..._) => _.length ? f(a, b, ..._) : (..._) => f(a, b, ..._);


// Array 이외의 자료형에서도 사용할 수 있는 reduce 함수
/**
 * @param {Function} f - reduce에 적용할 함수
 * @param {iterable} acc - 연산을 시작할 초기값
 * @param {iterable} iter - 순회를 돌며 연산할 자료
 */
const reduce = curry((f, acc, iter) => {
  // acc를 입력하지 않을때, acc값을 설정해주기
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  } else {
    iter = iter[Symbol.iterator]();
  }
  return function recur(acc) {
    for (const a of iter) {
      acc = f(acc, a);
      // 동기적 코드는 callstack 내에서 해결하고,
      // Promise 객체는 Promise 체이닝으로 해결하도록 return문을 설계
      if (a instanceof Promise) return a.then(recur)
    }
    return acc;
  }(acc)
})

/**
 * 첫번째 인자로 값을 받고, 해당 값을 다음 인자의 함수로 전달하여 인자로 전달한 함수들의 연속 작동이 일어나는 함수
 * go(1, f, g) === g(f(1))  
 * @param  {(iterable, ...Function)} args - 값과 연속적으로 실행할 함수들을 rest Parameter로 받아옴. reduce 함수의 작동 대상, iter가 됨.
 * @returns 첫번째 인자 값이 초기값 acc로 설정되어 reduce 함수가 호출됨
 */
export const go = (...args) =>
  reduce((a, f) => { if (a === null) return a; return f(a) }, args);

/**
 * 인자로 받은 순서대로 함수를 합성하는 함수
 * @param {Function} f 첫번째 함수
 * @param  {...Function} fs  나머지 함수
 * @returns 인자를 받으면 go를 이용해서 연쇄 호출, 실행
 */
export const pipe = (f, ...fs) =>
  (...as) => go(f(...as), ...fs)