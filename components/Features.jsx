export default function Features() {
  const features = [
    {
      icon: "AI",
      title: "AI Civic Guidance",
      desc: "Citizens can ask plain-language questions and receive clear, step-by-step civic guidance.",
    },
    {
      icon: "RT",
      title: "Department Routing",
      desc: "The assistant points people toward relevant offices for waste, water, road, lighting, and public service issues.",
    },
    {
      icon: "CS",
      title: "Complaint Support",
      desc: "Users learn what information to prepare before submitting a complaint, including location, evidence, and issue details.",
    },
    {
      icon: "AC",
      title: "Accessible for Everyone",
      desc: "A lightweight web experience designed for students, residents, and community groups on any modern device.",
    },
    {
      icon: "IN",
      title: "Local Information",
      desc: "Content is framed around Rawalpindi civic needs so answers stay practical, focused, and easy to act on.",
    },
    {
      icon: "UX",
      title: "Fast Web Access",
      desc: "The assistant is available from the browser without a complicated sign-up flow or heavy app install.",
    },
  ];

  const iconMap = {
    AI: "lightbulb",
    RT: "gear",
    CS: "file-earmark-text",
    AC: "people",
    IN: "geo-alt",
    UX: "speedometer2",
  };

  return (
    <section className="section featuresSection" id="features" aria-labelledby="features-title">
      <div className="sectionHeader">
        <p className="sectionKicker">What it does</p>
        <h2 id="features-title">Civic support that feels simple to use.</h2>
        <p className="sectionText">
          Built to make public-service information easier to find, understand, and act on.
        </p>
      </div>

      <div className="featureGrid">
        {features.map((item, index) => (
          <div className="featureCard" key={index}>
            <i
              className={`bi bi-${iconMap[item.icon]} featureIcon`}
              aria-hidden="true"
            />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
