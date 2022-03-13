export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          className="col-md-8 col-md-offset-2 section-title"
          style={{ marginBottom: "50px" }}
        >
          <h2>Meet the Team</h2>
        </div>
        <div id="row" style={{ display: "flex", justifyContent: "center" }}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img
                      src={d.img}
                      alt="..."
                      className="team-img"
                      style={{ minHeight: 240 }}
                    />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
