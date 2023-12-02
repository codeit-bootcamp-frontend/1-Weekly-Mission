import React, { ReactNode } from "react";
import * as S from "@/components/featureItem/FeatureArticle.style";
import Image from "next/image";
import { FeatureArticleProps } from "@/types/type";

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

// const ArticleEven = ({ children }: { children: ReactNode }) => {
//   return <S.ArticleEven>{children}</S.ArticleEven>;
// };

// const TextWrap = ({ children }: { children: ReactNode }) => {
//   return <S.TextWrap>{children}</S.TextWrap>;
// };

// const Title = ({ children }: { children: ReactNode }) => {
//   return <S.Title>{children}</S.Title>;
// };

// const Description = ({ children }: { children: ReactNode }) => {
//   return <S.Description>{children}</S.Description>;
// };

// const FeatureImage = ({ imageSrc, alt }: { imageSrc: string; alt: string }) => {
//   return (
//     <S.FeatureImageContainer>
//       <Image width={385} height={315} layout="responsive" src={imageSrc} alt={alt} />
//     </S.FeatureImageContainer>
//   );
// };

// const FeatureBr = () => {
//   return <S.FeatureItemBr />;
// // };

// FeatureArticle.ArticleEven = ArticleEven;
// FeatureArticle.TextWrap = TextWrap;
// FeatureArticle.Title = Title;
// FeatureArticle.Description = Description;
// FeatureArticle.FeatureImage = FeatureImage;
// FeatureArticle.FeatureBr = FeatureBr;

export default FeatureArticle;
