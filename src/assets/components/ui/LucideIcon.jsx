import React from 'react'
import PropTypes from 'prop-types'
import * as Icons from 'lucide-react'

/**
 * LucideIcon
 * Props:
 * - name: string (icon component name from lucide-react, e.g. 'MapPin', 'Clock')
 * - size: number
 * - className: string (tailwind classes for color/other)
 */
const LucideIcon = ({ name, size = 20, className = '', strokeWidth = 2, ...props }) => {
  const Icon = Icons[name] || Icons.HelpCircle
  return <Icon size={size} strokeWidth={strokeWidth} className={className} {...props} />
}

LucideIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  strokeWidth: PropTypes.number,
}

export default LucideIcon
