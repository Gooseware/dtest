'use strict';

var React = require('react');
var Select = require('react-select');
var log = require('loglevel');
var _ = require('lodash');
//var tpl = require('./hello');
//var moops = "wow";
var options = {multi:true};
var HelloView = React.createClass({
    render: function(){
        var myoptions = _.defaultsDeep({name:'documents',options:[
            {value:'Current Passport',label:'Current Passport'},
            {value:'Current Visa',label:'Current Visa'},
            {value:'Highest Qualification Transcript',label:'Highest Qualification Transcript'},
            {value:'Name Change Certificate',label:'Name Change Certificate'},
            {value:'Marriage Certificate',label:'Marriage Certificate'},
            {value:'Current COE',label:'Current COE'},
            {value:'Current OSHC',label:'Current OSHC'}
            ]}
            ,options);
        return(
            <form>
                <div className="row">
                    <div className="col-lg-1 visible-lg-block"></div>
                    <label htmlFor="fullname" className="col-xs-12 col-sm-2 col-lg-1" >Full Name</label>
                    <input type="text" id="fullname" name="fullname" className="col-xs-12 col-sm-4" />
                    <label htmlFor="preferredName" className="col-xs-12 col-sm-2 col-lg-1" >Preferred Name</label><input className="col-xs-12 col-sm-4" type="text" id="preferredName" name="preferredName"/>
                    <div className="clearfix visible-sm-block"></div>
                    <label htmlFor="dob" className="col-xs-12 col-sm-2" >Date of birth</label><input className="col-xs-12 col-sm-4" type="text" id="dob" name="dob"/>
                    <label htmlFor="citizenship" className="col-xs-12 col-sm-2" >Country of Citizenship</label><input className="col-xs-12 col-sm-4" type="text" id="citizenship" name="citizenship"/>
                    <div className="clearfix visible-sm-block"></div>
                    <div className="col-lg-1 visible-lg-block"></div>
                    <div className="label">Passport Details</div>
                    <div className="contents">
                        <label htmlFor="passportNumber" >No</label><input type="text" id="passportNumber" name="passportNumber"/>
                        <label htmlFor="passportCountry" >Country of Passport</label><input type="text" id="passportCountry" name="passportCountry"/>
                        <label htmlFor="passportIssue" >Issue</label><input type="text" id="passportIssue" name="passportIssue"/>
                        <label htmlFor="passportExpire" >Expiry</label><input type="text" id="passportExpire" name="passportExpire"/>
                        <label htmlFor="visaExpire" >Visa Expiry</label><input type="text" id="visaExpire" name="visaExpire"/>
                    </div>
                    <div className="contents">
                    <div className="label">Address in Australia</div>
                        <label htmlFor="addressAustralia" >Address in Australia</label><input type="hidden" id="addressAustralia" name="addressAustralia"/>
                        <label htmlFor="phoneAustralia" >Contact Number</label><input type="text" id="phoneAustralia" name="phoneAustralia"/>
                    </div>
                    <div className="contents">
                    <label htmlFor="addressCountry" >Address in your country</label><input type="hidden" id="addressCountry" name="addressCountry"/>
                    <label htmlFor="phoneCountry" >Contact Number</label><input type="text" id="phoneCountry" name="phoneCountry"/>
                    </div>
                    <label htmlFor="emailAddress" >Email Address</label><input type="text" id="emailAddress" name="emailAddress"/>
                    <label htmlFor="intendedCourse" >Intended Courses</label><input type="text" id="intendedCourse" name="intendedCourse"/>
                    <div className="contents">
                        <label htmlFor="nameDependent" >Name of Dependent</label><input type="text" id="nameDependent" name="nameDependent"/>
                        <label htmlFor="dependentDOB" >Date of Birth</label><input type="text" id="dependentDOB" name="dependentDOB"/>
                        <label htmlFor="includedVisa" >Included in visa application:</label><input type="checkbox" id="includedVisa" name="includedVisa"/>
                    </div>
                    <label htmlFor="USI" >USI</label><input type="text" id="USI" name="USI"/>
                    <Select {...myoptions} />
                    <label htmlFor="documents" >Documents</label><input type="text" id="documents" name="documents"/>
                    <label htmlFor="details" >Extra Details</label><textarea id="details" name="details"></textarea>
                </div>
            </form>
        );
    }

});

module.exports = HelloView;
