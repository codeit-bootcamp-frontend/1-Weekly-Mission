import Banner from "src/components/Banner/Banner";
import CardList from "src/components/CardList/CardList";
import MainSection from "src/components/MainSection/MainSection";
import { useProfileInfo } from "src/hook/Shared/useProfileInfo";

function Shared() {
  const { cards, folder } = useProfileInfo();
  return (
    <>
      {folder && <Banner folder={folder} />}
      <MainSection>
        {cards && <CardList card={cards} isCardEditable={false} />}
      </MainSection>
    </>
  );
}

export default Shared;
