jest.useFakeTimers()
import SignIn from "../../screens/SignIn";
import React from "react";
import renderer from "react-test-renderer";
import CheckEmail from "../../screens/CheckEmail";
import MockedNavigator from '../../navigation/MockedNavigator';

it('should render correctly', ()=>{
    let tree = renderer.create(<CheckEmail/>).toJSON()
    
    // expect(tree).toMatchSnapshot();
})