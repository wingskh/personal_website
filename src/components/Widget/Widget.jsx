import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import moment from "moment";

export const Widget = ({ data }) => {
  return (
    <div className="widget">
      <span className="corner">
        <div className="left">
          <span className="title">{data.title}</span>
        </div>
        <div className="right">
          <div className="percentage positive">
            {/* <KeyboardArrowUpIcon />
            20 % */}
          </div>
        </div>
      </span>
      {data.ratio}
      <span className="corner">
        <div className="left">
          <span className="link">{moment().format("YYYY-MM-DD HH:mm:ss")}</span>
        </div>
        <div className="right">{data.icon}</div>
      </span>
    </div>
  );
};
