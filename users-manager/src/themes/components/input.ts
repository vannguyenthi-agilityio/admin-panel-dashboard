const size = {
  default: {
    fontSize: '14px',
    h: 12,
    borderRadius: '8px',
    px: '12px',
    fontWeight: 'normal',
    lineHeight: '17px'
  }
};

export const Input = {
  sizes: {
    default: {
      field: size.default
    }
  },
  variants: {
    default: {
      field: {
        bg: 'transparent',
        borderColor: 'default.grey.200',
        border: '1px solid',
        color: 'default.grey.600',
        _hover: {
          borderColor: 'secondary.100'
        },
        _focus: {
          borderColor: 'secondary.100',
          _placeholder: {
            color: 'default.placeholder'
          }
        }
      }
    },
    outline: {
      field: {
        borderColor: 'primary.400',
        _hover: {
          borderColor: 'default.dark'
        }
      }
    }
  },
  baseStyle: {
    field: {
      borderColor: 'default.grey.200',
      color: 'default.grey.600',
      _hover: {
        borderColor: 'secondary.100'
      },
      _placeholder: {
        color: 'default.light'
      }
    }
  }
};
