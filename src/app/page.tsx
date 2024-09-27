
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <header className="header">
        <div className="logo"></div>
        <div className="menu"></div>
    </header>

    <div className="imagen-container">
        <div className="imagen-con-nombre">
            <a className="imagen-button">
                <img className="imagen" src="../../public/imagenes/dany0.jpg" alt="Imagen 1" />
            </a>
        </div>
        <div className="imagen-con-nombre">
            <a className="imagen-button">
                <img className="imagen" src="../../public/imagenes/pau0.jpg" alt="Imagen 2" />
            </a>
        </div>
        <div className="imagen-con-nombre">
            <a className="imagen-button">
                <img className="imagen" src="../../public/imagenes/ale0.jpg" alt="Imagen 3" />
            </a>
        </div>
        <div className="button-container-inicio">
            <div className="imagen-banda">
                <a className="boton-banda">
                    <img className="imagen" src="imagenes/logo.webp" alt="imagen 4" />
                </a>
            </div>
        </div>
    </div>
    </div>
  );
}
