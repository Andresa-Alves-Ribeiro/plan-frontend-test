import React from 'react'

import {
  StyledDialog,
  StyledMessageBox,
  StyledMessageText,
  StyledCancelButton,
  StyledConfirmButton
} from '@/styles/muiStyles'
import { DialogTitle, DialogContent, DialogActions } from '@mui/material'


interface ConfirmDialogProps {
  open: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  message: string
}

export const ConfirmDialog = ({
  open,
  onClose,
  onConfirm,
  title,
  message
}: ConfirmDialogProps) => (
  <StyledDialog
    open={open}
    onClose={onClose}
    aria-labelledby="confirm-dialog-title"
  >
    <DialogTitle id="confirm-dialog-title">
      {title}
    </DialogTitle>
    <DialogContent>
      <StyledMessageBox>
        <StyledMessageText>
          {message}
        </StyledMessageText>
      </StyledMessageBox>
    </DialogContent>
    <DialogActions>
      <StyledCancelButton
        onClick={onClose}
        variant="outlined"
      >
        Cancelar
      </StyledCancelButton>
      <StyledConfirmButton
        onClick={onConfirm}
        variant="contained"
      >
        Confirmar
      </StyledConfirmButton>
    </DialogActions>
  </StyledDialog>
)
