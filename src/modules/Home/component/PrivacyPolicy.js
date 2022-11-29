import React from 'react'
import './home.css'
import { GiAnimalHide } from 'react-icons/gi'
const PrivacyPolicy = (props) => {
    const modalState = props.toggle
    const action = props.action
    return (
        <>
            <div className={modalState ? 'modal-active' : 'modal-container'}>
                <div className='modal-content'>
                    <h2>Privacy Policy</h2>
                    <p>
                    Your privacy is very important to us. The purpose of this privacy statement is to inform you of how HFA Singapore manages the Personal Information we hold. Please take a 
                    moment to read this Data Privacy Statement so that you know and understand the purposes for which we collect, use, process and disclose your Personal Information.
                    </p>
                    <p>
                    The Personal Information which you provide to us, whether previously or from now on, will be collected, used, processed and disclosed and will continue to be collected, used,
                     processed and disclosed by us, in accordance with this Data Privacy Statement (as amended, varied, revised or restated from time to time).
                    </p>
                    <p>
                    By interacting with us, submitting information to us, or entering into an agreement with HFA-Singapore for the purposes set out hereunder, you agree and consent to HFA-Singapore collecting, 
                    using, processing, disclosing and sharing your Personal Information, and disclosing such Personal Information to each of the Permitted Recipients (as defined below) in the manner set forth in this Data Privacy Statement.
                    </p>
                    <p>
                    HFA-Singapore may from time to time update this Data Privacy Statement to ensure that this Data Privacy Statement is consistent with future developments, industry trends and/or any changes in laws, regulations, guidelines or 
                    such other applicable regulatory requirements. You agree to be bound by the prevailing terms of this Data Privacy Statement (as amended, varied, revised or restated from time to time).
                    </p>
                    <p>In this Data Privacy Statement, unless the context otherwise requires, the following terms shall have the meanings assigned to them below:</p>
                    
                    <p>“PDPA” means the Personal Data Protection Act 2012 (No. 26 of 2012) of Singapore, as amended from time to time; and</p>
                        
                    <p>“Personal Information” refers to all information relating to: (i) you or your related parties (including without limitation, your connected persons, authorized persons and beneficial owners); (ii) your dealings with HFA-Singapore (including any of 
                        their principals, members, managers, officers, directors, shareholders, employees and agents); (iii) any other information of a confidential nature; and (iv) any personal data as defined in the PDPA belonging to you or any related parties (including without limitation, your connected persons, authorized persons and beneficial owners).
                    </p>
                    <button className='close-modal' onClick={action}><GiAnimalHide size="40px"/></button>
                </div>
            </div>
            </>
    )
}

export default PrivacyPolicy;


// <>
// <div className={modalState ? 'modal-active' : 'modal-container'}>
//     <div className='modal-content'>
//         <div className='overlay'></div>
//         <h2>Modal</h2>
//         <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus placeat
//             architecto impedit est voluptatem ullam maiores, amet autem voluptates aperiam, magni quos
//             dolorum accusantium quam.
//         </p>
//         <button className='close-modal' onClick={action}><GiAnimalHide size="40px"/></button>
//     </div>
// </div>
// </>