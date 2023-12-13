export function checkToken(component: boolean): boolean {
  if (typeof window === 'undefined') return false;
  if (window.localStorage.getItem('sign-in') || window.localStorage.getItem('sign-up')) return true;
  return false;
}
