import { useNavigate } from "react-router-dom";
import "./index.scss";

export default function AuthenTemplate({ children }) {
  const navigate = useNavigate();
  return (
    <div className="authen-template">
      <div className="authen-template__content">
        <div className="authen-template__content__form">
          <div className="wrapper">
            <img
              src="./Logo.svg"
              onClick={() => {
                console.log("ok");
                navigate("/homepage");
              }}
            />
            {children}
          </div>
        </div>
        <div className="authen-template__content__background">
          <span className="button-link">
            <img src="./RingBackGround.svg" alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}
