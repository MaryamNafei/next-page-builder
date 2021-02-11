import styled from "styled-components";
import Image from "next/image";
import viewport from "../../../viewport";

const BlockMain = styled.div`
  display: flex;
  flex-direction: row;

  background: white;
  box-shadow: 0 1px 15px 5px rgba(0, 0, 0, 0.05);

  @media ${viewport.xs} {
    margin: 10px 40px;
    padding: 10px;
  }

  @media ${viewport.md} {
    margin: 0px 0 70px 0;
    padding: 50px;
  }
`;

const StyledImage = styled(Image)``;

const Body = styled.div`
  text-align: left;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 50px;
  font-family: arial;
  line-height: 25px;
  letter-spacing: 0.3px;
`;

function BlockParagraph({ block }) {
  console.log(block);
  return (
    <BlockMain>
      <StyledImage
        src={`https:${block.fields.image.fields.file.url}`}
        width={1000}
        height={100}
        objectFit={"cover"}
      />
      <Body>
        <h1>{block.fields.title}</h1>
        <p>{block.fields.paragraph}</p>
      </Body>
    </BlockMain>
  );
}

export default BlockParagraph;
