import React from "react";
import renderer from "react-test-renderer";
import CurrentLocation from "../../screens/CurrentLocation";

let findElement = function(tree:any, Element:string)
{
    let node;
        // if(tree.children[node].props.testID == Element)
        // {
        //     return true
        // }
    if(tree.children[1].children[0].children[0].props.testID == Element)
    return true

    return undefined
}

// it('find element', () => {
//     const tree = renderer.create(<CurrentLocation />).toJSON();
//     expect(findElement(tree,'username')).toBeDefined();
//   });

it('should render correctly', ()=>{
    let tree = renderer.create(<CurrentLocation />).toJSON()
    // expect(findElement(tree,'helperText')).toBeDefined()
    expect(tree).toMatchSnapshot();
})