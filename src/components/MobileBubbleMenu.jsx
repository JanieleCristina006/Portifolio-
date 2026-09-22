import { useState } from "react";
import { bubble as Menu } from "react-burger-menu";
import { FiArrowUpRight } from "react-icons/fi";

const menuStyles = {
  bmBurgerButton: {
    position: "fixed",
    width: "42px",
    height: "34px",
    right: "20px",
    top: "20px",
  },
  bmBurgerBars: {
    background: "#7961df",
    borderRadius: "999px",
    height: "3px",
  },
  bmBurgerBarsHover: {
    background: "#5f49c8",
  },
  bmCrossButton: {
    height: "28px",
    width: "28px",
    right: "28px",
    top: "28px",
  },
  bmCross: {
    background: "#ffffff",
    height: "24px",
  },
  bmMenuWrap: {
    top: 0,
  },
  bmMenu: {
    background: "#7961df",
    padding: "96px 30px 0",
  },
  bmMorphShape: {
    fill: "#7961df",
  },
  bmItemList: {
    display: "grid",
    alignContent: "start",
    gap: "16px",
    color: "#ffffff",
  },
  bmOverlay: {
    background: "rgba(22, 17, 38, 0.34)",
    backdropFilter: "blur(4px)",
    top: 0,
  },
};

export const MobileBubbleMenu = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="mobile-bubble-menu">
      <Menu
        right
        width="360px"
        isOpen={isOpen}
        onStateChange={(state) => setIsOpen(state.isOpen)}
        styles={menuStyles}
        itemClassName="mobile-bubble-link"
        itemListElement="nav"
        aria-label="Menu mobile"
      >
        <a className="mobile-bubble-brand" href="#inicio" onClick={closeMenu}>
          Janiele Cristina
        </a>
        {items.map((item) => (
          <a key={item.label} href={item.href} onClick={closeMenu}>
            {item.label}
            <FiArrowUpRight aria-hidden="true" />
          </a>
        ))}
      </Menu>
    </div>
  );
};
