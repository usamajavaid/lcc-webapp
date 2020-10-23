import React, { Component } from 'react';
import Header from '../Header/header';
import Card from '../Card/card';
import Footer from '../Footer/Footer';
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                 <div style={{overflowX:"hidden"}}>
                <Header/>
                <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" 
              aria-controls="nav-home" aria-selected="true" id="tab-setting">symptoms & diagnosis</a>
              <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab"
               aria-controls="nav-profile" aria-selected="false" id="tab-setting">Investigation</a>
              <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" 
              aria-controls="nav-contact" aria-selected="false" id="tab-setting">Treatment</a>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <p id="inf-heading">Find out the information behind the cardiac symptoms.</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <p>Angina Symptoms</p>
                      <p>Aortic Stenosis Symptoms</p>
                      <p>Atrial Fibrillation Symptoms</p>
                      <p>Atrial Septal Defect (ASD) Symptoms</p>
                      <p>Blackouts and Fainting Symptoms</p>
                      <p>Breathlessness</p>
                      
                    </div>
                    <div className="col-md-4">
                      <p>Cardiovascular Health Screening</p>
                      <p>Carotid Artery Stenosis Symptoms</p>
                      <p>Chest Pain</p>
                      <p>Heart Failure Symptoms</p>
                      <p>Heart Palpitations</p>
                      <p>Heart Rhythm Problems</p>
                    </div>
                    <div className="col-md-4">
                      <p>High Blood Pressure Symptoms</p>
                      <p>Patent Foramen Ovale (PFO)</p>
                      <p>Postural Orthostatic Tachycardia Syndrome (POTS)</p>
                      <p>Varicose Veins Treatment</p>
                      <p>Vasovagal Syncope</p>
                      
                    </div>
                  </div>
                </div>
              </div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <p id="inf-heading">We offer a complete range of cardiac/respiratory investigations. 
                      Some done in house and some at carefully chosen alternative providers.</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <p>Angina Symptoms</p>
                      <p>Aortic Stenosis Symptoms</p>
                      <p>Atrial Fibrillation Symptoms</p>
                      <p>Atrial Septal Defect (ASD) Symptoms</p>
                      <p>Blackouts and Fainting Symptoms</p>
                      <p>Breathlessness</p>
                      
                    </div>
                    <div className="col-md-4">
                      <p>Cardiovascular Health Screening</p>
                      <p>Carotid Artery Stenosis Symptoms</p>
                      <p>Chest Pain</p>
                      <p>Heart Failure Symptoms</p>
                      <p>Heart Palpitations</p>
                      <p>Heart Rhythm Problems</p>
                    </div>
                    <div className="col-md-4">
                      <p>High Blood Pressure Symptoms</p>
                      <p>Patent Foramen Ovale (PFO)</p>
                      <p>Postural Orthostatic Tachycardia Syndrome (POTS)</p>
                      <p>Varicose Veins Treatment</p>
                      <p>Vasovagal Syncope</p>
                      
                    </div>
                  </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
            <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <p id="inf-heading">We offer a complete range of non- invasive treatment.</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <p>Angina Symptoms</p>
                      <p>Aortic Stenosis Symptoms</p>
                      <p>Atrial Fibrillation Symptoms</p>
                      <p>Atrial Septal Defect (ASD) Symptoms</p>
                      <p>Blackouts and Fainting Symptoms</p>
                      <p>Breathlessness</p>
                      
                    </div>
                    <div className="col-md-4">
                      <p>Cardiovascular Health Screening</p>
                      <p>Carotid Artery Stenosis Symptoms</p>
                      <p>Chest Pain</p>
                      <p>Heart Failure Symptoms</p>
                      <p>Heart Palpitations</p>
                      <p>Heart Rhythm Problems</p>
                    </div>
                    <div className="col-md-4">
                      <p>High Blood Pressure Symptoms</p>
                      <p>Patent Foramen Ovale (PFO)</p>
                      <p>Postural Orthostatic Tachycardia Syndrome (POTS)</p>
                      <p>Varicose Veins Treatment</p>
                      <p>Vasovagal Syncope</p>
                      
                    </div>
                  </div>
                </div>
            </div>
          </div>
                <Card/> 
                <Footer/>
                </div>
            </React.Fragment>
        )
    }
}
export default Home;