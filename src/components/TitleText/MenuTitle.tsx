import { MenuTitleButton } from '@/src/components';
import * as Style from './MenuTitle.style';

export default function MenuTitle({ title }: { title: string }) {
  return (
    <Style.Container>
      <span>{title}</span>
      {title !== '전체' && <MenuTitleButton title={title} />}
    </Style.Container>
  );
}
