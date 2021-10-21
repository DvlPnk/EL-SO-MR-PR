import { Dialog } from '@material-ui/core'
import React from 'react'
import { useLocalContex } from '../../context/context'
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
            <h1>Creating Class</h1>
          </Dialog>
        </div >
      }
    </>
  )
}

export default CreateClass;