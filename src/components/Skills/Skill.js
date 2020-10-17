import React from "react";
import "./Skill.css";

const Skill = () => {
  return (
    <>
      <section className="skills" id="skills">
        <div className="skill_max_width">
          <h2 className="skill_title">Skills</h2>
          <div className="skills_content">
            <div className="skill_column skill_left">
              <div className="skill_text">
                Creativity <span>& </span>experiences
              </div>
            </div>
            <div className="skill_column skill_right">
              <div className="skill_bars">
                <div className="skill_info">
                  <span>HTML</span>
                  <span>90%</span>
                </div>
                <div className="skill_line html"></div>
              </div>
              <div className="skill_bars">
                <div className="skill_info">
                  <span>CSS</span>
                  <span>85%</span>
                </div>
                <div className="skill_line css"></div>
              </div>
              <div className="skill_bars">
                <div className="skill_info">
                  <span>JavaScript</span>
                  <span>80%</span>
                </div>
                <div className="skill_line js"></div>
              </div>
              <div className="skill_bars">
                <div className="skill_info">
                  <span>TypeScript</span>
                  <span>70%</span>
                </div>
                <div className="skill_line ts"></div>
              </div>
              <div className="skill_bars">
                <div className="skill_info">
                  <span>GraphQl</span>
                  <span>65%</span>
                </div>
                <div className="skill_line graphql"></div>
              </div>
              <div className="skill_bars">
                <div className="skill_info">
                  <span>React JS</span>
                  <span>75%</span>
                </div>
                <div className="skill_line react"></div>
              </div>
              <div className="skill_bars">
                <div className="skill_info">
                  <span>Vue JS</span>
                  <span>85%</span>
                </div>
                <div className="skill_line vue"></div>
              </div>
              <div className="skill_bars">
                <div className="skill_info">
                  <span>Nest Js</span>
                  <span>60%</span>
                </div>
                <div className="skill_line nest"></div>
              </div>
              <div className="skill_bars">
                <div className="skill_info">
                  <span>MySQL</span>
                  <span>70%</span>
                </div>
                <div className="skill_line mysql"></div>
              </div>
              <div className="skill_bars">
                <div className="skill_info">
                  <span>Wordpress</span>
                  <span>80%</span>
                </div>
                <div className="skill_line press"></div>
              </div>
              <div className="skill_bars">
                <div className="skill_info">
                  <span>SEO</span>
                  <span>90%</span>
                </div>
                <div className="skill_line seo"></div>
              </div>
              <div className="skill_bars">
                <div className="skill_info">
                  <span>PostgreSQL</span>
                  <span>50%</span>
                </div>
                <div className="skill_line postgres"></div>
              </div>
              <div className="skill_bars">
                <div className="skill_info">
                  <span>Versioning (gitHub, GitLab)</span>
                  <span>65%</span>
                </div>
                <div className="skill_line version"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
