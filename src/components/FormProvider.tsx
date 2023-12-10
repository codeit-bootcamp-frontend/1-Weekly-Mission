import { DevTool } from "@hookform/devtools";
import { PropsWithChildren } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormValuesType } from "src/types/FormValue";

function RegisterFormProvider({ children }: PropsWithChildren) {
  const methods = useForm<FormValuesType>({ mode: "onSubmit" });
  const onSubmit = (data: FormValuesType) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
      <DevTool control={methods.control} />
    </FormProvider>
  );
}

export default RegisterFormProvider;
