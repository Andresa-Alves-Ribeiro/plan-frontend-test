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
  }
}

export const languageSelectStyles = {
  PaperProps: {
    sx: {
      backgroundColor: '#F58220',
      '& .MuiMenuItem-root': {
        color: 'white',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
      },
      '&::-webkit-scrollbar': {
        width: '8px',
      },
      '&::-webkit-scrollbar-track': {
        background: '#F58220',
      },
      '&::-webkit-scrollbar-thumb': {
        background: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '4px',
      },
      '&::-webkit-scrollbar-button': {
        display: 'block',
        height: '8px',
        background: '#F58220',
      }
    },
  },
  sx: {
    cursor: 'pointer',
    '& .MuiSelect-select': {
      cursor: 'pointer'
    }
  }
}
