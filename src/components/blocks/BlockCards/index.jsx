import styled from "styled-components";
import Image from "next/image";
import viewport from "../../../viewport";

const BlockMain = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-bottom: 70px;
`;

const Row = styled.div`
  display: flex;

  @media ${viewport.xs} {
    flex-direction: column;
    margin: 0px 40px;
  }

  @media ${viewport.md} {
    flex-direction: row;
    margin: 0;
  }

  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  align-self: center;
  // margin-bottom: 20px;
  font-family: arial;
  color: #565454;
  font-size: 16px;
  @media ${viewport.xs} {
    margin: 50px 40px;
  }

  @media ${viewport.md} {
    margin: 20px 0px;
  }
`;

const Card = styled.div`
  width: 100%;
  height: auto;
  @media ${viewport.xs} {
    margin: 10px 0px;
  }
  @media ${viewport.md} {
    margin: 0;
  }
  box-shadow: 0 1px 15px 5px rgba(0, 0, 0, 0.05);
  background-color: white;
  position: relative;
  flex-basis: 32%;
  border-radius: 10px;
`;

const CardHeader = styled.div`
  border-radius: 10px;
  border-radius: 10px 10px 0 0;
`;

const CardBody = styled.div`
  text-align: left;
  padding: 30px;
  font-family: arial;
  line-height: 25px;
  letter-spacing: 0.3px;
`;

const StyledImage = styled(Image)`
  border-radius: 10px 10px 0 0;
`;

function BlockCards({ block }) {
  return (
    <BlockMain>
      <Title>
        <h1>{block.fields.title}</h1>
      </Title>
      <Row>
        {block.fields.cards.map((card) => {
          return (
            <Card>
              <CardHeader>
                <StyledImage
                  src={`https:${card.fields.image.fields.file.url}`}
                  width={400}
                  height={200}
                  layout="responsive"
                  objectFit="cover"
                />
              </CardHeader>
              <CardBody>
                <h4>{card.fields.title}</h4>
                <p>{card.fields.paragraph} </p>
              </CardBody>
            </Card>
          );
        })}
      </Row>
    </BlockMain>
  );
}

export default BlockCards;
