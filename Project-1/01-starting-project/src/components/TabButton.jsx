import React from 'react'
export default function TabButton({children,onSelect,displayButton}) {
  return (
    <li><button className={displayButton?"active": undefined} onClick={onSelect}>{children}</button></li>
  )
}
