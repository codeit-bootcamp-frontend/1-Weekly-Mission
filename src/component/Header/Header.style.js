import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 192rem;
  width: 100%;
  margin-bottom: 40px;
  background-color: #f0f6ff;

  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: 20px;
  }
`;

export const ContainerProfilePage = styled(Container)`
  padding-top: 2rem;
  padding-bottom: 6rem;
  justify-content: space-between;
  gap: 20px;

  @media ${({ theme }) => theme.device.mobile} {
    padding-top: 1rem;
    padding-bottom: 4rem;
    margin-bottom: 20px;
  }

  p {
    color: #000;
    font-size: 4rem;
    font-weight: 600;
    text-align: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  @media ${({ theme }) => theme.device.mobile} {
    gap: 10px;
  }

  img {
    width: 60px;
    height: 60px;
    width: 100%;
  }
`;
export const ContainerFolderPage = styled(Container)`
  padding-top: 6rem;
  padding-bottom: 9rem;
  width: 100%;

  @media ${({ theme }) => theme.device.tablet} {
    padding-left: 32.5px;
    padding-right: 32.5px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: 24px 32px 40px;
  }
`;
export const LinkSearchBox = styled.div`
  padding: 16px 20px;
  background-color: #fff;
  border-radius: 15px;
  border: 1px solid #6d6afe;
  width: 800px;

  @media ${({ theme }) => theme.device.tablet} {
    width: 704px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding: 10px 8px;
    width: 100%;
  }
`;
export const LinkBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    padding: 10px 16px;
    border-radius: 8px;
    background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
    border: none;
    color: #fff;
  }
`;

export const LinkInputBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;

  input {
    color: #9fa6b2;
    border: none;
    font-size: 1.6rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    gap: 8px;

    img {
      width: 16px;
      height: 16px;
    }
    input {
      font-size: 1.4rem;
    }
  }
`;
