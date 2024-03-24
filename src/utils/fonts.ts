export const getTextAlign = (textAlign = 'left') => {
  const textAlignMap = {
    left: 'text-left',
    right: 'text-right',
    center: 'text-center'
  }

  return `${textAlignMap[textAlign] || ''}`
}

export const getFontSizeForHeading = (level) => {
  const fontSizeMap = {
    1: 'text-3xl',
    2: 'text-2xl',
    3: 'text-1xl',
    4: 'text-lg',
    5: 'text-base',
    6: 'text-xs'
  }

  return `${fontSizeMap[level] || ''}`
}
