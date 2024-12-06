import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import '../assets/css/Skills.css'
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaPython,
  FaGit,
  FaGithub,
  FaDocker,
  FaAngular,
  FaFileExcel,
  FaBootstrap,
} from 'react-icons/fa'
import { 
  SiDjango, 
  SiPostgresql, 
  SiMongodb,
  SiFlask,
  SiKubernetes,
  SiGooglecolab,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiPlotly,
  SiJupyter,
  SiTensorflow,
} from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'
import { BsBarChartFill } from 'react-icons/bs'

function Skills() {
  const iconsRef = useRef([])

  useEffect(() => {
    iconsRef.current.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
          scale: 1.2,
          rotation: 360,
          duration: 0.3
        })
      })

      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.3
        })
      })
    })
  }, [])

  return (
    <div className="container mt-5 pt-5">
      <h1>Compétences</h1>
      <div className="skills-container">
        <div className="skills-item">
          <h2>Mes technologies web</h2>
          <ul>
            <li>
              <FaHtml5 className="tech-icon" ref={el => iconsRef.current.push(el)} style={{color: '#E34F26'}} />
              HTML
            </li>
            <li>
              <FaCss3Alt className="tech-icon" ref={el => iconsRef.current.push(el)} style={{color: '#1572B6'}} />
              CSS
            </li>
            <li>
              <FaJs className="tech-icon" ref={el => iconsRef.current.push(el)} style={{color: '#F7DF1E'}} />
              JavaScript
            </li>
            <li>
              <FaReact className="tech-icon" ref={el => iconsRef.current.push(el)} style={{color: '#61DAFB'}} />
              React
            </li>
            <li>
              <FaNodeJs className="tech-icon" ref={el => iconsRef.current.push(el)} style={{color: '#339933'}} />
              Node.js
            </li>
            <li>
              <SiDjango className="tech-icon" ref={el => iconsRef.current.push(el)} style={{color: '#092E20'}} />
              Django
            </li>
            <li>
              <FaAngular className="tech-icon" ref={el => iconsRef.current.push(el)} style={{color: '#DD0031'}} />
              Angular
            </li>
            <li>
              <FaBootstrap className="tech-icon" ref={el => iconsRef.current.push(el)} style={{color: '#7952B3'}} />
              Bootstrap
            </li>
          </ul>

          <h2>Mes technologies data analytics</h2>
          <ul>
            <li>
              <FaPython className="tech-icon" ref={el => iconsRef.current.push(el)} style={{color: '#3776AB'}} />
              Python
            </li>
            <li>
              <FaFileExcel className="tech-icon" ref={el => iconsRef.current.push(el)} style={{color: '#217346'}} />
              Excel
            </li>
            <li>
              <BsBarChartFill className="tech-icon" ref={el => iconsRef.current.push(el)} style={{color: '#F2C811'}} />
              Power BI
            </li>
            <li>
              <SiFlask className="tech-icon" ref={el => iconsRef.current.push(el)} style={{color: '#000000'}} />
              Flask
            </li>
            <li>
              <SiPostgresql className="tech-icon" ref={el => iconsRef.current.push(el)} style={{color: '#336791'}} />
              SQL
            </li>
            <li>
              <SiMongodb className="tech-icon" ref={el => iconsRef.current.push(el)} style={{color: '#47A248'}} />
              MongoDB
            </li>
            <li>
              <SiPandas className="tech-icon" ref={el => iconsRef.current.push(el)} style={{color: '#150458'}} />
              Pandas
            </li>
            <li>
              <SiNumpy className="tech-icon" ref={el => iconsRef.current.push(el)} style={{color: '#013243'}} />
              Numpy
            </li>
            <li>
              <SiPlotly className="tech-icon" ref={el => iconsRef.current.push(el)} style={{color: '#3F4F75'}} />
              Plotly
            </li>
            <li>
              <SiScikitlearn className="tech-icon" ref={el => iconsRef.current.push(el)} style={{color: '#F7931E'}} />
              Scikit-learn
            </li>
            <li>
              <SiTensorflow className="tech-icon" ref={el => iconsRef.current.push(el)} style={{color: '#FF6F00'}} />
              TensorFlow
            </li>
            <li>
              <SiJupyter className="tech-icon" ref={el => iconsRef.current.push(el)} style={{color: '#F37626'}} />
              Jupyter
            </li>
            <li>
              <SiGooglecolab className="tech-icon" ref={el => iconsRef.current.push(el)} style={{color: '#F9AB00'}} />
              Google Colab
            </li>
          </ul>

          <h2>Mes technologies de gestion de projet</h2>
          <ul>
            <li>
              <FaGit className="tech-icon" ref={el => iconsRef.current.push(el)} style={{color: '#F05032'}} />
              Git
            </li>
            <li>
              <FaGithub className="tech-icon" ref={el => iconsRef.current.push(el)} style={{color: '#181717'}} />
              GitHub
            </li>
            <li>
              <FaDocker className="tech-icon" ref={el => iconsRef.current.push(el)} style={{color: '#2496ED'}} />
              Docker
            </li>
            <li>
              <SiKubernetes className="tech-icon" ref={el => iconsRef.current.push(el)} style={{color: '#326CE5'}} />
              Kubernetes
            </li>
          </ul>

          <h2>Outils de développement</h2>
          <ul>
            <li>
              <VscCode className="tech-icon" ref={el => iconsRef.current.push(el)} style={{color: '#007ACC'}} />
              VSCode
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
