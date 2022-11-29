import React from "react";
import { Navbar } from './Component';
import { MemoryRouter } from "react-router-dom";

export default {
    title: 'Component/Navbar',
    component: Navbar,
    decorators: [
        (Navbar) => (
          <MemoryRouter>
            <Navbar />
          </MemoryRouter>
        )
      ],
}

const Template = (args) => <Navbar {...args} />

export const Nav = Template.bind({});
Nav.args = {
    label: 'Navbar',
    placeholder: 'Enter some data'
}