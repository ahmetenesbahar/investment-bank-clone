import styled from "styled-components";

interface Props {
  justifyContent?: string;
  alignItems?: string;
  padding?: string;
  width?: string;
  color?: string;
  textAlign?: string;
  fontWeight?: string;
  disabled?: boolean;
  responsive?: boolean;
  position?: string;
  checked?: boolean;
}

export const Container = styled.div<Props>`
  padding: ${(props) => props.padding || "0"};
  display: flex;
  height: 100vh;
`;

export const Flex = styled.div<Props>`
  display: flex;
  position: ${(props) => props.position || "relative"};
  width: ${(props) => props.width || "auto"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "flex-start"};
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
  width: 100%;
  gap: 1rem;
`;

export const LoginHeader = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #08335e;
  font-weight: 300;
  font-size: 1.625rem;
  width: 424px;
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
  border: 1px solid #d3d3d3;
  padding: 1px 2px 1px 15px;
  width: 424px;
  height: 42px;
  outline: none;
  @media (max-width: 1024px) {
    width: 100%;
  }
  &:hover {
    border: ${(props) =>
      props.disabled ? "1px solid #d3d3d3" : "1px solid #94d3e2"};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; /* Safari and Chrome */
  }
`;

export const Text = styled.p<Props>`
  color: ${(props) => props.color || " #49a4e0"};
  font-size: ${(props) => props.width || "14px;"};
  cursor: pointer;
  text-align: ${(props) => props.textAlign || "left"};
  font-weight: ${(props) => props.fontWeight || "400"};
`;

export const Button = styled.button<Props>`
  outline: none;
  border: none;
  width: ${(props) => props.width || "auto"};
  color: ${(props) => props.color || "#fff"};
  background-color: ${(props) => props.color || "#08335e"};
  padding: ${(props) => props.padding || "0.5rem 1rem"};
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SecurityBubble = styled.div<Props>`
  max-width: 430px;
  padding: 10px;
  margin-top: 10px;
  background-color: #ebebeb;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
    height: 142px;
  }
`;

export const ListItem = styled.div`
  display: flex;    
  font-size: 13.5px;
  margin-bottom: 5px;
  gap: 5px;

  
  &::before {
    content: "•"; 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    font-size: 20px;
    color: #08335e;
    margin-right: 5px; 
`;

export const Form = styled.form<Props>`
  width: 100%;
`;

export const SwitchContainer = styled.label`
  position: absolute;
  display: flex;
  align-items: center;
  cursor: pointer;
  right: 0;
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const SwitchSlider = styled.span<Props>`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  background-color: ${(props) => (props.checked ? "#4caf50" : "#ccc")};
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
      props.checked ? "translateX(26px)" : "translateX(0)"};
    top: 2px;
    left: 2px;
  }
`;
