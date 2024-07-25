import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const MainSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="main-section">
      <div className="full-logo">
        <img src="../../public/ECOmercioLogo.png" alt="Logo da aplicação" />
        <h1>ECOmercio</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="search" name="query" placeholder="Buscar..." />
        <button type="submit">Buscar</button>
      </form>
      <div className="cart-button">
        <ShoppingBagOutlinedIcon />
      </div>
    </div>
  );
};

export default MainSection;
