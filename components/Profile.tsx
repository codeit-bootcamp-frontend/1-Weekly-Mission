import * as N from '../style/styled-component/Nav/NavStyledComponent';
import { LoginState } from './Nav';

interface ProfileProps {
  item: LoginState;
}

export default function Profile({ item }: ProfileProps) {
  return (
    <N.ProfileDiv>
      <N.ProfileDivLogo>
        {item.id ? (
          <N.ProfileHumanImg src={item.profileImageSource} alt="profileImg" />
        ) : (
          <N.ProfileHumanImg src={item.image_source} alt="profileImg" />
        )}
      </N.ProfileDivLogo>
      {item.id ? (
        <N.ProfileDivMail>{item.email}</N.ProfileDivMail>
      ) : (
        <N.ProfileDivMail>{item.email}</N.ProfileDivMail>
      )}
    </N.ProfileDiv>
  );
}
