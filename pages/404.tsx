import LinkAdd from "src/components/LinkAdd/LinkAdd";
import MainSection from "src/components/MainSection/MainSection";
import NotFoundLink from "src/components/NotFoundLink/NotFoundLink";

function NotFoundPage() {
  return (
    <>
      <LinkAdd />
      <MainSection>
        <NotFoundLink />
      </MainSection>
    </>
  );
}

export default NotFoundPage;
