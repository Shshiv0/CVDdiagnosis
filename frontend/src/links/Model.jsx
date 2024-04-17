import { Component } from "react"
import "./Model.css"

function Model() {
    return <div className="Home">
      <JsonForm />
    </div>
}

export default Model


// Create Form that sends data in JSON format to backend
class JsonForm extends Component{
    constructor(props){
        super(props);
        this.state = {age:"", gender:"", cpt:"", trestbps:"", chol:"",
                      fbs:"", restecg:"", thalach:"", exang:"", oldpeak:"",
                      slope:"", ca:"", thal:"", result:""}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Set state to the target value
    handleChange(event){
        this.setState({[event.target.name]:event.target.value});
    }

    // Send data to backend
    handleSubmit(event){
        event.preventDefault();

        const url="https://f4620081-a8e3-4fa9-9ff1-8c5ddaea8087-dev.e1-us-cdp-2.choreoapis.dev/cvd-diagnosis/backend/rest-api-be2/v1.0/resultJson";
        const bodyData=JSON.stringify( {"age":this.state.age,"gender":this.state.gender, "cpt":this.state.cpt,
                                        "trestbps":this.state.trestbps, "chol":this.state.chol,
                                        "fbs":this.state.fbs, "restecg":this.state.restecg,
                                        "thalach":this.state.thalach, "exang":this.state.exang,
                                        "oldpeak":this.state.oldpeak,"slope":this.state.slope,
                                        "ca":this.state.ca, "thal":this.state.thal,
                                        } );

        const reqOpt ={method:"POST",headers:{"Content-type":"application/json"},body:bodyData};
        fetch(url,reqOpt)
        .then((resp) => resp.json())
        .then((respJ) => this.setState({result:respJ.result}))
    }

    // Render a form
    render(){
        return <div>
        <form onSubmit={this.handleSubmit}>
            <h1 className='ModelTitle'>Screening</h1>
                    <div className="query">
                        <h4>Age: </h4>
                        <input type='text' name="age" placeholder='age' value={this.state.age} onChange={this.handleChange} required className="textInput"></input>
                    </div>
                    <div className="query">
                        <h4>Gender</h4>
                        <label>
                            <input type="radio" name="gender" value="1" checked={this.state.gender === '1'} onChange={this.handleChange}/>
                            Male
                        </label>
                        <label>
                            <input type="radio" name="gender" value="2" checked={this.state.gender === '2'} onChange={this.handleChange}/>
                            Female
                        </label>
                    </div>

                    <div className="query">
                        <h4>Chest Pain Type</h4>
                        <label>
                        <input type="radio" name="cpt" value="1" checked={this.state.cpt === '1'} onChange={this.handleChange}/>
                            Typical Agnia
                        </label>
                        <label>
                            <input type="radio" name="cpt" value="2" checked={this.state.cpt === '2'} onChange={this.handleChange}/>
                            Atypical Agnia
                        </label>
                        <label>
                            <input type="radio" name="cpt" value="3" checked={this.state.cpt === '3'} onChange={this.handleChange}/>
                            Non-Anginal pain
                        </label>
                        <label>
                            <input type="radio" name="cpt" value="4" checked={this.state.cpt === '4'} onChange={this.handleChange}/>
                            Asymptomatic
                        </label>
                    </div>

                    <div className="query">
                        <h4>Resting Blood Pressure: </h4>
                        <input type='text' name="trestbps" placeholder='trestbps' value={this.state.trestbps} required onChange={this.handleChange} className="textInput"></input>
                    </div>

                    <div className="query">
                        <h4>Serum Cholesterol (mg/dl): </h4>
                        <input type='text' name="chol" placeholder='chol' value={this.state.chol} required onChange={this.handleChange} className="textInput"></input>
                    </div>

                    <div className="query">
                        <h4>Fasting Blood Sugar (mg/dl): </h4>
                        <label>
                            <input type="radio" name="fbs" value="1" checked={this.state.fbs === '1'} onChange={this.handleChange}/>
                            Less than 120
                        </label>
                        <label>
                            <input type="radio" name="fbs" value="2" checked={this.state.fbs === '2'} onChange={this.handleChange}/>
                            Greater than 120
                        </label>
                    </div>

                    <div className="query">
                        <h4>Resting Electrocardiographic results: </h4>
                        <label>
                            <input type="radio" name="restecg" value="0" checked={this.state.restecg === '0'} onChange={this.handleChange}/>
                            Normal
                        </label>
                        <label>
                            <input type="radio" name="restecg" value="1" checked={this.state.restecg === '1'} onChange={this.handleChange}/>
                            ST-T wave abnormality
                        </label>
                        <label>
                            <input type="radio" name="restecg" value="2" checked={this.state.restecg === '2'} onChange={this.handleChange}/>
                            Left ventricular hypertropy
                        </label>
                    </div>

                    <div className="query">
                        <h4>Maximum Heart Rate Achieved: </h4>
                        <input type='text' name="thalach" placeholder='thalach' value={this.state.thalach} required onChange={this.handleChange} className="textInput"></input>
                    </div>
                        
                    <div className="query">
                        <h4>Exercise Induced Agnia?</h4>
                        <label>
                            <input type="radio" name="exang" value="1" checked={this.state.exang === '1'} onChange={this.handleChange}/>
                            Yes
                        </label>
                        <label>
                            <input type="radio" name="exang" value="0" checked={this.state.exang === '0'} onChange={this.handleChange}/>
                            No
                        </label>
                    </div>

                    <div className="query">
                        <h4>ST depression induced by exercise relative to rest: </h4>
                        <input type='text' name="oldpeak" placeholder='oldpeak' value={this.state.oldpeak} required onChange={this.handleChange} className="textInput"></input>
                    </div>

                    <div className="query">
                        <h4>Slope of peak exercise ST segment: </h4>
                        <label>
                            <input type="radio" name="slope" value="0" checked={this.state.slope === '0'} onChange={this.handleChange}/>
                            Up
                        </label>
                        <label>
                            <input type="radio" name="slope" value="1" checked={this.state.slope === '1'} onChange={this.handleChange}/>
                            Flat
                        </label>
                        <label>
                            <input type="radio" name="slope" value="2" checked={this.state.slope === '2'} onChange={this.handleChange}/>
                            Down
                        </label>
                    </div>

                    <div className="query">
                        <h4>Number of Major Vessels Colored by Flouroscopy: </h4>
                        <label>
                            <input type="radio" name="ca" value="0" checked={this.state.ca === '0'} onChange={this.handleChange}/>
                            0
                        </label>
                        <label>
                            <input type="radio" name="ca" value="1" checked={this.state.ca === '1'} onChange={this.handleChange}/>
                            1
                        </label>
                        <label>
                            <input type="radio" name="ca" value="2" checked={this.state.ca === '2'} onChange={this.handleChange}/>
                            2
                        </label>
                        <label>
                            <input type="radio" name="ca" value="3" checked={this.state.ca === '3'} onChange={this.handleChange}/>
                            3
                        </label>
                    </div>

                    <div className="query">
                        <h4>Thalassemia: </h4>
                        <label>
                            <input type="radio" name="thal" value="1" checked={this.state.thal === '1'} onChange={this.handleChange}/>
                            Normal
                        </label>
                        <label>
                            <input type="radio" name="thal" value="2" checked={this.state.thal === '2'} onChange={this.handleChange}/>
                            Fixed defect
                            </label>
                        <label>
                            <input type="radio" name="thal" value="3" checked={this.state.thal === '3'} onChange={this.handleChange}/>
                            Reversable defect
                        </label>
                    </div>
                    <input className="form-submit-btn" type="submit" value="Submit" ></input>
            </form>

            <div className="results">
                <h1>Result:</h1>
                <p>{this.state.result}</p>
                <p>Disclaimer: It is important to recognize that this prediction is not a conclusive diagnosis of your condition, but rather a comparison between your symptoms and other symptoms within a database. If you have any medical concerns seek help from a medical professional.</p>
            </div>

        </div>
    }
}