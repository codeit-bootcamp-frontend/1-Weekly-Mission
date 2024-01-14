import handleSignSubmit from "@/businessLogic/sign/handleSignSubmit";

const useAuth = () => {
  const handleSubmit = handleSignSubmit;

  return { handleSubmit };
};

export default useAuth;
