import React from 'react'
import kampusImage from '../assets/kampus.jpg';
import pasarImage from '../assets/pasar.jpg';

const Project = () => {
  return (
    <>
    <section id="project">
      <div className="main-container">
        <h1 className='section-title-project text-white'>My Project</h1>
        <p className="project-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore natus molestias, porro debitis quidem eligendi vitae saepe nostrum illo in aliquam blanditiis, dolore numquam corporis, sit laboriosam veniam exercitationem aspernatur.
        </p>

        <div className="grid-3">
          {/* project 1 */}
          <div className="project">
          <div className="project-icon">
            <img src={kampusImage} alt="foto kampus"/>
          </div>
            <h4>Kampus Tahuna</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo assumenda earum nihil obcaecati repellat non doloribus molestias itaque odio dignissimos pariatur accusantium quo, autem praesentium reprehenderit. Ad delectus fugiat minus.</p>
          </div>

          {/* project 2 */}
          <div className="project">
            <div className="project-icon">
              <img src={pasarImage} alt="foto pasar" width={1032} />
            </div>
            <h4>Pasar Naha</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ratione ipsum commodi dicta dignissimos nostrum, ipsam beatae sed ad provident doloremque harum quos aperiam aut debitis quasi eius, dolor repellendus.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Project;
