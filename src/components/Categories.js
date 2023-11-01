import styled from "styled-components";

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const CategoryButton = styled.button`
  padding: 0.5rem 0.75rem;
  border-radius: 5px;
  border: 1px solid var(--color-primary);
  background: ${({ $isActive }) => ($isActive ? "var(--color-primary)" : "var(--color-white)")};
  color: ${({ $isActive }) => ($isActive ? "var(--color-white)" : "black")};
  font-size: 1rem;
  line-height: 1.2rem;
  cursor: pointer;
`;

export default function Categories({ categories, selected, onClick }) {
  return (
    <Container>
      {categories.map((category) => (
        <CategoryButton
          key={category}
          onClick={() => onClick(category)}
          $isActive={selected === category}
        >
          {category}
        </CategoryButton>
      ))}
    </Container>
  );
}
