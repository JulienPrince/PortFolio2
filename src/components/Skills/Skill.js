import React from "react";
import "./Skill.css";

const Skill = () => {
  return (
    <>
      <section className="skills" id="skills">
        <div className="skill_max_width">
          <h2 className="skill_title">My skills</h2>
          <div className="skills_content">
            <div className="skill_column skill_left">
              <div className="skill_text">
                Creative skills <span>& experiences.</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, ratione error est recusandae consequatur, iusto
                illum deleniti quidem impedit, quos quaerat quis minima sequi.
                Cupiditate recusandae laudantium esse, harum animi aspernatur
                quisquam et delectus ipsum quam alias quaerat? Quasi hic quidem
                illum. Ad delectus natus aut hic explicabo minus quod.
              </p>
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
                  <span>60%</span>
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
                  <span>PostgreSQL</span>
                  <span>50%</span>
                </div>
                <div className="skill_line postgres"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
