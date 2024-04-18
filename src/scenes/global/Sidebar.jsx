/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar";
import { tokens } from "../../theme";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import PeopleIcon from '@mui/icons-material/People';
import WalletIcon from '@mui/icons-material/Wallet';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import StockImage1 from "../../assets/img1.jpg"; // Import stock images
import StockImage2 from "../../assets/img2.jpg";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Link to={to}>
        <Typography>{title}</Typography>
      </Link>
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <Menu iconShape="square">
        {/* Stock images */}
        <MenuItem>
          <img
            src={StockImage1}
            alt="Stock Image 1"
            style={{ maxWidth: "120px", maxHeight: "120px" }} // Set max width and height
          />
        </MenuItem>
        <MenuItem>
          <img
            src={StockImage2}
            alt="Stock Image 2"
            style={{ maxWidth: "120px", maxHeight: "120px" }} // Set max width and height
          />
        </MenuItem>

        <Box paddingLeft={isCollapsed ? undefined : "10%"}>
          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "20px 0 5px 20px" }}
          >
            Main Menu
          </Typography>
          <Item
            title="Home"
            to="/"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Exchange"
            to="/exchange"
            icon={<CurrencyExchangeIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <SubMenu title="Stock & Fraud" icon={<ShowChartRoundedIcon />}>
          <Item
              title="Stock/ETF"
              to="/etf"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Index"
              to="/stock"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Currency"
              to="/currency"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Mutual Fund"
              to="/fund"
              selected={selected}
              setSelected={setSelected}
            />
          </SubMenu>
          <Item
            title="Wallets"
            to="/invoices"
            icon={<WalletIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Crypto"
            to="/crypto"
            icon={<CurrencyBitcoinIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Support
          </Typography>
          <Item
            title="Community"
            to="/community"
            icon={<PeopleIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Help and Support"
            to="/help"
            icon={<HelpOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}
          ></Typography>
        </Box>
      </Menu>
    </Box>
  );
};

export default Sidebar;
