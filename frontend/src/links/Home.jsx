import { useNavigate } from "react-router-dom"
import "./Home.css"
import graph from './logistic-regression.jpg';

function Home() {
  const navigate = useNavigate();

  return <div className="Container">
      <div className='Main'>
        <h1 className='HTitle'>CVD Diagnosis</h1>
        <p className='HBody'>A machine learning model used to predict cardiovascular disease.</p>
      
        <button onClick={() => navigate("/register")}>
          Get Started
        </button>
      </div>

      <div className="MLContainer">
        <div className="MLWrapper">
        <img className="graph" src={graph} alt='graph'/>
          <div className="Text">
            <h1>Running on a powerful machine learning model</h1>
            <p>Trained on a dataset containing over 1000 pieces of data, the machine learning model used for predicting cardiovascular disease (CVD) accurately generates predictions by 90%! To learn more click on the button below.</p>
          </div>
          <button onClick={() => navigate("/about")}>Learn More</button>
        </div>
      </div>

      <div className="Additional">
      <h1>Using the Model</h1>
        <div className="addInfo">
          <ol>
            <li>Start by clicking on the "Get Started" button on the homepage, or by clicking on the "Use Model" button in the navigation bar.</li>
            <li>Register for an account if you don't have one already (avoid using your legal names, or resued passwords).</li>
            <li>Once you are on the page you can start answering the list of questions.</li>
            <li>Click on submit once you have completed all of the questions and get your results!</li>
            <li>Based on your results please make decisions carefully, the model is not to be used as a substitute for a professional medical screening.</li>
          </ol>
        </div>
      </div>
    </div>
}
export default Home