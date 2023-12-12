import * as S from "./CategoriesStyles";

interface CategoriesProps {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
}

export default function Categories({ categories, selected, onClick }: CategoriesProps) {
  return (
    <S.Container>
      {categories.map((category) => (
        <S.CategoryButton
          key={category}
          onClick={() => onClick(category)}
          $isActive={selected === category}
        >
          {category}
        </S.CategoryButton>
      ))}
    </S.Container>
  );
}
