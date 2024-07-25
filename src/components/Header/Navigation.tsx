import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";

const Navigation = () => {
  return (
    <div className="navigation">
      <a>Produtos</a>
      <a>Dicas de sustentabilidade</a>
      <address>
        <p id="phone-number">
          <PhoneInTalkOutlinedIcon /> (219) 555-0114
        </p>
      </address>
    </div>
  );
};

export default Navigation;
