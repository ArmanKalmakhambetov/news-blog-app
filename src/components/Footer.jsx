import { useTheme } from "../providers/ThemeProvider";
import classnames from "classnames";

function Footer() {
  const { isDarkTheme } = useTheme();
  return (
    <footer className={classnames("footer", { dark: isDarkTheme })}>
      
        <div className="footer__left">
          <div className="footer__left-top">
            <div className="footer__left-item">
              <div className="footer__mega-news">
                <div className="footer__title">Mega News</div>
                <div className="footer__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto nam impedit minus, nesciunt a deserunt, voluptatem
                  distinctio, dolorum autem nostrum eum sed quos mollitia
                  corrupti fugiat. Laboriosam sit reiciendis eos perferendis,
                  inventore, laudantium natus repudiandae modi nostrum facere
                  quas, ex omnis esse fuga minima. Laborum hic nobis iste
                  aperiam accusantium?
                </div>
              </div>
              <div className="footer__newsletters">
                <div className="footer__title">Newsletters</div>
              </div>
            </div>
            <div className="footer__right-item">
              <div className="footer__categories">
                <div className="footer__title">Categories</div>

              </div>
              <div className="footer__socials"></div>
            </div>
          </div>
          <div className="footer__left-bot">
            <div className="footer_privacy">privacy policy | terms & conditions</div>
            <div className="footer_copyright">all copyright (c) 2024 reserved</div>
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__latest-news"></div>
        </div>
      
    </footer>
  );
}

export default Footer;
