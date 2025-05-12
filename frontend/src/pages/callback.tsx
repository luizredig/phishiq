import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/layout/loading-spinner";

export default function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <LoadingSpinner />
    </div>
  );
}
