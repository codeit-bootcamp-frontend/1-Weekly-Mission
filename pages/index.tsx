import UserInput from "@/components/common/UserInput";

export default function Home() {
  return (
    <div
      style={{
        marginTop: "10rem",
      }}
    >
      <div>main</div>
      <UserInput label="email" />
    </div>
  );
}
