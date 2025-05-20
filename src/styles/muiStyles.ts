import { Dialog, Button, Typography, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const outlinedInputStyles = {
  borderRadius: '9999px',
  '& .MuiOutlinedInput-notchedOutline': {
    borderWidth: '3px',
    borderColor: '#FFFFFF',
  },
  '&:hover': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#FFFFFF',
    },
  },
  '&.Mui-focused': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#FFFFFF',
    },
  },
  '& .MuiInputBase-input::placeholder': {
    color: 'rgba(0, 0, 0, 0.7)',
    opacity: 1,
  },
  '& .MuiSelect-select': {
    color: '#FFFFFF',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    '&:focus': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    }
  }
}

export const languageSelectStyles = {
  PaperProps: {
    sx: {
      backgroundColor: '#FFFFFF',
      zIndex: 1500,
      '& .MuiMenuItem-root': {
        color: '#F58220',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: 'rgba(245, 130, 32, 0.1)',
        },
      },
      '&::-webkit-scrollbar': {
        width: '8px',
      },
      '&::-webkit-scrollbar-track': {
        background: '#FFFFFF',
      },
      '&::-webkit-scrollbar-thumb': {
        background: 'rgba(245, 130, 32, 0.5)',
        borderRadius: '4px',
      },
      '&::-webkit-scrollbar-button': {
        display: 'block',
        height: '8px',
        background: '#FFFFFF',
      }
    },
  },
  sx: {
    cursor: 'pointer',
    '& .MuiSelect-select': {
      cursor: 'pointer',
      color: '#FFFFFF',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      '&:focus': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      }
    }
  }
}

export const StyledDialog = styled(Dialog)({
  '& .MuiDialog-paper': {
    backgroundColor: '#fcac50',
    color: '#FFFFFF',
    borderRadius: '20px',
    padding: '12px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    width: '100%',
    fontFamily: 'Exo',
    '& .MuiDialogTitle-root': {
      color: '#FFFFFF',
      fontWeight: 700,
      fontSize: '1.5rem',
      padding: '24px 24px 8px',
      textAlign: 'center',
      letterSpacing: '-0.5px',
      fontFamily: 'Exo'
    },
    '& .MuiDialogContent-root': {
      padding: '16px 24px'
    },
    '& .MuiDialogActions-root': {
      padding: '16px 24px 24px',
      gap: '16px',
      justifyContent: 'center'
    }
  }
})

export const StyledMessageBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px'
})

export const StyledMessageText = styled(Typography)({
  color: '#FFFFFF',
  fontSize: '1.1rem',
  lineHeight: 1.6,
  textAlign: 'center',
  opacity: 0.9,
  fontFamily: 'Exo'
})

export const StyledCancelButton = styled(Button)({
  color: '#FFFFFF',
  borderColor: '#FFFFFF',
  borderRadius: '12px',
  padding: '10px 32px',
  fontSize: '1rem',
  textTransform: 'none',
  fontWeight: 600,
  minWidth: '120px',
  transition: 'all 0.2s ease-in-out',
  fontFamily: 'Exo',
  '&:hover': {
    borderColor: '#FFFFFF',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    transform: 'translateY(-1px)'
  }
})

export const StyledConfirmButton = styled(Button)({
  backgroundColor: '#FFFFFF',
  color: '#fcac50',
  borderRadius: '12px',
  padding: '10px 32px',
  fontSize: '1rem',
  textTransform: 'none',
  fontWeight: 600,
  minWidth: '120px',
  transition: 'all 0.2s ease-in-out',
  fontFamily: 'Exo',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
  }
})
