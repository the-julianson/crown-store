import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const OptionContainerStyles = css`
  padding: 0.6em 1em;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 5em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5em;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 5em;
  padding: 1.5em;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
