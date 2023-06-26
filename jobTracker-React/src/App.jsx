import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container">
        <h1>Job Application Tracker</h1>
        <section id="jobs">
          <div class="j-desc">
            <img
              class="j-desc__company-image"
              src="https://media.licdn.com/dms/image/C560BAQFRJm8faxGylA/company-logo_100_100/0/1678742239224?e=1693440000&v=beta&t=3qoM-csXeIsnQbpcIe_x7I2SzmFLolDm4_jbH-CCauw"
              alt="Patterned Learning AI"
            />
            <div class="j-desc__details">
              <h2 class="j-desc__job-title">Junior Front-End Developer</h2>
              <p class="j-desc__company">Patterned Learning AI</p>
              <ul class="j-desc__metadata">
                <li class="j-desc__location">San Francisco, CA</li>
                <li class="j-desc__salary">$100k/yr - $120k/yr</li>
                <li class="j-desc__posting_date">6 days ago</li>
              </ul>
            </div>
          </div>
          <div class="j-desc">
            <img
              class="j-desc__company-image"
              src="https://media.licdn.com/dms/image/C4E0BAQEiY07GSLZtFQ/company-logo_100_100/0/1539023176649?e=1693440000&v=beta&t=Ljn475N8jNJjVAAvDCSKPeSYHByrqqKO7Y30uMTSfa4"
              alt="Aha! company"
            />
            <div class="j-desc__details">
              <h2 class="j-desc__job-title">Ruby on Rails Engineer</h2>
              <p class="j-desc__company">Aha!</p>
              <ul class="j-desc__metadata">
                <li>Washington D.C. (Remote)</li>
                <li>$100k/yr - $160k/yr</li>
                <li>Promoted - 4 Applicants</li>
              </ul>
            </div>
          </div>
          <div class="j-desc">
            <img
              class="j-desc__company-image"
              src="https://media.licdn.com/dms/image/C560BAQFSVDtroiTPVg/company-logo_100_100/0/1662729127883?e=1693440000&v=beta&t=X0Br7LxZj81EFCFajSSfVZeLYjco5EawS0OmeIetoVE"
              alt="Jobot company"
            />
            <div class="j-desc__details">
              <h2 class="j-desc__job-title">
                REMOTE Software Developer - Ruby/React
              </h2>
              <p class="j-desc__company">Jobot</p>
              <ul class="j-desc__metadata">
                <li>Baltimore, MD (Remote)</li>
                <li>$110k/yr - $140k/yr</li>
                <li>6 hours ago</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
