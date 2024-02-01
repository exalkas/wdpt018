export default function Post({
  data = {
    title: "",
    content: "",
  },
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-[20px] w-[400px] border-white border-2 rounded-md p-4">
      <h4>{data.title}</h4>
      <p>{data.content}</p>
    </div>
  );
}
