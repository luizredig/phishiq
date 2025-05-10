import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string, replace: boolean = false) => {
    navigate(path, { replace });
  };

  const goBack = () => {
    navigate(-1);
  };

  const goNext = () => {
    navigate(1);
  };

  return {
    handleNavigate,
    goBack,
    goNext,
  };
};
