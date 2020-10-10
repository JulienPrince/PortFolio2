import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#fca311" : "#86848438")};
  position: fixed;
  width: 100%;
  padding: 20px 0;
  padding: ${({ scrollNav }) => (scrollNav ? "10px 0" : "20px 0")};
  transition: all 0.3s;
  z-index: 100;
`;
export const NavContainer = styled.div`
  max-width: 1300px;
  width: 100%;
  z-index: 1;
  padding: 0 10px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavLogo = styled(LinkS)`
  color: aliceblue;
  font-size: 35px;
  font-weight: 600;
  cursor: pointer;
`;
export const MobilIcon = styled.div`
  display: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({ scrollNav }) => (scrollNav ? "#000" : "#fca311")};
  }
  @media screen and (max-width: 915px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;
export const Span = styled.span`
  transition: all 0.3s;
  color: ${({ scrollNav }) => (scrollNav ? "#2d2d2d" : "#fca311")};
`;
export const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 915px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  margin-left: 25px;
  cursor: pointer;

  &.active,
  &:hover {
    color: #000;
    transition: color 0.3s;
  }
`;
