import Marquee from "react-fast-marquee";

export default function Banner() {
  return (
    <>
      <Marquee speed={200}>
        <div className="marquee-content">Photography</div>
        <div className="marquee-content">Videography</div>
        <div className="marquee-content">Digital Marketing</div>
        <div className="marquee-content">Web Designing</div>
        <div className="marquee-content">Branding</div>
      </Marquee>
    </>
  );
}
