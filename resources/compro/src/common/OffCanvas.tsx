"use client";
import menu_data from "@/data/menu-data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";



interface OffCanvasProps {
  setOpenMenu: (value: boolean) => void;
  openMenu: boolean;
}


const OffCanvas = ({ setOpenMenu, openMenu }: OffCanvasProps) => {

  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  const [navTitle2, setNavTitle2] = useState("");
  //openMobileMenu
  const openMobileMenu2 = (menu: string) => {
    if (navTitle2 === menu) {
      setNavTitle2("");
    } else {
      setNavTitle2(menu);
    }
  };


  return (
    <>


      <div className={`luminix-menu-wrapper ${openMenu ? "luminix-body-visible" : ""}`}>
        <div className="luminix-menu-area text-center">
          <div className="luminix-menu-mobile-top">
            <div className="mobile-logo">
              <Link href="/">
                <Image width={120} height={31} src="/assets/images/logo/logo-dark.svg" alt="logo" />
              </Link>
            </div>
            <button className="luminix-menu-toggle mobile" onClick={() => setOpenMenu(false)}>
              <i className="ri-close-line"></i>
            </button>
          </div>
          <div className="luminix-mobile-menu">
            <ul>
              {menu_data.map((item, i) => (
                <li key={i} className={`menu-item-has-children luminix-item-has-children ${navTitle === item.title ? "luminix-active" : ""}`}>
                  <Link href={item.link}>{item.title}
                    {item.has_dropdown ? <span className="luminix-mean-expand" onClick={() => openMobileMenu(item.title)}></span> : null}
                  </Link>
                  {item.has_dropdown && (
                    <ul className={`sub-menu luminix-submenu ${navTitle === item.title ? "luminix-open" : ""}`} style={{ display: navTitle === item.title ? "block" : "none", }}>
                      {item.sub_menus?.map((submenu, i) => (
                        <li key={i} className={`menu-item-has-children luminix-item-has-children ${navTitle2 === submenu.title ? "luminix-active" : ""}`}>
                          <Link className="no-border" href={submenu.link}>{submenu.title}
                            {('has_inner_dropdown' in submenu) && submenu.has_inner_dropdown ? <span className="luminix-mean-expand" onClick={() => openMobileMenu2(submenu.title)}></span> : null}
                          </Link>
                          {('has_inner_dropdown' in submenu) && submenu.has_inner_dropdown && (
                            <ul className={`sub-menu luminix-submenu ${navTitle2 === submenu.title ? "luminix-open" : ""}`} style={{ display: navTitle2 === submenu.title ? "block" : "none", }}>
                              {submenu?.sub_menus?.map((subsubmenu, sub_i) => (
                                <li key={sub_i}>
                                  <Link href={subsubmenu.link}>{subsubmenu.title}</Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

            </ul>
          </div>
          <div className="luminix-mobile-menu-btn">
            <Link className="luminix-default-btn sm-size" href="/about-us" data-text="Get in Touch"><span className="btn-wraper">Kontak Kami</span></Link>
          </div>
        </div>
      </div>


    </>
  );
};

export default OffCanvas;
