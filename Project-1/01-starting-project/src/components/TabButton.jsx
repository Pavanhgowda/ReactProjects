import React from 'react'
export default function TabButton({children,displayButton,...remainingprops}) {
  return (
    <li><button className={displayButton?"active": undefined} {...remainingprops}>{children}</button></li>
  )
}
