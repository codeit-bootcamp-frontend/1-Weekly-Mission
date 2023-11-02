import styled from "styled-components";
import closeIcon from "../../assets/images/modal-close.png";

const StyledModal = styled.div`
    width: 100vw;
    height: 100vw;
    top: 0;
    position: fixed;
    color: #fff;
    background-color: #000;
    opacity: 0.4;
    z-index: 1;
`;

const StyledModalBox = styled.div`
    display: flex;
    width: 360px;
    height: 240px;
    position: fixed;
    padding: 32px 40px;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    background-color: #fff;
    border-radius: 15px;
    border: 1px solid #ccd5e3;
    top: 20vw;
    z-index: 2;
`;

const StyledModalTitle = styled.div`
    color: #373740;
    font-size: 20px;
    font-weight: 700;
`;

const StyledModalContent = styled.div`
    display: flex;
    gap: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
        width: 280px;
        padding: 18px 15px;
        border-radius: 8px;
        border: 1px solid #ccd5e3;
        &::placeholder {
            color: #9fa6b2;
        }
    }
`;

const StyledModalButton = styled.div`
    width: 280px;
    padding: 16px 20px;
    border-radius: 8px;
    background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
    color: #f5f5f5;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    position: relative;
`;

const StyledModalClose = styled.img`
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
`;

function Edit() {
    return (
        <>
            <StyledModalTitle>폴더 이름 변경</StyledModalTitle>
            <StyledModalContent>
                <input placeholder="유용한 팁" />
                <StyledModalButton>변경하기</StyledModalButton>
            </StyledModalContent>
        </>
    );
}

function Modal() {
    return (
        <>
            <StyledModal></StyledModal>
            <StyledModalBox>
                <StyledModalClose src={closeIcon} alt="closeIcon" />
                <Edit />
            </StyledModalBox>
        </>
    );
}

export default Modal;
