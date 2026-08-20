import React from "react";
import "../assets/styles/Writing.scss";

const articles = [
  {
    title: "My 6-Month Plan to Become Hireable as a Data Scientist / ML Engineer",
    text: "A practical roadmap focused on projects, measurable outcomes and becoming interview-ready rather than collecting endless tutorials.",
    link: "https://sudhamsr.medium.com/my-6-month-plan-to-become-hireable-as-a-data-scientist-ml-engineer-4ffdc8600552",
  },
  {
    title: "Python for Data Science — What Exploratory Data Analysis (EDA) Actually Means",
    text: "A practical explanation of EDA, data quality, distributions, relationships and the analytical thinking that comes before modelling.",
    link: "https://sudhamsr.medium.com/python-for-data-science-what-exploratory-data-analysis-eda-actually-means-b2e3edd4c9b4",
  },
  {
    title: "Python for Data Science — Hypothesis Testing Without Academic Nonsense",
    text: "A practical introduction to hypothesis testing, random variation, evidence and how analysts interpret experiments.",
    link: "https://sudhamsr.medium.com/python-for-data-science-hypothesis-testing-without-academic-nonsense-4f25140b42dc",
  },
  {
    title: "Python for Data Science — p-values: Why People Misunderstand Them",
    text: "A clear explanation of p-values, statistical significance, practical significance and common interpretation mistakes.",
    link: "https://sudhamsr.medium.com/python-for-data-science-p-values-why-people-misunderstand-them-cb50195b0774",
  },
];

function Writing() {
  return (
    <section className="writing-container" id="writing">
      <div className="writing-inner">
        <h1>Writing & Teaching</h1>
        <p className="writing-lead">I write about Python, data science, machine learning and the practical lessons behind building AI systems.</p>
        <div className="writing-grid">
          {articles.map((article, index) => (
            <article className="writing-card" key={index}>
              <div className="writing-number">0{index + 1}</div>
              <h2>{article.title}</h2>
              <p>{article.text}</p>
              <a href={article.link} target="_blank" rel="noreferrer">Read on Medium ↗</a>
            </article>
          ))}
        </div>
        <a className="medium-profile-link" href="https://medium.com/@sudhamsr" target="_blank" rel="noreferrer">View all writing on Medium →</a>
      </div>
    </section>
  );
}

export default Writing;
