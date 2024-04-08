import Hambur from "../../assets/hambur.png";

import "./header.scss";
export const Header = () => {
  return (
    <div className="header">
      <img className="mx-auto d-block" src={Hambur} alt="Logo de Hamburguesa" />
      <h1 className="border-top border-dark text-center py-3 bg-dark text-white ">
        Menu Digital
      </h1>
    </div>
  );
};
