import BlockCards from "./BlockCards";
import BlockParagraph from "./BlockParagraph";

const blocks = {
  BlockCards,
  BlockParagraph,
};

const blockFinder = (block) => {
  const id = block.sys.contentType.sys.id;
  const blockName = id.charAt(0).toUpperCase() + id.slice(1);
  const Component = blocks[blockName];
  return <Component block={block} />;
};

export default blockFinder;
