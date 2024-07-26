import { useState } from "react";

import "../../css/styles.css";
import { Select, MenuItem } from "@mui/material";

const TopBar = () => {
  const [language, setLanguage] = useState("PT-BR");
  const [currency, setCurrency] = useState("BRL");

  const handleLangChange = (event: any) => {
    setLanguage(event.target.value as string);
  };

  const handleCurrencyChange = (event: any) => {
    setCurrency(event.target.value as string);
  };

  return (
    <div className="topbar">
      <div className="language-and-currency">
        <Select
          variant="standard"
          value={language}
          onChange={handleLangChange}
          className="text-gray-300 h-full"
        >
          <MenuItem value={"PT-BR"}>PT-BR</MenuItem>
          <MenuItem value={"EN-US"}>EN-US</MenuItem>
        </Select>
        <Select
          variant="standard"
          value={currency}
          onChange={handleCurrencyChange}
          className="text-gray-300"
        >
          <MenuItem value={"BRL"}>BRL</MenuItem>
          <MenuItem value={"USD"}>USD</MenuItem>
        </Select>
      </div>
      <nav className="login-and-signup">
        <a>Login /</a>
        <a>Cadastro</a>
      </nav>
    </div>
  );
};

export default TopBar;
