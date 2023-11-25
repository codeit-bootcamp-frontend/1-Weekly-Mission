import { FormEvent, useEffect, useRef, useState } from "react";
import useData from "src/hooks/useData";
import useModal from "src/hooks/useModal";
import inputImg from "src/assets/link.svg";
import { Float, Form, Input, InputButton, InputImg, InputWrapper } from "src/components/Header/HeaderInput.styled";
import { URLS } from "src/utils/getData.type";

interface Props {
  id: number;
  isUser: boolean;
}

function HeaderSearch({ id, isUser }: Props) {
  const folder = useData(URLS.FOLDER_CATEGORY, id);
  const { modal, dispatch } = useModal();
  const [value, setValue] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const div = useRef<HTMLDivElement>(null);
  const form = useRef<HTMLFormElement>(null);

  const float = () => {
    div.current?.classList.add("float");
    form.current?.classList.add("float");
  };

  const fix = () => {
    div.current?.classList.remove("float");
    form.current?.classList.remove("float");
  };

  const observer = useRef(
    new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio === 0) {
            float();
            console.log(2);
          }
          if (entry.isIntersecting) {
            console.log(3);
            fix();
          }
        });
      },
      { threshold: 0 }
    )
  );
  const observe = (element: HTMLElement) => {
    observer.current.observe(element);
  };

  const unobserve = (element: HTMLElement) => {
    observer.current.unobserve(element);
  };

  useEffect(() => {
    if (form.current) {
      observe(form.current);
    }
  }, []);

  const handleChange = () => {
    const newValue = input.current!.value;
    setValue(newValue);
  };

  const handleModal = (e: FormEvent) => {
    e.preventDefault();
    if (folder?.path === URLS.FOLDER_CATEGORY) {
      isUser && dispatch({ title: value, type: "추가하기", data: folder.data });
    }
  };

  return (
    <>
      <Form ref={form} onSubmit={handleModal}>
        <Float ref={div}>
          <Input ref={input} value={value} onChange={handleChange} placeholder="링크를 추가해보세요." />
          <InputWrapper>
            <InputImg src={inputImg} />
            <InputButton>추가하기</InputButton>
          </InputWrapper>
        </Float>
      </Form>
      {modal}
    </>
  );
}

export default HeaderSearch;
