'use strict'
import React from 'react';

/******************************************************************                                    *
*    Main purpose: Enums const to questionaries                   *
 *******************************************************************/
const QuestionaryOne = {
    queston1: 'Email address',
    question2: 'Password',
    question3: 'Do you like to check fackebook',
    question4: 'Do you like to play soccer',
    question5: 'What kind of food do you like to eat'          
};

const QuestionaryTwo = {
    queston1: 'Email address to verify',
    question2: 'Password you want to keep',
    question3: 'Do you like peets',
    question4: 'Do you have transportation',
    question5: 'Are you heavy drinker'          
};
class SurveyComponent extends React.Component {

    constructor( props ) {
        super(props);

        this.state = {
            email:'',
            password:'',
            questOne:'',
            questTwo:'',
            questThree:'',
            questFour: false,
            questFive: false,
            questSix:   false,
            questSeven: false,
            questionary:{
                Question1: QuestionaryOne.queston1,
                Question2: QuestionaryOne.question2,
                Questino3: QuestionaryOne.question3,
                Question4: QuestionaryOne.question4,
                Question5: QuestionaryOne.question5
            }
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleAnimation = this.handleAnimation.bind(this);
        this.handleSubmitionOnClick = this.handleSubmitionOnClick.bind(this);
        this.handleDinamycQuestionary = this.handleDinamycQuestionary.bind(this);
    }
   
    /******************************************************************
    *    Function: handleChange                                       *
    *    Arguments: event                                             *
    *    Return: Current status of propeties elements                 *
    *    Main purpose: Upadte starus of elements in  real time        *
    *******************************************************************/
    handleChange ( event ) { console.log(event.target.value);
       switch( event.target.name ) {
            case 'email':
                this.setState({ email: event.target.value });
            break;
            case 'password':
                this.setState({ password: event.target.value });
            break;
            case 'questOne':
                this.setState({ questOne: event.target.value });
            break;
            case 'questTwo':
                this.setState({ questTwo: event.target.value });
            break;
            case 'questThree':
                this.setState({ questThree: event.target.value });
            break;
            case 'questFour':
                this.setState({ questFour: !this.state.questFour });
            break;
            case 'questFive':
                this.setState({ questFive: !this.state.questFive });
            break;
            case 'questSix':
                this.setState({ questSix: !this.state.questSix });
            break;
            case 'questSeven':
                this.setState({ questSeven: !this.state.questSeven });
            break;
       }
    }

    /******************************************************************
    *    Function: handleAnimation                                     *
    *    Arguments: ()                                                 *
    *    Return: Animation selected to spacific form by class name     *
    *    Main purpose: Control behaiver of Animation by using build in *
    *    callback funcion of animation library                         *
    *    PLEASE RUN: yarn add animate.css to add in you package if is  *
    *    not in your package.json                                      *
    ********************************************************************/
    handleAnimation () {

        /****************************************************************************************
         * DESCRIPTION : Execution of callback function to delete animation class after is done *
         * with animated div, check that is used two different animations options and for that  *
         * reason is used nested function to delete both animation classes                      *            *
         ****************************************************************************************/
         
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('.card').addClass('animated fadeOutDown').one(animationEnd, function() {
            $('.card').removeClass('animated fadeOutDown ');
            
            // Nested function
            $('.card').addClass('animated fadeInRight').one(animationEnd, function() {
                $('.card').removeClass('animated fadeInRight ');

            });

        });
         
    }
     /******************************************************************
    *    Function: handleSubmitionOnClick                               *
    *    Arguments: event                                               *
    *    Return: http response by submiting data to server site         *
    *    Main purpose: Manage the display of new content with form, the *
    *    cleaning and unalocating data to variables, and return a http  *
    *    response by submiting data to server site                      *
    ********************************************************************/
    handleSubmitionOnClick ( event ) {
        event.preventDefault();

        /** 
         * DESCRIPTION: Calling animation function and dynamic questionary
         * repopulating form.
        */
        this.handleAnimation();

        // handle new question 
        this.handleDinamycQuestionary();

        /**
         * Here place http function to send the data
         */
        
    }
     /*******************************************************************
    *    Function: handleDinamycQuestionary                              *
    *    Arguments: ()                                                   *
    *    Return: Repopulation of form with different Questionary         *
    *    Main purpose: Managing new questionary for form secound display *
    *********************************************************************/
    handleDinamycQuestionary () {
        this.setState({
            email:'',
            password:'',
            questOne:'',
            questTwo:'',
            questThree:'',
            questFour: false,
            questFive: false,
            questSix:   false,
            questSeven: false,
            questionary:{
                Question1: QuestionaryTwo.queston1,
                Question2: QuestionaryTwo.question2,
                Questino3: QuestionaryTwo.question3,
                Question4: QuestionaryTwo.question4,
                Question5: QuestionaryTwo.question5
            }
        });
    }
    
    render() {
        return(
            <div className='container'>
                <div className='card'>
                    <center>
                        <h3 className='card-header'>
                            Please submit surevey form
                        </h3>
                    </center>
                    <form className='card-block'>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">{this.state.questionary.Question1}</label>
                            <input type="email" className="form-control" name="email" aria-describedby="emailHelp" value={this.state.email} placeholder={this.state.questionary.Question1} onChange={this.handleChange}/>
                            <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">{this.state.questionary.Question2}</label>
                            <input type="password" className="form-control" name="password" value={this.state.password} placeholder={this.state.questionary.Question2} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleSelect1">{this.state.questionary.Questino3}</label>
                            <select name='questOne' value={this.state.questOne} className="form-control" onChange={this.handleChange}>
                            <option >Yes</option>
                            <option >No</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleSelect1">{this.state.questionary.Question4}</label>
                            <select name='questTwo' value={this.state.questTwo} className="form-control" onChange={this.handleChange}>
                            <option >Yes</option>
                            <option >No</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleSelect1">{this.state.questionary.Question5}</label>
                            <select name='questThree' value={this.state.questThree} className="form-control" onChange={this.handleChange}>
                            <option >Yes</option>
                            <option >No</option>
                            </select>
                        </div>
                        
                        <fieldset className="form-group">
                            <legend>Radio & Check box buttons</legend>
                            <div className="form-check">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="questFour" value={this.state.questFour} onChange={this.handleChange} />
                                {this.state.questionary.Questino3}
                            </label>
                            </div>
                            <div className="form-check">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="questFive"  onChange={this.handleChange}/>
                                {this.state.questionary.Question4}
                            </label>
                            </div>
                        </fieldset>
                        <div className="form-check">
                            <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" name='questSix' checked={this.state.questSix} onChange={this.handleChange}/>
                            {this.state.questionary.Question5}
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" name='questSeven' checked={this.state.questSeven} onChange={this.handleChange}/>
                            {this.state.questionary.Question4}
                            </label>
                        </div>
                        <center><button className="btn btn-primary" onClick={this.handleSubmitionOnClick}>Submit</button></center>
                    </form>
                    
                </div>    
            </div>
        )
    }
}
export default SurveyComponent;