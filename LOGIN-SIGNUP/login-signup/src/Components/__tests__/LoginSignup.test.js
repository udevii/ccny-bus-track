import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { LoginSignup } from '../LoginSignup/LoginSignup';

describe('LoginSignup Component', () => {
    afterEach(cleanup);

    test('Name input should not be present when action is set to Login', async () => {
        render(<LoginSignup />);
        
        // the action is "Sign Up", so the "Name" input should be present.
        let nameInput = screen.queryByPlaceholderText('Name');
        expect(nameInput).toBeInTheDocument();

        // Find the Login button and click it to change the action to "Login"
        const loginButton = screen.getByText('Login');
        fireEvent.click(loginButton);

        // After setting action to "Login", the "Name" input should not be present.
        let nameInput2 = screen.queryByPlaceholderText('Name');
        expect(nameInput2).not.toBeInTheDocument();
    });

    test('toggles form state between Login and Sign Up', () => {
        render(<LoginSignup />);
        const signUpButton = screen.getByText('Sign Up');
        const loginButton = screen.getByText('Login');
        
        expect(screen.getByPlaceholderText('Email ID')).toBeInTheDocument();
        
        fireEvent.click(loginButton);
        expect(screen.queryByPlaceholderText('Name')).not.toBeInTheDocument();
        
        fireEvent.click(signUpButton);
        expect(screen.getByPlaceholderText('Email ID')).toBeInTheDocument();
    });


    test('Email and Password input fields are present in both Login and Sign Up forms', () => {
        render(<LoginSignup />);
        
        expect(screen.getByPlaceholderText('Email ID')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
        
        fireEvent.click(screen.getByText('Login'));
        expect(screen.getByPlaceholderText('Email ID')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    });
});
