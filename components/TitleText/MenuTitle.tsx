import { MenuTitleButton } from '@/components';
import * as Style from './Title.style.js';

export default function MenuTitle({ title }: { title: string }) {
  return (
    <Style.Container>
      <span>{title}</span>
      {title !== '전체' && <MenuTitleButton title={title} />}
    </Style.Container>
  );
}
