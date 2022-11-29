import React from 'react'

function Confirm({ formData, setFormData }) {
    return (
        <div>
            {formData.country}
            {formData.firstname}
        </div>
    )
}

export default Confirm;