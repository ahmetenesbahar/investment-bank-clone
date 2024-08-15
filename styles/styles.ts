import styled from "styled-components";
import { breakpoints } from "@/utils/constants";
import { colors } from "@/styles/colors";
import { padding } from "@/utils/constants";

interface Props {
  justifyContent?: string;
  alignItems?: string;
  padding?: keyof typeof padding | string;
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
  border?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderRadius?: string;
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
  textTransform?: string;
  hoverColor?: string;
  textDecoration?: string;
  zIndex?: string;
  maxHeight?: string;
  overflow?: string;
}

export const Container = styled.div<Props>`
  padding: ${(props) => props.padding || "0"};
  width: ${(props) => props.width || "100%"};
  background-color: ${(props) => props.backgroundColor || colors.white};
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
  border: ${(props) => props.border || "0"};
  border-top: ${(props) => props.borderTop || "none"};
  border-bottom: ${(props) => props.borderBottom || "none"};
  border-right: ${(props) => props.borderRight || "none"};
  border-left: ${(props) => props.borderLeft || "none"};
  border-radius: ${(props) => props.borderRadius || "0"};
  box-shadow: ${(props) => props.boxShadow || "none"};
  z-index: ${(props) => props.zIndex || "auto"};
  max-height: ${(props) => props.maxHeight || "auto"};
  overflow-y: ${(props) => props.overflow || "visible"};
  ${(props) =>
    props.responsiveFull &&
    `
      @media (max-width: ${breakpoints.lg}px) {
        width: 100%;
      }
    `}

  ${(props) =>
    props.hover &&
    `
      &:hover {
        background-color: ${props.hoverBackground || "transparent"};
      }
    `}
`;

export const LoginSidebarContainer = styled(Container)<Props>`
  width: 19.063rem;
  padding-left: 2rem;

  @media (max-width: ${breakpoints.lg}px) {
    width: 13.563rem;
  }
  @media (max-width: ${breakpoints.md}px) {
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
      @media (max-width: ${breakpoints.lg}px) {
        width: 100%;
      }
    `}
`;

export const LoginContainer = styled(FlexColumn)<Props>`
  @media (max-width: ${breakpoints.lg}px) {
    width: 100%;
  }
`;

export const LoginHeader = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #08335e;
  font-weight: 500;
  font-size: 1.625rem;
  width: 26.5rem;
  text-align: start;
  @media (max-width: ${breakpoints.lg}px) {
    font-size: 1.375rem;
    margin-top: 2.5rem;
  }
  @media (max-width: ${breakpoints.md}px) {
    font-size: 1.125rem;
  }
`;

export const LoginLogoContainer = styled.div`
  width: 3.625rem;
  height: 7rem;
  background-color: #08335e;
  justify-content: center;
  align-items: end;
  padding-bottom: 1rem;
  display: flex;
`;

export const InputLogin = styled.input<Props>`
  border: 0.063rem solid ${(props) => (props.error ? "red" : "#d3d3d3")};
  padding: 0.063rem 0.125rem 0.063rem 0.938rem;
  width: ${(props) => props.width || "26.5rem"};
  height: 2.625rem;
  outline: none;
  margin: ${(props) => props.margin || "0"};

  @media (max-width: ${breakpoints.lg}px) {
    width: 100%;
  }

  &:hover {
    border: ${(props) =>
      !props.error && props.hover ? "0.063rem solid #94d3e2" : undefined};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Text = styled.p<Props>`
  color: ${(props) => props.color || "#535353"};
  font-size: ${(props) => props.fontSize || "0.875rem"};
  cursor: ${(props) => props.cursor || "auto"};
  text-align: ${(props) => props.textAlign || "left"};
  font-weight: ${(props) => props.fontWeight || "400"};
  padding: ${(props) => props.padding || "0"};
  border-bottom: ${(props) => props.borderBottom || "none"};
  border-right: ${(props) => props.borderRight || "none"};
  text-transform: ${(props) => props.textTransform || "none"};
  text-decoration: ${(props) => props.textDecoration || "none"};
  z-index: ${(props) => props.zIndex || "0"};

  ${(props) =>
    props.hover &&
    `
    &:hover {
      color: ${props.hoverColor || colors.black};
      background-color: ${props.hoverBackground || "transparent"};
    }
  `}
`;

export const Button = styled.button<Props>`
  outline: none;
  border: ${(props) => props.border || "none"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  color: ${(props) => props.color || colors.white};
  background-color: ${(props) =>
    props.backgroundColor || colors.loginHeaderBlue};
  padding: ${(props) => props.padding || "0.5rem 1rem"};
  margin: ${(props) => props.margin || "0"};
  font-size: ${(props) => props.fontSize || "0.875rem"};
  font-weight: ${(props) => props.fontWeight || "500"};
  cursor: pointer;

  ${(props) =>
    props.responsiveFull &&
    `
      @media (max-width: ${breakpoints.md}px) {
        width: 100%;
      }
    `}
`;

export const SecurityBubble = styled.div<Props>`
  max-width: 26.875rem;
  padding: 0.625rem;
  margin-top: 0.625rem;
  background-color: #ebebeb;
  display: ${(props) => props.display || "none"};

  @media (max-width: ${breakpoints.lg}px) {
    width: 100%;
    max-width: 100%;
    display: ${(props) => props.display};
  }
`;

export const HoverBubble = styled.div<Props>`
  max-width: 26.875rem;
  z-index: 1 !important;
  position: absolute !important;
  padding: ${(props) => props.padding || "0.625rem"};
  margin-top: 0.625rem;
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
    top: -1.25rem;
    left: ${(props) => props.triangleLeft || "50%"};
    right: ${(props) => props.triangleRight || "50%"};
    transform: translateX(-50%);
    border-width: 0.625rem;
    border-style: solid;
    border-color: transparent transparent
      ${(props) => props.backgroundColor || "#fafafa"} transparent;
  }
`;

export const ListItem = styled.div`
  display: flex;    
  font-size: 13.5px;
  margin-bottom: 0.313rem;
  justify-content: flex-start;
  line-height: 1.5;
  

  
  &::before {
    content: "•"; 
    display: flex;
    align-items: center;
    justify-content: center;
    width: 0.313rem;
    height: 1.125rem;
    font-size: 1.25rem;
    color: #08335e;
    padding-right: 0.313rem;
 
`;

export const Form = styled.form<Props>`
  width: 100%;
`;

export const SwitchContainer = styled.label`
  position: absolute;
  display: flex;
  align-items: center;
  cursor: pointer;
  right: 0.625rem;
  width: 5.25rem;
  height: 1.5rem;
  @media (max-width: ${breakpoints.lg}px) {
    right: 0.625rem;
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
    transform: translate(3.75rem);
  }

  &:checked + span + label {
    transform: ${(props) =>
      props.checked ? "translate(3.125rem, -50%)" : "translate(0, -50%)"};
    transition: transform 0.4s;
  }
`;

export const SwitchSlider = styled.span<Props>`
  position: relative;
  display: inline-block;
  width: 5.25rem;
  height: 1.5rem;
  background-color: ${(props) => (props.checked ? "#F85931" : "#999999")};
  border-radius: 1.5rem;
  transition: background-color 0.3s;

  &::before {
    content: "";
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background-color: white;
    transition: transform 0.3s;
    transform: ${(props) =>
      props.checked ? "translateX(52px)" : "translateX(0)"};
    top: 0.125rem;
    left: 0.125rem;
  }
`;

export const SwitchLabel = styled.label<Props>`
  position: absolute;
  top: 50%;
  left: 0.25rem;
  width: 3.125rem;
  height: 1.25rem;
  line-height: 1.25rem;
  margin-left: ${(props) => (props.isEnglish ? "1.125rem" : "1.25rem")};
  font-size: ${(props) => (props.isEnglish ? "0.625rem" : "13px")};
  font-weight: 500;
  color: white;
  transform: ${(props) =>
    props.checked ? "translate(3.125rem, -50%)" : "translate(0, -50%)"};
  opacity: ${(props) =>
    props.checked ? "0" : "1"}; /* Hide the text when checked */
  transition: transform 0.4s, opacity 0.4s;
`;

export const SwitchLabelLeft = styled(SwitchLabel)<Props>`
  margin-left: ${(props) => (props.isEnglish ? "0" : "0.188rem")};

  transform: ${(props) =>
    props.checked ? "translate(-3.125rem, -50%)" : "translate(0, -50%)"};
  opacity: ${(props) => (props.checked ? "0" : "1")};
  transition: transform 0.4s, opacity 0.4s;
`;

export const HelpBox = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 2.625rem;
  margin-left: 0.125rem;
  background-color: #fafafa;
  z-index: 1;
  @media (max-width: ${breakpoints.lg}px) {
    display: none;
  }
`;

export const HelpImage = styled.img<Props>``;

export const MarginBox = styled(HelpBox)<Props>`
  background-color: transparent;
`;

export const ResponsiveLoginText = styled(Text)<Props>`
  display: none;
  @media (max-width: ${breakpoints.lg}px) {
    display: block;
  }
`;

export const MobileLoginLogoContainer = styled.img<Props>`
  display: none;
  @media (max-width: ${breakpoints.md}px) {
    display: block;
  }
`;

export const LoginIcon = styled.img<Props>`
  display: ${(props) => props.display || "block"};

  @media (max-width: ${breakpoints.lg}px) {
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
  color: ${(props) => props.color || colors.loginHeaderBlue};
  font-weight: ${(props) => props.fontWeight || "500"};
  font-size: ${(props) => props.fontSize || "1.375rem"};
  margin: ${(props) => props.margin || "0"};
  text-align: ${(props) => props.textAlign || "left"};
  border-bottom: ${(props) => props.borderBottom || "none"};
  width: ${(props) => props.width || "100%"};
  padding: ${(props) => props.padding || "0"};
`;

export const SecondaryHeaderForgotPassword = styled(SecondaryHeader)<Props>`
  @media (max-width: ${breakpoints.xl}px) {
    font-size: 0.875rem;
  }
`;

export const VerticalLine = styled.div<Props>`
  border-right: 0.063rem solid ${colors.borderColor};
  height: ${(props) => props.height || "100%"};
  margin: ${(props) => props.margin || "0"};
`;

export const ForgotPasswordInput = styled(InputLogin)<Props>`
  @media (max-width: ${breakpoints.lg}px) {
    max-width: 26.5rem;
  }
  @media (max-width: ${breakpoints.md}px) {
    max-width: 100%;
  }
`;

export const ForgotPasswordContainer = styled(Flex)<Props>`
  @media (max-width: ${breakpoints.md}px) {
    margin: 0;
    margin-top: 0.125rem;
  }
`;

export const SearchBarInput = styled.input<Props>`
  outline: none;
  focus: none;
  border: none;
  width: ${(props) => props.width || "100%"};
  padding: ${(props) => props.padding || "0"};
  font-size: ${(props) => props.fontSize || "0.875rem"};
  &::placeholder {
    color: ${(props) => props.placeholderColor || colors.black};
    font-weight: ${(props) => props.fontWeight || "400"};
  }
`;
export const Icon = styled.img<Props>`
  position: ${(props) => props.position || "static"};
  width: ${(props) => props.width || "auto"};

  ${(props) =>
    props.left &&
    `
      left: ${props.left};
  `}
  right: ${(props) => props.right || "0"};
  height: ${(props) => props.height || "auto"};
  border-right: ${(props) => props.borderRight || "none"};
  border-left: ${(props) => props.borderLeft || "none"};
  border-top: ${(props) => props.borderTop || "none"};
  border-bottom: ${(props) => props.borderBottom || "none"};
  margin: ${(props) => props.margin || "0"};
  cursor: ${(props) => props.cursor || "pointer"};
  transform: ${(props) => props.transform || "0"};
  &:hover {
    color: ${(props) => props.hoverBackground && "transparent"};
  }
`;
export const SearchBarCloseIcon = styled(Icon)<Props>`
  cursor: pointer;
  display: ${(props) => (props.active ? "block" : "none")};
`;

export const FullBorderFlex = styled(Flex)<Props>`
  border: ${(props) => props.border || "none"};
  justify-content: center;
  align-items: center;
`;

export const NavbarAvatarDiv = styled(Flex)<Props>`
  @media (max-width: 1023px) {
    display: none;
  }
`;

export const LogoutDiv = styled(Flex)<Props>``;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th<Props>`
  padding: 0.938rem;
  border-bottom: ${(props) => props.borderBottom || "none"};
  font-weight: 600;
  color: #7288aa;
  font-size: 0.875rem;
  width: ${(props) => props.width || "auto"};
  text-align: left;
`;

export const Td = styled.td<Props>`
  padding: ${(props) => props.padding || "0"};
  border-bottom: ${(props) => props.borderBottom || "none"};
  color: #000;
  font-size: 0.875rem;
  width: ${(props) => props.width || "auto"};
`;

export const Tr = styled.tr<Props>`
  cursor: ${(props) => (props.cursor ? "pointer" : "auto")};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  height: ${(props) => props.height || "auto"};
  border-right: ${(props) => props.borderRight || "none"};
  border-left: ${(props) => props.borderLeft || "none"};
  border-bottom: ${(props) => props.borderBottom || "none"};
  border-top: ${(props) => props.borderTop || "none"};

  &:hover {
    background-color: ${(props) => props.hoverBackground || "transparent"};
  }
`;
export const DashboardSidebarContainer = styled(Flex)<Props>`
  overflow: auto;
  flex-shrink: 0;
  width: 14.125rem;
  @media (max-width: 1023px) {
    position: fixed;
  }
`;

export const DashboardMainContainer = styled(Flex)<Props>`
  margin-top: 5rem;
  margin-left: 14.75rem;
  @media (max-width: ${breakpoints.xl}px) {
    flex-wrap: wrap;
  }
  @media (max-width: ${breakpoints.lg}px) {
    width: 100%;
    margin: 0.063rem 0;
    margin-top: 2.813rem;
  }
`;

export const NavbarContainer = styled(Flex)<Props>`
  z-index: 1;
   boxShadow="0 0.063rem 0.188rem 0 rgba(50, 50, 50, 0.1)"
`;

export const ChartDiv = styled(Flex)<Props>`
  @media (max-width: ${breakpoints.xl}px) {
    justify-content: space-between;
  }
`;

export const CenteredFlex = styled(Flex)<Props>`
  justify-content: center !important;
  align-items: center !important;
`;

export const NotesModalInput = styled.input<Props>`
  width: 100%;
  padding: 0.625rem 3.75rem 0.625rem 0.625rem;
  border: 1px solid
    ${(props) => (props.error ? "red" : `${colors.secondaryBorderColor}`)};
  &:focus {
    border: 1px solid ${colors.black};
  }
`;

export const ActiveSidebarMenuContainer = styled(Flex)<Props>`
  transition: left 0.3s ease-in-out;
`;

export const ContentContainer = styled(Flex)<Props>`
  width: 49.25rem;
  @media (max-width: ${breakpoints.lg}px) {
    width: 100%;
  }
`;
