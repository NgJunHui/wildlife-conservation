import JoinForm from "../JoinForm";
import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("Join Form", () => {

  it("Email validation to show error when invalid email entered", () => {
    render(<JoinForm />)
    expect(screen.queryByText("*Please enter a valid email format")).toBeNull()

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "invalidemailformat.com" },
    })
    expect(
      screen.queryByText("*Please enter a valid email format")
    ).toBeTruthy()
  })

  it("First name validation to show error when invalid first name entered", () => {
    render(<JoinForm />)
    expect(screen.queryByText("*Only letters, -, . and ' are allowed")).toBeNull()

    fireEvent.change(screen.getByLabelText("First Name"), {
      target: { value: "123123" },
    })
    expect(
      screen.queryByText("*Only letters, -, . and ' are allowed")
    ).toBeTruthy()
  })

  it("Last name validation to show error when invalid last name entered", () => {
    render(<JoinForm />)
    expect(screen.queryByText("*Only letters, -, . and ' are allowed")).toBeNull()

    fireEvent.change(screen.getByLabelText("Last Name"), {
      target: { value: "123123" },
    })
    expect(
      screen.queryByText("*Only letters, -, . and ' are allowed")
    ).toBeTruthy()
  })

  it("Contact number validation to show error when invalid contact number entered", () => {
    render(<JoinForm />)
    expect(screen.queryByText("*Only numbers and - are allowed")).toBeNull()

    fireEvent.change(screen.getByLabelText("Contact Number"), {
      target: { value: "abc" },
    })
    expect(
      screen.queryByText("*Only numbers and - are allowed")
    ).toBeTruthy()
  })

  it("Error popup to be displayed when input fields are empty", () => {
    render(<JoinForm />)
    expect(
      screen.queryByText("Error! Please check all required fields.")
    ).toBeNull()

    fireEvent.click(screen.getByText("Next"))
    expect(
      screen.queryByText("Error! Please check all required fields.")
    ).toBeTruthy()
  })

  it("Expect form to be submitted when all input fields are valid", () => {
    render(<JoinForm />)
    // First Name
    fireEvent.change(screen.getByLabelText("First Name"), {
      target: { value: "Jun" },
    })
    // Last Name
    fireEvent.change(screen.getByLabelText("Last Name"), {
      target: { value: "Jordan" },
    })
    // Email
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "validEmail@gmail.com" },
    })
    // Age Group
    userEvent.click(getByRole(screen.getByTestId("agegroup-select"), "button"))
    userEvent.click(screen.getByText("7 to 14 years"))
    // Contact Number
    fireEvent.change(screen.getByLabelText("Contact Number"), {
      target: { value: "12345678" },
    })
    // Employment Type
    userEvent.click(
      getByRole(screen.getByTestId("employment-select"), "button")
    )
    userEvent.click(screen.getByText("Full-time"))
    // Nationality
    userEvent.click(screen.getByLabelText("Nationality"))
    userEvent.click(screen.getByText("United States (US) +1"))

    fireEvent.click(screen.getByText("Next"))
    expect(
      screen.queryByText("Error! Please check all required fields.")
    ).toBeNull()
    expect(
        screen.queryByText("Thank you, Jun")
    ).toBeTruthy()
    expect(
      screen.queryByText("Your form was successfully submitted!")
    ).toBeTruthy()
  })
})
