"use client";

import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoTiktok,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Footer3() {
  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div>
            <div className="mb-6 md:mb-8">
              <a href="#">
                <img
                  src="/Logo3.png"
                  alt="Logo image"
                  className="h-48 w-auto object-contain"
                />
              </a>
            </div>
            <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3">
              <a href="#">
                <BiLogoFacebookCircle className="size-10" />
              </a>
              <a href="#">
                <BiLogoInstagram className="size-10" />
              </a>
             <a href="https://www.tiktok.com/@kesseiadam?_r=1&_d=secCgYIASAHKAESPgo8A1JZnUquwaBblKqwdmjjVmzSPcE7P%2F0ylDHuHP4FsoDdxIdlHPxt3HlzjyGV9z3Is%2FF2ryKlht4HTdsmGgA%3D&_svg=2&checksum=00915f420943e2f8187abc51a64cc3b7737bdb34b5de838fda70a3f1b9d7352e&item_author_type=1&sec_uid=MS4wLjABAAAAKmlR6DnWeX_JVmXiU35EV4LHWul3BZcABlcjgIUtU2ezJWyQU90XStWfpP2dG_b8&sec_user_id=MS4wLjABAAAAKmlR6DnWeX_JVmXiU35EV4LHWul3BZcABlcjgIUtU2ezJWyQU90XStWfpP2dG_b8&share_app_id=1233&share_author_id=6878668637919151110&share_link_id=CF6E4618-2156-43F3-8AE1-B784EE2749BE&share_region=HU&share_scene=1&sharer_language=hu&social_share_type=5&source=h5_m&timestamp=1766020149&tt_from=copy&u_code=dek81mhae70bba&ug_btm=b8727%2Cb0&user_id=6878668637919151110&utm_campaign=client_share&utm_medium=ios&utm_source=copy" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black">
             <BiLogoTiktok className="size-10" />
             </a>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-4 text-4x1">
            <ul>
              <li className="py-2 font-semibold">
                <a href="/csomagok">Utazási csomagok</a>
              </li>
              <li className="py-2 font-semibold">
                <a href="/blog">Blog</a>
              </li>
              <li className="py-2 font-semibold">
                <a href="/contact">Kapcsolat</a>
              </li>
              <li className="py-2 font-semibold">
                <a href="/contact">Rólam</a>
              </li>
              <li className="py-2 font-semibold">
                <a href="/blog">GYIK</a>
              </li>
            </ul>
            <ul>
              <li className="py-2 font-semibold">
                <a href="https://www.facebook.com">Közösség</a>
              </li>
              <li className="py-2 font-semibold">
                <a href="/blog">Hírek</a>
              </li>
              <li className="py-2 font-semibold">
                <a href="/package">Inspiráció</a>
              </li>
              <li className="py-2 font-semibold">
                <a href="/blog">Tippek</a>
              </li>
              <li className="py-2 font-semibold">
                <a href="/blog">Kalandok</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-start justify-between pb-4 pt-6 md:flex-row md:items-center md:pb-0 md:pt-8">
          <p className="mt-8 md:mt-0">© 2024 Relume. All rights reserved.</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline">
              <a href="#">Adatvédelmi szabályzat</a>
            </li>
            <li className="underline">
              <a href="#">Felhasználási feltételek</a>
            </li>
            <li className="underline">
              <a href="#">Sütik beállítása</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
