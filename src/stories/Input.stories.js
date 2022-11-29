import React from "react";
import {Input} from './Component';

export default {
    title: 'Component/Input',
    component: Input

}

const Template = (args) => <Input {...args} />

export const Normal = Template.bind({});
Normal.args={
    id:'Enter id',
    helperText: 'Enter helperText',
    label:'Normal',
    placeholder: 'Enter some data',
    type:'text',
    name: 'Enter name',
}

