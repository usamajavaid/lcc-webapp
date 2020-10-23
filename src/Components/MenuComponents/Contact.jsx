import React, { Component} from 'react'
import Map from '../Maps';
import Footer from '../Footer/Footer';
import './grid.css';
import Select from 'react-select';
import DatePicker from 'react-date-picker';
import {TextField} from '@material-ui/core';
import * as firebase from 'firebase';


const options = [
    { value: 'Mr', label: 'Mr' },
    { value: 'Mrs', label: 'Mrs' },
    { value: 'Miss', label: 'Miss' },
    { value: 'Dr', label: 'Dr' },
    { value: 'Professor', label: 'Professor' },
  ];

export default class Contact extends Component{
    state = {
        name:'',
        selectedOption: null,
        title:'',
        dateValue:'',
        dob:null,
        Email:'',
        Phone:'',
        prevpatient:'',
        message:'',
        Yes:'',
        No:'',
      };
      handleChange = selectedOption => {
          const values=selectedOption.value;
        this.setState({ selectedOption});
        this.setState({ title:values});
        console.log(`Option selected:`, selectedOption.value);
      };
      check=()=>
    {
       console.log(this.state.dateValue)
    firebase.database().ref('user/loginuserdata').push(
        {
            
            title:this.state.title,
            name:this.state.name,
            UserEmail:this.state.Email,  
            Phone:this.state.Phone,
            prevpatient:this.state.prevpatient,
            message:this.state.message,
            dateValue:this.state.dateValue,
            
            }).then(()=>{
             alert("We recived your Enquiry"); 
            }).catch((error)=>{
              console.log(error);
              alert(error);
          })
    }
    render() {
        return (
            <div>
                <Map/>
                <div className="container">
                    <div className="row">
                        <div className="col-6" style={{marginLeft:"-220px"}}>
                        <div className="container4">
                    <p id="heading-contct">Make an enquiry</p>
                    
                <Select
                    value={this.state.selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    id="title-list"
                    
                /><div id="enquiry-fullname">
                    <TextField
                        className="name-contact"
                        id="outlined-secondary"
                        label="Full Name"
                        variant="outlined"
                        color="secondary"
                        onChange={(event)=>this.setState({name:event.target.value})}
                    />
                    </div>
                    <TextField
                        id="outlined-secondary"
                        label="Email"
                        variant="outlined"
                        color="secondary"
                        onChange={(event)=>this.setState({Email:event.target.value})}
                    />
                    <TextField
                        id="outlined-secondary"
                        label="Phone"
                        variant="outlined"
                        color="secondary"
                        onChange={(event)=>this.setState({Phone:event.target.value})}
                    />
                    <label>Date of Birth
                    <TextField
                        id="outlined-secondary"
                        variant="outlined"
                        color="secondary"
                        type="date"
                        onChange={(event)=>this.setState({dateValue:event.target.value})}
                    />
                    </label>
                    <label id="radio-contact"> Previous Patient  
                    <form>
                        <input  type="radio" name="fruit" 
                                onChange={(event)=>this.setState({
                                prevpatient:event.target.value})} 
                                value="Yes" />Yes&nbsp;&nbsp;
                        <input  type="radio" name="fruit" 
                                onChange={(event)=>this.setState({
                                prevpatient:event.target.value})} 
                                value="No" />No
                    </form>
                    </label>
                        <textarea   
                            placeholder="Message..." id="message-contact" 
                            onChange={(event)=>this.setState({message:event.target.value})}
                        >
                        </textarea>
                    <p id="submit-btn-txt">In submitting your personal data via this form, you consent to 
                        being contacted via the details provided so that your enquiry can be 
                        responded to. A backup of your data will be held but only 
                        authorised individuals will be able to access your data. If you would 
                        like your data to be removed, please email support@thewebkitchen.co.uk.
                    </p>
                    <button type="button" class="btn-enquiry fiil" id="enquiry-btn" onClick={this.check}>Send</button>
                </div>
                        </div>
                        <div className="col-6" style={{marginLeft:"220px"}}>
                            <br></br>
                            <br></br>
                            <p id="contact-highlits">Where we are</p>
                            <p id="contact-discription">66 Harley Street, London W1G 7HD, United Kingdom.</p>
                            <p id="contact-discription">Download and print a map to the practise.</p>
                            <p id="contact-highlits">Personal assistant</p>
                            <p id="contact-discription"><font color=" color: #c32427">Tel:</font> +44 20 7436 0669 – 9am to 5pm.</p>
                            <p id="contact-discription">Fax:+44 20 7323 0217 – 24Hours</p>
                            <p id="contact-discription">Email: <font color=" color: #c32427">info@londoncardiovascularclinic.co.uk</font></p>
                            <p id="contact-highlits">Emergency consultation</p>
                            <p id="contact-discription"> <font color=" color: #c32427">+44 20 7483 5148 </font>– Please ask the operator at the Wellington</p>
                            <p id="contact-discription">Hospital to contact one of us.</p>
                            <p id="contact-highlits">Medical-Legal Cases</p>
                            <p id="contact-discription">We do not undertake medical legal work.</p>
                            <p id="contact-highlits">Documents to bring</p>
                            <p id="contact-discription"> 
                                A letter from your General Practitioner would be helpful but is not essential. 
                                It is useful to bring prescription sheets, old letters and any CDs of 
                                investigations such as angiograms that you may have had.
                            </p>
                            <p id="contact-highlits">Feedback</p>
                            <p id="contact-discription">
                                As a practice we are always striving to improve the services we provide. 
                                We therefore welcome feedback. Please use the following <font color=" color: #c32427">link</font> to leave a 
                                review <font color=" color: #c32427">(Google Review – Instructions)</font> or if you feel more you have feedback 
                                which requires a formal response, please write to:
                            </p>
                            <p id="contact-discription">
                                The Practice Manager, London Cardiovascular Clinic, 66 Harley Street. London, W1G 7HD. 
                                Or email 
                                <p id="contact-highlits">info@londoncardiovascularclinic.co.uk</p>
                                <p id="contact-highlits">Fair processing and privacy statement</p>
                                <p id="contact-discription">
                                    Click <font color=" color: #c32427">Fair processing and privacy statement</font> to download a copy of the London 
                                    Cardiovascular Clinics approach to collecting, processing and sharing your data</p>
                            </p>
                        </div>
                    </div>

                </div>
                <Footer/>
            </div>
        )
    }
}

