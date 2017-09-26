'use strict'
import React from 'react';
import {render} from 'react-dom';

import Home from './components/surveyComponent.jsx';
import SurveyOne from './components/surveyOneComponent.jsx';
import SurveyTwo from './components/surveyTwoComponent.jsx';
import SurveyThree from './components/surveyThreeComponent.jsx';


class App extends React.Component {
    
    constructor ( props ) {
        super(props);

        this.state = {
            validData: true,  
            showSurveyOne: true,
            showSurveyTwo: false,
            showSurveyThree: false  
        }
        
        this.handleOnChangeSurvey = this.handleOnChangeSurvey.bind(this);
        this.handleRenderingSurveys = this.handleRenderingSurveys.bind(this);
        
    }
  
     /******************************************************************
    *    Function: handleOnChangeSurvey                                 *
    *    Arguments: Props value                                         *
    *    Return: Updated state variables                                *
    *    Main purpose: Updating state variables by props response from  *
    *    current from displayed                                         *
    ********************************************************************/
    handleOnChangeSurvey ( value ) {
       
        this.setState({
            validData: value.success,
            showSurveyOne: value.showSurveyOne,
            showSurveyTwo: value.showSurveyTwo,
            showSurveyThree: value.showSurveyThree
        });
    }

     /******************************************************************
    *    Function: handleRenderingSurveys                               *
    *    Arguments: Boolean                                             *
    *    Return: Survey form activated                                  *
    *    Main purpose: Return current form to display (Render) base on  *
    *    state variables                                                *
    ********************************************************************/
    handleRenderingSurveys () {
        switch (this.state.validData) {
            
            case this.state.showSurveyOne : 
                return(  < SurveyOne handleOnChangeSurvey={this.handleOnChangeSurvey} /> );
            break;
            case this.state.showSurveyTwo : 
                return( < SurveyTwo handleOnChangeSurvey={this.handleOnChangeSurvey} />) 
            break;
            case this.state.showSurveyThree : 
                return ( < SurveyThree handleOnChangeSurvey={this.handleOnChangeSurvey} />);
            break;
                                     
        }
    }
    
    render() {
        console.log(this.state);
        
       return this.handleRenderingSurveys();
        
    }
}

render(<App/>, document.getElementById('app'));