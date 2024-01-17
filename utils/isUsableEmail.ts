import fetcher from "@/lib/axios";
import { AxiosError, isAxiosError } from "axios";
import { Dispatch, SetStateAction } from "react";

type CheckedEmails = {
  [email: string]: boolean;
};

interface IsUsableEmail {
  isUsableEmail: boolean;
}

interface IsUsableEmailProps {
  email: string;
  cachedEmails: CheckedEmails;
  setCachedEmails: Dispatch<SetStateAction<CheckedEmails>>;
  fieldErrorHandler: {
    setFieldError(field: string, message: string): void;
  };
}

const isUsableEmail = async ({
  email,
  cachedEmails,
  setCachedEmails,
  fieldErrorHandler,
}: IsUsableEmailProps): Promise<boolean> => {
  if (cachedEmails.hasOwnProperty(email)) {
    const isNotCheckedEmails = !cachedEmails[email];

    if (isNotCheckedEmails) {
      fieldErrorHandler.setFieldError("email", "중복된 이메일입니다.");
      return false;
    }
    return true;
  }

  try {
    const response = await fetcher<IsUsableEmail>({
      url: "/users/check-email",
      method: "post",
      data: { email },
    });
    const { isUsableEmail } = response.data;

    if (isUsableEmail) {
      setCachedEmails((prevValues) => ({
        ...prevValues,
        [email]: true,
      }));
      return true;
    }

    setCachedEmails((prevValues) => ({ ...prevValues, [email]: false }));
    return false;
  } catch (error) {
    if (isAxiosError(error)) {
      const axiosError = error as AxiosError;

      if (axiosError.response && axiosError.response.status === 409) {
        fieldErrorHandler.setFieldError("email", "중복된 이메일입니다.");
        setCachedEmails((prevValues) => ({ ...prevValues, [email]: false }));
        return false;
      }
    }

    setCachedEmails((prevValues) => ({ ...prevValues, [email]: false }));
    return false;
  }
};

export default isUsableEmail;
