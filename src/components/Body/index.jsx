import blockFinder from "../blocks/blockFinder";
import styled from "styled-components";

const BlocksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BlockWrapper = styled.div`
  max-width: 1200px;
`;

function Body({ blocks }) {
  return (
    <BlocksWrapper>
      {blocks.map((block) => {
        return <BlockWrapper>{blockFinder(block)}</BlockWrapper>;
      })}
    </BlocksWrapper>
  );
}

export default Body;
