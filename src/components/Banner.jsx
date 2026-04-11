import bannerMain from "../assets/banner-main.png";
import bgShadow from "../assets/bg-shadow.png";

export default function Banner() {
  return (
    <section className="banner">
      <img src={bgShadow} alt="" className="banner-bg-shadow" />
      <div className="banner-content">
        <img src={bannerMain} alt="Cricket" className="banner-cricket-img" />
        <h1 className="banner-title">Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p className="banner-subtitle">Beyond Boundaries Beyond Limits</p>
        <button className="btn-claim">Claim Free Credit</button>
      </div>
    </section>
  );
}
