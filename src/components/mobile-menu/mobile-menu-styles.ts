import styled from "styled-components";

const MobileMenuBackdrop = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 100vh;
  z-index: 2;
  width: 100%;
  user-select: none;
  -moz-user-select: none;
  background: rgba(21, 21, 21, 0.4);
  backdrop-filter: blur(8px);
  overflow-y: auto;
`;

const MobileMenuItemsRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  background: ${(props) => props.theme.colors.background.primary};
`;

const MobileMenuIconRoot = styled.div`
  display: flex;
`;

const MobileMenuIcon = styled.button`
  display: flex;
  justify-content: center;
`;

const MobileMenuItemRoot = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.6rem;
  line-height: 2.8rem;
  color: #f2f2f2;
  margin: 1rem 0;
`;

const MobileMenuSubItemRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 2rem;
`;

const MobileMenuSubTitleRoot = styled.div`
  display: flex;
  flex-direction: column;
`;

const MobileMenuSubTitle = styled.span`
  color: #ffffff;
  font-size: 1.4rem;
  line-height: 1.8rem;
`;

const MobileMenuSubDescription = styled.span`
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: #a1a1a1;
`;

const MobileMenuOpenButton = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
`;

export const MobMenu = {
  Button: MobileMenuOpenButton,
  Backdrop: MobileMenuBackdrop,
  Icon: {
    Root: MobileMenuIconRoot,
    Button: MobileMenuIcon,
  },
  Items: {
    Root: MobileMenuItemsRoot,
  },
  Item: {
    Root: MobileMenuItemRoot,
    Sub: {
      Root: MobileMenuSubItemRoot,
      Title: {
        Root: MobileMenuSubTitleRoot,
        Text: MobileMenuSubTitle,
        Description: MobileMenuSubDescription,
      },
    },
  },
};
