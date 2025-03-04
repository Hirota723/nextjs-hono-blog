import { auth } from "@/auth";
import NewForm from "@/components/newForm";

const Page = async () => {
  const session = await auth();

  if (!session) {
    return <div>ログインしてください。</div>;
  }

  return (
    <div>
      <NewForm />
    </div>
  );
};

export default Page;
