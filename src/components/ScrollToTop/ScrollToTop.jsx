import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/*
--------------------------------------------------
SCROLL TO TOP
--------------------------------------------------
React Router does not reset scroll position on
navigation by default — without this, clicking a
link while scrolled down on one page lands you at
the same scroll position on the next page.

Mount this once, inside <BrowserRouter>, above your
<Routes>. It renders nothing.
--------------------------------------------------
*/
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;