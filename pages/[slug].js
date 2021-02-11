import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Body from "../src/components/Body";
import styled from "styled-components";
import viewport from "../src/viewport";

const Wrapper = styled.div`
  display: flex;

  @media ${viewport.md} {
    flex-direction: row;
  }
  @media ${viewport.lg} {
    flex-direction: column;
  }
`;

function Page({ page }) {
  return (
    <>
      <Wrapper>
        <Header header={page.header} />
        <Body blocks={page.blocks} />
      </Wrapper>
      <Footer footer={page.footer} />
    </>
  );
}

export default Page;

export async function getServerSideProps(context) {
  const { slug } = context.params;

  const contentful = require("contentful");
  const client = contentful.createClient({
    space: "1g2jmpytazu9",
    environment: "master",
    accessToken: "9T2nT5JISm-D-71XVKJwAtNjNpHuGymNHlVwX1YR66U",
  });

  return client
    .getEntries({
      include: 10,
      content_type: "page",
      "fields.slug": slug,
    })
    .then((response) => {
      return {
        props: { page: response.items[0].fields },
      };
    })
    .catch(console.error);
}
