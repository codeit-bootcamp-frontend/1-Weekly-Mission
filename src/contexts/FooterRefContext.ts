import { RefObject, createContext } from 'react';

const FooterRefContext = createContext<RefObject<HTMLDivElement> | null>(null);

export default FooterRefContext;
