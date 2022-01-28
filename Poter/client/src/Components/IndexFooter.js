import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function IndexFooter() {
  return (
    <div className="footer">
      <div className="row social">
        <a
          href="https://www.youtube.com/channel/UCxE7w7DyxcZxAnlSqnDVDKQ"
          className="social-link"
          target="_blank"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a
          href="https://twitter.com/Potato_Palmite"
          className="social-link"
          target="_blank"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
      <div className="row extra">
        <div className="terms">Terms of Use</div>
        <div className="copyright">&copy;2022 Potato Inc.</div>
      </div>
    </div>
  );
}
