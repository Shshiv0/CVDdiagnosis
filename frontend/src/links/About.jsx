import "./Generic.css"

function About() {
    return <div className='container'>
        <h1 className='title'>About CVD Diagnosis</h1>
        <div className = 'content'>
          <p>CVD Diagnosis is a machine learning model developed to predict cardiovascular disease based off various 
             indicators such as: gender, age, activity levels, etc. The machine learning model was trained on a public
             dataset containing over 1000 pieces of data. The machine learning model uses logistic regression to make
             predictions. After training the model on the training dataset (containing 800 pieces of data), the model
             achieved an accuracy of 90% on the testing dataset.</p>
          <p>When registering for an account please refrain from using any personal information such as your legal names, 
             or any reused passwords. </p>
          <p>Disclaimer: CVD Diagnosis is not to be used as a substitute for a medical screening performed by medical professionals.
             All of the results generated by the model are not to be taken as a conclusive diagnosis, the results are predictions 
             made by the model by comparing it with previous data. If you have any medical concerns please consult with a medical
             professional near you. </p>
        </div>
      </div>
}

export default About