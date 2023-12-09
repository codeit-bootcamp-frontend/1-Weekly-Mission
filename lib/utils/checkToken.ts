import { useRouter } from 'next/router';

export function checkToken(component: boolean): boolean {
  const router = useRouter();

  if (typeof window === 'undefined') return false;
  if (window.localStorage.getItem('sign-in') || window.localStorage.getItem('sign-up')) {
    if (component) return true;
    router.push('/folder');
  }
  return false;
}
