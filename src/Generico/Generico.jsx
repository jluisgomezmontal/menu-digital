import { Ubicacion } from "../components/Ubicacion/Ubicacion";

export const Generico = () => {
  return (
    <>
      <div className="header bg-dark">
        <img
          className="mx-auto d-block"
          src="https://img.freepik.com/vector-gratis/g-purple-logo-business-marca-identidad-diseno-vector-ilustracion_1142-13252.jpg"
          alt="Logo de Hamburguesa"
        />
        <h2 className="border-top border-dark text-center my-5 bg-dark text-white lead">
          Titulo del Negocio
        </h2>
        <div className="container text-white my-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quo
            necessitatibus, nobis quas voluptatem temporibus. Atque officia
            magni id! Fugiat excepturi placeat, culpa qui doloremque dolores
            assumenda quis dicta consequuntur!
          </p>
          <Ubicacion />
        </div>
      </div>
    </>
  );
};
