'use strict'

import React from 'react';

class SurveyTwo extends React.Component {

    constructor ( props ) {
        super(props);

        this.state = {
            success: false,
            showSurveyTwo: false,
            showSurveyThree: false  
        }
        
        this.handleAnimation = this.handleAnimation.bind(this);
        this.handleAnimationEnded = this.handleAnimationEnded.bind(this);
        this.handleOnClickSubmit = this.handleOnClickSubmit.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
    } 
    
    /******************************************************************
    *    Function: handleAnimation                                     *
    *    Arguments: callback                                           *
    *    Return: Animation selected for spacific form by class name    *
    *    Main purpose: Control behaiver of Animation by using build in *
    *    callback funcion of animation library                         *
    *    PLEASE RUN: yarn add animate.css to add in you package if is  *
    *    not in your package.json                                      *
    ********************************************************************/
    handleAnimation (callback) {
        let animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('.card').addClass('animated fadeOutDown').one(animationEnd, function() {
            $('.card').removeClass('animated fadeOutDown ');
             callback(true);

             $('.card').addClass('animated fadeInLeft').one(animationEnd, function() {
                $('.card').removeClass('animated fadeInLeft ');
               
            });
  
        });
    }

     /******************************************************************
    *    Function: handleAnimationEnded                                 *
    *    Arguments: Boolean                                             *
    *    Return: Props object response after animation finishes         *
    *    Main purpose: Manage callback function and send  arguments     *
    *    props response to main render file                             *
    ********************************************************************/
    handleAnimationEnded ( result ) {
        
        if( result ){
            this.props.handleOnChangeSurvey(this.state);
        }
    }
   
     /******************************************************************
    *    Function: handleOnClickSubmit                                  *
    *    Arguments: event                                               *
    *    Return: http response by submiting data to server site         *
    *    Main purpose: Manage the display of new content with form, the *
    *    cleaning and unalocating data variables, and return a http     *
    *    response by submiting data to server site                      *
    ********************************************************************/
    handleOnClickSubmit ( event ) {
        event.preventDefault();
        
        let content = { success: true };
        $.ajax({
            type: 'POST',
            url: '/api/survey',
            data: JSON.stringify(content),
            contentType: "application/json; charset=utf-8",
            traditional: true,
            success: this.handleResponse,
            error: this.handleResponse
        }); 
    }

    /******************************************************************
    *    Function: handleResponse                                       *
    *    Arguments: http response                                       *
    *    Return: http response by submiting data to server site         *
    *    Main purpose: Manage the state variables dynamicaly and ------ *
    *    actionate Animation function with callback                     *
    ********************************************************************/
    handleResponse ( response ) {
       
        if( response ){
            this.setState({
                success: response.success,
                showSurveyThree: true
            });
            this.handleAnimation(this.handleAnimationEnded);
        } 
       
     }

    render() {
        return(
            <div>

                <div className="card box">
                    <div className="card-header">
                        <center>Please play with Survey</center>
                    </div>
                    <div className="card-block">
                        <center>
                            <h4 className="card-title">Special title treatment</h4>
                            <div className='img-display'></div>
                        </center>
                        
                        <form className='form-container'>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" name="email" aria-describedby="emailHelp"  placeholder='Email' />
                                <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">Name</label>
                                <input type="text" className="form-control" name="username" aria-describedby="emailHelp"  placeholder='Name' />
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" name='female' />
                                    Female
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" name='female' />
                                    Male
                                </label>
                            </div>
                        </form>
                        
                        <div className='btn-container'>
                            <center>
                                <a href="#" className="btn btn-primary" onClick={ (event) => this.handleOnClickSubmit( event ) }>Submit</a>
                            </center>
                        </div>
                        
                    </div>
                </div>

            </div>
        )
    }

}

export default SurveyTwo;