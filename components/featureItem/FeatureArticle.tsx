import * as S from "@/components/featureItem/FeatureArticle.style";
import { FeatureArticleProps } from "@/types/type";
import Image from "next/image";

const FeatureArticle = ({ title, description, imageSrc, alt, idx }: FeatureArticleProps) => {
  return (
    <S.Article $isOdd={idx % 2 === 0}>
      {idx % 2 === 0 ? (
        <>
          <S.TextWrap>
            <S.Title $idx={idx}>{title}</S.Title>
            <S.Description>{description}</S.Description>
          </S.TextWrap>
          <S.FeatureImageContainer>
            <Image
              width={550}
              height={450}
              style={{
                width: "100%",
                height: "auto",
              }}
              src={imageSrc}
              alt={alt}
            />
          </S.FeatureImageContainer>
        </>
      ) : (
        <>
          <S.FeatureImageContainer>
            <Image
              width={550}
              height={450}
              style={{
                width: "100%",
                height: "auto",
              }}
              src={imageSrc}
              alt={alt}
            />
          </S.FeatureImageContainer>
          <S.TextWrap>
            <S.Title $idx={idx}>{title}</S.Title>
            <S.Description>{description}</S.Description>
          </S.TextWrap>
        </>
      )}
    </S.Article>
  );
};

export default FeatureArticle;
