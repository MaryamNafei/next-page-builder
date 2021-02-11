import styled from "styled-components";
import Link from "next/link";
import viewport from "../../viewport";

const HeaderMain = styled.div`
  background: #f0f0f0;
  align-items: center;
  @media ${viewport.xs} {
    display: none;
  }

  @media ${viewport.md} {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  @media ${viewport.lg} {
    flex-direction: row;
    padding: 80px 100px;
    align-items: center;
  }
`;

const HeaderLogo = styled.div`
  text-decoration: inherit;
  font-size: 55px;
  font-family: roboto;
  color: #565454;
  @media ${viewport.md} {
    margin-bottom: 20px;
  }
  @media ${viewport.lg} {
    margin-bottom: 0px;
  }
`;

const MenuItems = styled.div`
  display: flex;
  font-size: 17px;
  @media ${viewport.md} {
    justify-content: space-between;
    flex-direction: column;
  }
  @media ${viewport.lg} {
    margin-left: auto;
    flex-direction: row;
  }
`;

const StyledLink = styled.a`
  color: #565454;
  text-decoration: none;
  font-family: arial;
  @media ${viewport.md} {
    margin-left: 0px;
    margin-bottom: 10px;
  }
  @media ${viewport.lg} {
    margin-left: 50px;
    margin-bottom: 0px;
  }
`;

function Header({ header }) {
  return (
    <HeaderMain>
      <HeaderLogo>{header.fields.logo}</HeaderLogo>
      <MenuItems>
        {header.fields.menuItems.map((menuItem) => {
          return (
            <Link href={menuItem.fields.link} passHref>
              <StyledLink>{menuItem.fields.label}</StyledLink>
            </Link>
          );
        })}
      </MenuItems>
    </HeaderMain>
  );
}

export default Header;
