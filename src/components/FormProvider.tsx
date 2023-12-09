import { DevTool } from "@hookform/devtools";
import { PropsWithChildren } from "react";
import { FormProvider, useForm } from "react-hook-form";

function RegisterFormProvider({ children }: PropsWithChildren) {
  const methods = useForm({ mode: "onChange" });

  const submit = () => {
    console.log("슬희");
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>{children}</form>
      <DevTool control={methods.control} />
    </FormProvider>
  );
}

export default RegisterFormProvider;
