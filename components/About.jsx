export default function About() {
  const steps = [
    "Ask about a civic issue in plain language.",
    "Review the suggested department and complaint details.",
    "Prepare the right information before taking action.",
  ];

  return (
    <>
      <section className="section about" id="about" aria-labelledby="about-title">
        <div className="aboutGrid">
          <div className="aboutCopy">
            <p className="sectionKicker">About the project</p>
            <h2 id="about-title">Designed for everyday civic questions in Rawalpindi.</h2>

            <p>
              Pindi Ki Awaaz is a civic-tech project created to help citizens of
              Rawalpindi find reliable guidance about local civic issues. Many people
              do not know which department handles their problem, how to file a
              complaint, or what steps they should follow.
            </p>

            <p>
              The platform uses AI to simplify public information into practical
              guidance through an easy-to-use chatbot interface.
            </p>
          </div>

          <div className="processList" aria-label="How Pindi Ki Awaaz works">
            {steps.map((step, index) => (
              <div className="processItem" key={step}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="impactBand" id="impact" aria-labelledby="impact-title">
        <div className="impactInner">
          <div>
            <p className="sectionKicker">Community value</p>
            <h2 id="impact-title">Clearer civic guidance before the complaint is filed.</h2>
          </div>
          <div className="impactStats" aria-label="Project impact goals">
            <div>
              <strong>Less confusion</strong>
              <span>Understand which office may handle the issue.</span>
            </div>
            <div>
              <strong>Better reports</strong>
              <span>Prepare complete complaint details the first time.</span>
            </div>
            <div>
              <strong>Wider access</strong>
              <span>Use a simple browser-based assistant on mobile or desktop.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
