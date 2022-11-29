import React from "react";
import {Footer} from "./Component";

export default {
    title: 'Component/Footer',
    component: Footer,
}

const Template = (args)=> <Footer {...args}/>

export const Foot = Template.bind({});
Foot.args = {
    backgroundColor: "Background color"
}
