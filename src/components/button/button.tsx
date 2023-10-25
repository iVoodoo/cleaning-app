import cn from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'

import styles from './button.module.scss'

type LengthType = 'long' | 'short'

type ButtonProps = {
  link?: string
  length: LengthType
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({ link, length, ...props }) => {
  return (
    <div>
      {link ? (
        <Link to={link}>
          <button
            {...props}
            className={cn(styles.button, {
              [styles.button_long]: length === 'long',
              [styles.button_short]: length === 'short'
            })}
          />
        </Link>
      ) : (
        <button
          {...props}
          className={cn(styles.button, {
            [styles.button_long]: length === 'long',
            [styles.button_short]: length === 'short'
          })}
        />
      )}
    </div>
  )
}
