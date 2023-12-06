// import { ChangeEvent, useEffect, useState } from "react";
// import style from "@/src/components/Sign/SignInput.module.css";
// import Image from "next/image";
// import EyeOffIcon from "@/src/assets/img/eye-off.svg";
// import EyeOnIcon from "@/src/assets/img/eye-on.svg";

// interface SignInputProps {
//   type: string;
//   label: string;
//   htmlFor: string;
//   isPrivate: boolean;
//   handleError: (param: string, checkVerify: boolean) => string | null;
//   inputRef: any;
  
// }

// const SignIpnut = ({
//   type = "email",
//   label,
//   htmlFor,
//   isPrivate,
//   handleError,
  
//   inputRef,
// }: SignInputProps) => {
//   const [isError, setIsError] = useState(false);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);
//   const [inputValue, setInputValue] = useState<string>("");
//   const [inputType, setInputType] = useState(type);

//   const checkInputValue = () => {
//     setErrorMessage(handleError(inputValue, checkVerify));
//     if (!errorMessage) setIsError(true);
//   };
//   useEffect(() => {
//     if (checkVerify) checkInputValue();
//   }, [checkVerify]);

//   const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setInputValue(e.target.value);
//   };

//   const handlePwdEyeClick = () => {
//     setInputType(inputType === "email" ? "password" : "email");
//   };
//   return (
//     <div className={style.root}>
//       <label className={style.label} htmlFor={htmlFor}>
//         {label}
//       </label>
//       <div className={style.inputWrapper}>
//         <input
//           className={style.input}
//           id={htmlFor}
//           type={inputType}
//           onChange={handleOnChange}
//           onBlur={checkInputValue}
//           ref={inputRef}
//         />
//         {isPrivate && (
//           <Image
//             src={inputType === "password" ? EyeOffIcon : EyeOnIcon}
//             alt="pwd eye"
//             className={style.pwdEye}
//             onClick={handlePwdEyeClick}
//           />
//         )}
//       </div>
//       {isError && <p className={style.errorMessage}>{errorMessage}</p>}
//     </div>
//   );
// };

// export default SignIpnut;
