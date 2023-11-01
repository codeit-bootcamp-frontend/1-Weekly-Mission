import styled from "styled-components";

export const LargeLinkDiv = styled.div`
  display: flex;
  gap: 0.75rem;
  width: 100%;
  max-width: 50rem;
  height: 4.3125rem;
  padding: 1rem 1.25rem;
  margin: 2.5rem 0rem;
  border-radius: 0.9375rem;
  background-color: #fff;
  font-size: 1rem;
  line-height: 1.5rem;

  @media (max-width: 1123px) {
    max-width: 44rem;
  }

  @media (max-width: 767px) {
    gap: 0.5rem;
    width: 100%;
    max-width: 20.3125rem;
    height: 3.3125rem;
    padding: 0.5rem 0.63rem;
    margin: 2.5rem 0rem;
    border-radius: 0.9375rem;
    font-size: 0.875rem;
  }
`;

export const SmallLinkDiv = styled(LargeLinkDiv)`
  gap: 0.5rem;
  width: 100%;
  max-width: 20.3125rem;
  height: 3.3125rem;
  padding: 0.5rem 0.63rem;
  margin: 2.5rem 0rem;
  border-radius: 0.9375rem;
  font-size: 0.875rem;
`;

export const LinkInput = styled.input`
  flex-grow: 1;
  border: none;
  background: transparent;
`;

const SIZES = {
  large: 1.25,
  small: 1,
};

export const LinkImg = styled.img`
  width:${({ size }) => SIZES[size]}
  height:${({ size }) => SIZES[size]}
`;
