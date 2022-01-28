import IndexNav from "./IndexNav.js";
import IndexFooter from "./IndexFooter.js";

export default function Index() {
  return (
    <div className="index">
      <IndexNav />
      <div className="section one">
        <div className="section-left">
          <div className="section-left-inner">
            <div className="section-left-heading">
              Find the Opinions of the World
            </div>
            <a href="/create" className="create-poll primary-btn">
              Get Started
            </a>
          </div>
        </div>
        <div className="section-right">
          <div className="example-poll">
            <div className="poll-question">What's your favorite food?</div>
            <div className="poll-options">
              <div className="poll-option">Pizza</div>
              <div className="poll-option">Cake</div>
              <div className="poll-option">Potato</div>
              <div className="poll-option">Other</div>
            </div>
          </div>
          <svg viewBox="0 0 100 100">
            <circle
              cx="150"
              cy="100"
              r="150"
              fill="rgb(var(--secondary-clr))"
            />
          </svg>
        </div>
      </div>
      <div className="section two"></div>
      <IndexFooter />
    </div>
  );
}
