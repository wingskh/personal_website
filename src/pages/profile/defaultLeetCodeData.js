import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

export const defaultLeetCodeData = (defaultText) => [
  {
    title: <div style={{ color: "black" }}>Total</div>,
    ratio: (
      <div className="cardSubTitle">
        <div
          style={{
            fontWeight: 600,
            fontSize: "25px",
            color: "rgba(38, 38, 38, 0.75)",
          }}
        >
          {defaultText}
        </div>
      </div>
    ),
    icon: <AccountBalanceWalletOutlinedIcon style={{ color: "black" }} />,
  },
  {
    title: <div style={{ color: "rgb(67, 160, 71)" }}>Easy</div>,
    ratio: (
      <div className="cardSubTitle">
        <div
          style={{
            fontWeight: 600,
            fontSize: "25px",
            color: "rgba(38, 38, 38, 0.75)",
          }}
        >
          {defaultText}
        </div>
      </div>
    ),
    icon: (
      <AccountBalanceWalletOutlinedIcon style={{ color: "rgb(67, 160, 71)" }} />
    ),
  },
  {
    title: <div style={{ color: "rgb(251, 140, 0)" }}>Medium</div>,
    ratio: (
      <div className="cardSubTitle">
        <div
          style={{
            fontWeight: 600,
            fontSize: "25px",
            color: "rgba(38, 38, 38, 0.75)",
          }}
        >
          {defaultText}
        </div>
      </div>
    ),
    icon: (
      <AccountBalanceWalletOutlinedIcon style={{ color: "rgb(251, 140, 0)" }} />
    ),
  },
  {
    title: <div style={{ color: "rgb(233, 30, 99)" }}>Hard</div>,
    ratio: (
      <div className="cardSubTitle">
        <div
          style={{
            fontWeight: 600,
            fontSize: "25px",
            color: "rgba(38, 38, 38, 0.75)",
          }}
        >
          {defaultText}
        </div>
      </div>
    ),
    icon: (
      <AccountBalanceWalletOutlinedIcon style={{ color: "rgb(233, 30, 99)" }} />
    ),
  },
];
