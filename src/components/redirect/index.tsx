import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export interface RedirectProps {
  to: string;
}

export default function ({ to }: RedirectProps = { to: "/404" }) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to, { replace: true });
  }, []);

  return <div></div>;
}
