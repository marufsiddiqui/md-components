
import React from 'react'
import {Motion, spring} from 'react-motion'

export const Divider = 'DIVIDER'

/**
 * Menu component
 */
export function Menu ({items, children, visible, onClick, transformX, transformY}) {
  var hasIcon = false
  for (let i = 0; i < items.length; i++) {
    var item = items[i]
    if (item.icon) {
      hasIcon = true
      break
    }
  }

  return (
    <div className='Menu'>
      {children}
      <Motion style={{val: spring(visible ? 1 : 0)}}>
        {style => {
          if (!visible) { return <span /> }
          return (
            <ul className='Menu-list' style={{
              top: transformY === 'top' ? 0 : null,
              bottom: transformY === 'bottom' ? 0 : null,
              left: transformX === 'left' ? 0 : null,
              right: transformX === 'right' ? 0 : null,
              transformOrigin: `${transformX} ${transformY}`,
              transform: `scale(${style.val})`
            }}>
              {items.map((item, index) => {
                if (item === Divider) {
                  return <li key={index} className='Menu-divider' />
                }
                return (
                  <li key={index} className='Menu-list-item' style={{opacity: style.val}}>
                    <a href='#' className='Menu-list-item-link' onClick={e => {
                      e.preventDefault()
                      onClick(item)
                    }}>
                      {hasIcon &&
                        <div className='Menu-icon'>
                          {item.icon}
                        </div>
                      }
                      {item.content || item}
                    </a>
                  </li>
                )
              })}
            </ul>
          )
        }}
      </Motion>
    </div>
  )
}

/**
 * Property types
 */
Menu.propTypes = {
  items: React.PropTypes.array,
  onClick: React.PropTypes.func.isRequired,
  visible: React.PropTypes.bool
}

/**
 * Default properties
 */
Menu.defaultProps = {
  items: ['One', 'Two'],
  visible: false
}
