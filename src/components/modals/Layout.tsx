import styles from './Modal.module.css';
import { ReactNode } from 'react';
import ModalPortals from './ModalPortals';
import { IconClose } from '@/public/svgs';

interface Props {
  children: ReactNode;
  closeModal: () => void;
}

function Layout({ children, closeModal }: Props) {
  return (
    <ModalPortals>
      <div onClick={closeModal} className={styles['dim-container']}>
        <section
          onClick={(e) => e.stopPropagation()}
          className={styles['modal-container']}
        >
          <button onClick={closeModal} className={styles['close-button']}>
            <IconClose />
          </button>
          {children}
        </section>
      </div>
    </ModalPortals>
  );
}

export default Layout;
