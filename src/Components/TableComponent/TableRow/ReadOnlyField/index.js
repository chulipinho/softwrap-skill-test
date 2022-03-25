import React from 'react';

export const ReadOnlyField = ({children, bgColor}) => {
  return (
    <td className={`px-5 py-5 border-b border-gray-200 ${bgColor} text-sm`}>
    <p className="text-gray-900 whitespace-no-wrap">
        {children}
    </p>
</td>
  )
}
