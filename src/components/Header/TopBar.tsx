const TopBar = () => {
  return (
    <div className="topbar">
      <select name="language">
        <option defaultValue="pt-br">PT-BR</option>
        <option value="en-us">EN-US</option>
      </select>
      <select name="currency">
        <option defaultValue="BRL">BRL</option>
        <option value="USD">USD</option>
      </select>
      <nav>Login /</nav>
      <nav>Cadastro</nav>
    </div>
  );
};

export default TopBar;
