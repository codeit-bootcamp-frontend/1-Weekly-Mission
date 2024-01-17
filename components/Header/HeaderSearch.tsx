import { ErrorMessage, Float, Form, Input, InputButton, InputImg, InputWrapper } from "@/components/Header/HeaderSearch.styled";
import useModal from "@/hooks/useModal";
import { SetRefForObserver } from "@/hooks/useObserver";
import axiosInstance from "@/lib/axios";
import { getCookie } from "@/utils/getCookie";
import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, FormEvent, memo, useState } from "react";

interface Props {
  setRefForObserver: SetRefForObserver;
}

const REG_URL = /(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}([\/a-z0-9-%#?&=\w])+(\.[a-z0-9]{2,4}(\?[\/a-z0-9-%#?&=\w]+)*)*/;

export default memo(function HeaderSearch({ setRefForObserver }: Props) {
  const { modal, dispatch } = useModal();
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const folderQuery = useQuery({
    queryKey: ["folderData"],
    queryFn: async () => {
      const accessToken = getCookie("accessToken");
      const res = await axiosInstance.get("/folders", { headers: { Authorization: accessToken } });
      return res.data;
    },
  });

  const folderData = folderQuery.data;

  const handleModal = (e: FormEvent) => {
    e.preventDefault();
    const isURL = REG_URL.test(value);
    if (isURL) {
      setErrorMessage("");
      setValue("");
      dispatch({ title: value, type: "추가하기", data: folderData });
      return;
    }
    setErrorMessage("URL형식으로 입력해주십시오.");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Form ref={setRefForObserver} onSubmit={handleModal}>
        <Input ref={setRefForObserver} value={value} onChange={handleChange} onFocus={() => setErrorMessage("")} placeholder="링크를 추가해보세요." />
        <InputWrapper>
          <InputImg src="/link.svg" />
          <InputButton>추가하기</InputButton>
        </InputWrapper>
        <Float ref={setRefForObserver}>
          <Input ref={setRefForObserver} value={value} onChange={handleChange} placeholder="링크를 추가해보세요." />
          <InputWrapper>
            <InputImg src="/link.svg" />
            <InputButton>추가하기</InputButton>
          </InputWrapper>
        </Float>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </Form>
      {modal}
    </>
  );
});
