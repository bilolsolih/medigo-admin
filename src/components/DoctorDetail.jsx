import { useParams } from "react-router-dom";

function DoctorDetail() {
  const { id } = useParams();

  return (
    <div className="bg-white p-6 rounded-xl">
      <h2 className="text-xl font-semibold mb-4">
        Shifokor haqida batafsil
      </h2>

      <p className="text-gray-600">
        Doctor ID: {id}
      </p>

    </div>
  );
}

export default DoctorDetail;
