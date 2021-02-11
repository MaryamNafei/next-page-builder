import styled from "styled-components";
import viewport from "../../viewport";

const FooterMain = styled.div`
  display: flex;
  flex: 1;
  padding: 20px;
  background: #f0f0f0;
  // border: 1px darkgray solid;
  box-shadow: 0 1px 15px 5px rgba(0, 0, 0, 0.05);
  align-items: center;
  @media ${viewport.xs} {
    padding: 20px;
  }
  @media ${viewport.lg} {
    padding: 70px 100px;
  }
`;

const Row = styled.div`
  display: flex;

  @media ${viewport.xs} {
    flex-direction: column;
  }
  @media ${viewport.lg} {
    flex-direction: row;
  }
`;

const Col = styled.div`
  color: #565454;
  font-size: 18px;
`;

const ListUnstyled = styled.ul`
  color: #565454;
  margin-right: 250px;
  list-style: none;
  padding-inline-start: 0px;
  font-family: arial;
  line-height: 25px;
  font-size: 15px;
`;

function Footer({ footer }) {
  return (
    <FooterMain>
      <Row>
        {footer.fields.columns.map((column) => {
          return (
            <Col>
              <h4>{column.fields.title}</h4>
              <ListUnstyled>
                {column.fields.listItems.map((listItem) => {
                  return <li>{listItem.fields.label}</li>;
                })}
              </ListUnstyled>
            </Col>
          );
        })}
      </Row>
    </FooterMain>
  );
}

export default Footer;
