import styled from 'styled-components'
import colors from '../../style/colors'

export const CardContainer = styled.a`
  width: 340px;
  height: 380px;
  flex-shrink: 0;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  text-decoration: none;
  display: block;
  position: relative;

  &:hover {
    border: 2px solid ${colors.primary};

    img {
      transform: scale(1.3);
    }
  }
`

export const CardImageContainer = styled.div`
  overflow: hidden;
  background: #dddfff;
  border-radius: 15px 15px 0 0;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CardImage = styled.img`
  border-radius: ${({ className }) =>
    className === 'no-img-logo' ? '0' : '15px 15px 0 0'};
  width: ${({ className }) => (className === 'no-img-logo' ? '100px' : '100%')};
  height: ${({ className }) => (className === 'no-img-logo' ? '50px' : '100%')};
  
`

export const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 12px;
  
`

export const CardContentAgo = styled.div`
  color: #666;
  font-size: 13px;
  font-weight: 400;
`

export const CardContent = styled.div`
  overflow: hidden;
  color: #000;
  width: 300px;
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`

export const CardContentAt = styled.div`
  color: #333;
  font-size: 14px;
  font-weight: 400;
`
