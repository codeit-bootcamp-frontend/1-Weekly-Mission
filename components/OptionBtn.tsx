import Image from 'next/image';
import { ReactNode } from 'react';

interface Props {
  src: any;
  alt: string;
  children: ReactNode;
}

function OptionBtn({ src, alt, children, onClick }: Props): JSX.Element {
  return (
    <div className="container">
      <Image src={src} alt={alt} fill />
      <button className="button" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default OptionBtn;
