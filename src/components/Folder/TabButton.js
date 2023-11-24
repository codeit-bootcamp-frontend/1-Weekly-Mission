import styled from "styled-components";

const initFolder = [
  {
    name: "전체",
    id: "",
    key: "전체",
  },
];

export default function TabButton({
  selectItems,
  nowFolderId,
  handleClickUpdate,
}) {
  return (
    <TabButtonWrapper>
      {[...initFolder, ...selectItems].map((item) => {
        return (
          <Button
            key={item.id}
            onClick={() => handleClickUpdate(item.name, item.id)}
            $selected={item.id === nowFolderId}
          >
            {item.name}
          </Button>
        );
      })}
    </TabButtonWrapper>
  );
}

const TabButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 540px;
  @media (max-width: 1123px) {
    width: 1000px;
  }
  @media (max-width: 768px) {
    width: 500px;
    flex-wrap: wrap;
  }
`;
const Button = styled.button`
  padding: 8px 12px;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--linkbrary-primary-color, #6d6afe);
  background: #fff;
  white-space: nowrap;
  max-width: 90px;
  text-align: center;

  background-color: ${({ $selected }) =>
    $selected ? "var(--linkbrary-primary-color, #6d6afe)" : `#ffffff`};
`;
