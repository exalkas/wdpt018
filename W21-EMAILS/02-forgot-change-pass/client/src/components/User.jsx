export default function User({ data }) {
  return (
    <div className="border w-full border-gray-300 rounded-md m-2 p-2 shadow-md flex flex-col items-center">
      <div>Username: {data.username}</div>
      <div>Age: {data.age}</div>
      <div>Gender: {data.gender}</div>
    </div>
  );
}
