
import React from 'react'
import './home.css'
import { GiAnimalHide } from 'react-icons/gi'
const Terms = (props) => {
    const terms = props.toggleTerms
    const termsAction = props.termsAction
    return (
        <>
            <div className={terms ? 'terms-active' : 'terms-container'}>
                <div className='terms-content'>
                    <h2>Terms & Condition</h2>

                    <p>
                        You agree to comply with any and all the guidelines, notices, operating rules and policies and instructions pertaining to the use of or access to the Platform and/or the Services, as well as any amendments to the aforementioned, issued by us, from time to time. These notices, guidelines and operating rules and policies will generally
                        be notified to you via email, push notification(s) and/or publication on the Platform or such other method of notification as may be designated by us, which you acknowledge shall be sufficient notice for the purpose of this clause. We reserve the right to revise these guidelines, notices, operating rules and policies and instructions at any time and
                        you are deemed to be aware of and bound by any changes to the foregoing upon their publication on the Platform.
                    </p>
                    <p>
                        The Policy does not affect your right to raise concerns directly with a regulator or external authority as permitted under Singapore laws. You may report any misconduct anonymously if you wish,
                        and will be protected against any form of harassment, intimidation, discrimination or retaliation for making such a report in good faith. To facilitate the evaluation and investigation into the concerns raised, the complaint should set out as much essential
                        information as possible. Where possible, the complaint should also include the contact particulars of the person making the complaint (in case of additional information is required).The complaints should be submitted to the attention of the department of Human Resources
                        of HFA-Singapore.
                    </p>
                    <p>
                        HFA-Singapore has a duty of care to protect victims from further abuse, including quickly making available a skilled “first responder” who can provide victims the care and support they need. HFA-Singapore also has a duty of care to reporters – to protect from retaliation – as well
                        as to accused parties, who have a right to an impartial investigation, confidentiality of information raised, and fair treatment.HFA-Singapore strongly disapproves of any form of retaliation against anyone who reports concerns of misconduct in good faith. Any employee who engages in retaliation – whether
                        toward a victim or a reporter of alleged misconduct – will be subject to discipline up to and including termination. Reports of retaliation will be investigated promptly in a manner intended to protect confidentiality as much as practicable, consistent with a full and fair investigation.
                    </p>
                    <p>

                    </p>




                    <p>
                        Additional terms and conditions listed on the Snap Terms & Policies page or that are otherwise made available to you may apply to specific Services. If you use those Services, then those additional terms become part of these Terms. If any of the applicable additional terms conflict with these Terms, the additional terms will
                        prevail while you are using the Services to which they apply.
                    </p>
                    <button className='close-terms' onClick={termsAction}><GiAnimalHide size="40px" /></button>
                </div>
            </div>
        </>
    )
}

export default Terms