import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Intern</h4>
                <h5>IDG10 SOLUTION PVT LTD</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              <ul>
                <li>Contributed to improving project performance and efficiency.</li>
                <li>Implemented software changes that optimized system functionality and workflow.</li>
                <li>. Collaborated with the development team to enhance overall product quality</li>
              </ul>
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Android Developer Intern</h4>
                <h5>Engineer Core</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Created the Blood Link (Android app), optimizing blood donation processes and enhancing community engagement
            </p>
          </div>
          {/* <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Position In Company</h4>
                <h5>Company Name</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              labore sit non ipsum temporibus quidem, deserunt eaque officiis
              mollitia ratione suscipit repellat.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Career;
