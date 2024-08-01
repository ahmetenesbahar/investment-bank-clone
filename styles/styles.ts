import styled from "styled-components";

interface Props {
  justifyContent?: string;
  alignItems?: string;
  padding?: string;
  width?: string;
  color?: string;
  textAlign?: string;
  fontWeight?: string;
  fontSize?: string;
  hover?: boolean;
  responsive?: boolean;
  position?: string;
  checked?: boolean;
  margin?: string;
  gap?: string;
  cursor?: string;
  display?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderRadius?: string;
  border?: string;
  height?: string;
  top?: string;
  visible?: string;
  error?: boolean;
  bottom?: string;
  right?: string;
  left?: string;
  transform?: string;
  isEnglish?: boolean;
  backgroundColor?: string;
  triangleLeft?: string;
  responsiveFull?: boolean;
  triangleRight?: string;
  flexDirection?: string;
  placeholderColor?: string;
  active?: boolean;
  hoverBackground?: string;
  boxShadow?: string;
}

export const Container = styled.div<Props>`
  padding: ${(props) => props.padding || "0"};
  width: ${(props) => props.width || "100%"};
  background-color: ${(props) => props.backgroundColor || "#fff"};
  min-height: 100vh;
  height: auto;
  display: ${(props) => props.display || "block"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  flex-direction: ${(props) => props.flexDirection || "row"};
`;

export const Flex = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  position: ${(props) => props.position || "static"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  padding: ${(props) => props.padding || "0"};
  gap: ${(props) => props.gap || "0"};
  cursor: ${(props) => props.cursor || "auto"};
  height: ${(props) => props.height || "auto"};
  margin: ${(props) => props.margin || "0"};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: ${(props) => props.transform};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  border-top: ${(props) => props.borderTop || "none"};
  border-bottom: ${(props) => props.borderBottom || "none"};
  border-right: ${(props) => props.borderRight || "none"};
  border-left: ${(props) => props.borderLeft || "none"};
  border-radius: ${(props) => props.borderRadius || "0"};
  box-shadow: ${(props) => props.boxShadow || "none"};
  ${(props) =>
    props.responsiveFull &&
    `
      @media (max-width: 1024px) {
        width: 100%;
      }
    `}

    &:hover {
    background-color: ${(props) => props.hoverBackground && "transparent"};
`;

export const LoginSidebarContainer = styled(Container)<Props>`
  width: 305px;
  padding-left: 2rem;

  @media (max-width: 1024px) {
    width: 217px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const FlexColumn = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: ! ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  width: ${(props) => props.width || "auto"};
  gap: ${(props) => props.gap || "1rem"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  border-top: ${(props) => props.borderTop || "none"};
  border-radius: ${(props) => props.borderRadius || "0"};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  position: ${(props) => props.position || "static"};

  ${(props) =>
    props.responsiveFull &&
    `
      @media (max-width: 1024px) {
        width: 100%;
      }
    `}
`;

export const LoginContainer = styled(FlexColumn)<Props>`
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const LoginHeader = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #08335e;
  font-weight: 500;
  font-size: 1.625rem;
  width: 424px;
  text-align: start;
  @media (max-width: 1024px) {
    font-size: 22px;
    margin-top: 2.5rem;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const LoginLogoContainer = styled.div`
  width: 58px;
  height: 112px;
  background-color: #08335e;
  justify-content: center;
  align-items: end;
  padding-bottom: 1rem;
  display: flex;
`;

export const InputLogin = styled.input<Props>`
  border: 1px solid ${(props) => (props.error ? "red" : "#d3d3d3")};
  padding: 1px 2px 1px 15px;
  width: ${(props) => props.width || "424px"};
  height: 42px;
  outline: none;
  margin: ${(props) => props.margin || "0"};

  @media (max-width: 1024px) {
    width: 100%;
  }

  &:hover {
    border: ${(props) =>
      !props.error && props.hover ? "1px solid #94d3e2" : undefined};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Text = styled.p<Props>`
  color: ${(props) => props.color || " #535353"};
  font-size: ${(props) => props.fontSize || "14px;"};
  cursor: ${(props) => props.cursor || "auto"};
  text-align: ${(props) => props.textAlign || "left"};
  font-weight: ${(props) => props.fontWeight || "400"};
`;

export const Button = styled.button<Props>`
  outline: none;
  border: ${(props) => props.border || "none"};
  width: ${(props) => props.width || "auto"};
  color: ${(props) => props.color || "#fff"};
  background-color: ${(props) => props.backgroundColor || "#08335e"};
  padding: ${(props) => props.padding || "0.5rem 1rem"};
  margin: ${(props) => props.margin || "0"};
  font-size: ${(props) => props.fontSize || "14px"};
  font-weight: ${(props) => props.fontWeight || "500"};
  cursor: pointer;

  ${(props) =>
    props.responsiveFull &&
    `
      @media (max-width: 768px) {
        width: 100%;
      }
    `}
`;

export const SecurityBubble = styled.div<Props>`
  max-width: 430px;
  padding: 10px;
  margin-top: 10px;
  background-color: #ebebeb;
  display: ${(props) => props.display || "none"};

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
    display: ${(props) => props.display};
  }
`;

export const HoverBubble = styled.div<Props>`
  max-width: 430px;
  z-index: 1 !important;
  position: absolute !important;
  padding: ${(props) => props.padding || "10px"};
  margin-top: 10px;
  width: ${(props) => props.width || "100%"};
  background-color: ${(props) => props.backgroundColor || "#fafafa"};
  left: ${(props) => props.left || "800px"};
  right: ${(props) => props.right || "0"};
  top: ${(props) => props.top || "0"};
  opacity: 1; /* Başlangıçta görünmez */
  transition: opacity 0.3s ease-in-out;
  visibility: ${(props) => props.visible};
  opacity: 0;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  display: ${(props) => props.display || "none"};

  ${(props) =>
    props.display === "block" &&
    `
    opacity: 1;
    visibility: visible;
  `}
`;

export const HoverBubbleWithTriangle = styled(HoverBubble)<Props>`
  &::before {
    content: "";
    position: absolute;
    top: -20px;
    left: ${(props) => props.triangleLeft || "50%"};
    right: ${(props) => props.triangleRight || "50%"};
    transform: translateX(-50%);
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent
      ${(props) => props.backgroundColor || "#fafafa"} transparent;
  }
`;

export const ListItem = styled.div`
  display: flex;    
  font-size: 13.5px;
  margin-bottom: 5px;
  justify-content: flex-start;
  line-height: 1.5;
  

  
  &::before {
    content: "•"; 
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5px;
    height: 18px;
    font-size: 20px;
    color: #08335e;
    padding-right: 5px;
 
`;

export const Form = styled.form<Props>`
  width: 100%;
`;

export const SwitchContainer = styled.label`
  position: absolute;
  display: flex;
  align-items: center;
  cursor: pointer;
  right: 10px;
  width: 84px;
  height: 24px;
  @media (max-width: 1024px) {
    right: 10px;
  }
`;

export const SwitchInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 1;

  &:checked + span:before {
    transform: translate(60px);
  }

  &:checked + span + label {
    transform: ${(props) =>
      props.checked ? "translate(50px, -50%)" : "translate(0, -50%)"};
    transition: transform 0.4s;
  }
`;

export const SwitchSlider = styled.span<Props>`
  position: relative;
  display: inline-block;
  width: 84px;
  height: 24px;
  background-color: ${(props) => (props.checked ? "#F85931" : "#999999")};
  border-radius: 24px;
  transition: background-color 0.3s;

  &::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    transition: transform 0.3s;
    transform: ${(props) =>
      props.checked ? "translateX(52px)" : "translateX(0)"};
    top: 2px;
    left: 2px;
  }
`;

export const SwitchLabel = styled.label<Props>`
  position: absolute;
  top: 50%;
  left: 4px;
  width: 50px;
  height: 20px;
  line-height: 20px;
  margin-left: ${(props) => (props.isEnglish ? "18px" : "20px")};
  font-size: ${(props) => (props.isEnglish ? "10px" : "13px")};
  font-weight: 500;
  color: white;
  transform: ${(props) =>
    props.checked ? "translate(50px, -50%)" : "translate(0, -50%)"};
  opacity: ${(props) =>
    props.checked ? "0" : "1"}; /* Hide the text when checked */
  transition: transform 0.4s, opacity 0.4s;
`;

export const SwitchLabelLeft = styled(SwitchLabel)<Props>`
  margin-left: ${(props) => (props.isEnglish ? "0" : "3px")};

  transform: ${(props) =>
    props.checked ? "translate(-50px, -50%)" : "translate(0, -50%)"};
  opacity: ${(props) => (props.checked ? "0" : "1")};
  transition: transform 0.4s, opacity 0.4s;
`;

export const HelpBox = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 42px;
  margin-left: 2px;
  background-color: #fafafa;
  z-index: 1;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const HelpImage = styled.img<Props>``;

export const MarginBox = styled(HelpBox)<Props>`
  background-color: transparent;
`;

export const ResponsiveLoginText = styled(Text)<Props>`
  display: none;
  @media (max-width: 1024px) {
    display: block;
  }
`;

export const MobileLoginLogoContainer = styled.img<Props>`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const LoginIcon = styled.img<Props>`
  display: ${(props) => props.display || "block"};

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const Footer = styled.div<Props>``;

export const Link = styled.a<Props>`
  margin: ${(props) => props.margin || "0"};
`;

export const KeyboardDiv = styled.div<Props>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SecondaryHeader = styled.h2<Props>`
  color: ${(props) => props.color || "#08335e"};
  font-weight: ${(props) => props.fontWeight || "500"};
  font-size: ${(props) => props.fontSize || "22px"};
  margin: ${(props) => props.margin || "0"};
  text-align: ${(props) => props.textAlign || "left"};
  border-bottom: ${(props) => props.borderBottom || "none"};
  width: ${(props) => props.width || "100%"};
  padding: ${(props) => props.padding || "0"};
`;

export const SecondaryHeaderForgotPassword = styled(SecondaryHeader)<Props>`
  @media (max-width: 1280px) {
    font-size: 14px;
  }
`;

export const VerticalLine = styled.div<Props>`
  border-right: 1px solid #e5e5e5;
  height: ${(props) => props.height || "100%"};
  margin: ${(props) => props.margin || "0"};
`;

export const ForgotPasswordInput = styled(InputLogin)<Props>`
  @media (max-width: 1024px) {
    max-width: 424px;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ForgotPasswordContainer = styled(Flex)<Props>`
  @media (max-width: 768px) {
    margin: 0;
    margin-top: 2px;
  }
`;

export const SearchBarInput = styled.input<Props>`
  outline: none;
  focus: none;
  border: none;
  width: ${(props) => props.width || "100%"};
  padding: ${(props) => props.padding || "0"};
  font-size: ${(props) => props.fontSize || "14px"};
  &::placeholder {
    color: ${(props) => props.placeholderColor || "#000"};
    font-weight: ${(props) => props.fontWeight || "400"};
  }
`;
export const SearchBarCloseIcon = styled.img<Props>`
  cursor: pointer;
  display: ${(props) => (props.active ? "block" : "none")};
`;

export const Icon = styled.img<Props>`
  position: ${(props) => props.position || "static"};
  right: ${(props) => props.right || "0"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  border-right: ${(props) => props.borderRight || "none"};
  border-left: ${(props) => props.borderLeft || "none"};
  border-top: ${(props) => props.borderTop || "none"};
  border-bottom: ${(props) => props.borderBottom || "none"};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.hoverBackground && "transparent"};
  }
`;

export const FullBorderFlex = styled(Flex)<Props>`
  border: ${(props) => props.border || "none"};
`;

export const NavbarAvatarDiv = styled(Flex)<Props>``;

export const LogoutDiv = styled(Flex)<Props>``;
