import { Dialog } from '@material-ui/core'
import React from 'react'
import { useLocalContex } from '../../context/context'
import "./style.css";
export const CreateClass = () => {
  const { createClassDialog, setCreateClassDialog } = useLocalContex()
  return (
    <>
      {createClassDialog &&
        < div >
          <Dialog
            onClose={() => setCreateClassDialog(false)}
            aria-labelledby="customized-dialog-title"
            open={createClassDialog}
          >
           <div className="class__title">
              Using Classroom at a school with students?
            </div>
            <DialogContent className="class__content">
               <p classname="class__text">
                <p>If so, your school must sign for a fee</p>
                <a href="/help" className="class__link">
                  G Suite for Education
                </a>
              account before you can use Classroom
                <a href="/learn" className="class__link2">
                  Learn More.
                </a>
              </p>
               <p>
                G Suite for Education lets schools decide which Google services
                their students can use, and provides additional
                <a href="/privacy" className="class__link2 class__link">
                  privacy and security
                </a>
                protections that are important in a school setting. Students
                cannot use Google Classroom at a school with personal accounts.
              </p>
             </DialogContent>
          </Dialog>
        </div >
      }
    </>
  )
}

export default CreateClass;
