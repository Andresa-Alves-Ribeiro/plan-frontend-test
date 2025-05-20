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
