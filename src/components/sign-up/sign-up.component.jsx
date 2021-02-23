import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/Custom-Button/custom-button';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component {
     
    constructor(props) {
        super(props);
        this.state = {
            displayName : '',
            email: '',
            password: '',
            confirmPassword :''
        }
    }

    handleSubmit = async event => {
        event.preventDefault() ;
        const {displayName, email, password, confirmPassword} = this.state 

        if (password !== confirmPassword ) {
            alert("password do not match");
            return;
        }

        try {

            const {user} = await auth.createUserWithEmailAndPassword(email, password) //destruct the user from the result 

            
            await createUserProfileDocument(user, {displayName});

            this.setState({

                displayName : '',
            email: '',
            password: '',
            confirmPassword :''
            })
        }
        catch (error){
            console.log(error.message)
        }
    }

     handleChange = event =>{
         const { name, value }= event.target;

         this.setState({[name] : value});
     }


    render() {
        const {displayName, email, password, confirmPassword} = this.state //destruct the values from our state
        return(
            <div className='sign-up'>
            <h2> "I do not have an account"</h2>
            <span>"Sign up with email and password"</span>
            <form className='sign-up-form' onSubmit= {this.handleSubmit}>
            <FormInput
            type = 'text'
            name = 'displayName'
            value = {displayName}
            onChange = {this.handleChange}
            label = "Display Name"
            required
            />
            
            <FormInput
            type = 'email'
            name = 'email'
            value = {email}
            onChange = {this.handleChange}
            label = "email"
            required
            />
            
            
           
            <FormInput
            type = 'password '
            name = 'password'
            value = {password}
            onChange = {this.handleChange}
            label = "password of atleast of 6 characters"
            required
            />
            
            <FormInput
            type = 'password'
            name = 'confirmPassword'
            value = {confirmPassword}
            onChange = {this.handleChange}
            label = "Confirm Password"
            required
            /> 
           
            <CustomButton  type='submit'>"Sign Up" </CustomButton>
                        
            </form>


            </div>
        )
    }


}
export default SignUp;