import { useParams } from "react-router-dom";

export default function () {
  const params = useParams();
  const { id } = params as any;
  return (
    <div>
      <h1>User</h1>
      <p>id: {id}</p>
    </div>
  );
}
