import styled from "styled-components";

export const Wrapper = styled.div`

  color: transparent;
  font-size: 90px;
  overflow: hidden;
  width: 10.8rem;
  height: 7.8rem;
  transform: translate(-50%, -50%);
      animation: lds-heart 3s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}
@keyframes lds-heart {
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
`;
export const Container = styled.div`
  backdrop-filter: blur(5px);
  z-index: 9999;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100vh;
`;
