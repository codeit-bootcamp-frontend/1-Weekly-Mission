import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  padding: 0.8rem 1.2rem;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  border: 0.1rem solid var(--primary);
  background: var(--white);

  &:hover {
    background: var(--gray10);
  }

  &.active {
    background: var(--primary);
    color: var(--white);
  }
`

const SortingButton = ( { isActive = false, handleClick, buttonIndex, children } ) => {

  return (
    <Button 
      onClick={() => handleClick(buttonIndex)} 
      className={isActive ? 'active' : ''}>{children}</Button>
  )
}

export default SortingButton;