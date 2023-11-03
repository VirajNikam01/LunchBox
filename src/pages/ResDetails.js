import { useParams } from "react-router-dom";

const ResDetails = () => {
  const { resId } = useParams();
  console.log(resId);

  return (
    <div className="min-h-screen pt-20">
      <h1>Id : {resId}</h1>
    </div>
  );
};

export default ResDetails;
