import React, { forwardRef } from 'react'
import styled from 'styled-components'
import NextLink from 'next/link'

// react-router-dom LinkProps types
interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: any
  replace?: boolean
  innerRef?: React.Ref<HTMLAnchorElement>
  // next
  prefetch?: boolean
}

const A = styled.a``

/**
 * temporary solution for migrating React Router to Next.js Link
 */
const NextLinkFromReactRouter = forwardRef<any, LinkProps>(
  ({ to, replace, children, prefetch, onClick, ...props }, ref) => (
    <NextLink href={to as string} replace={replace} passHref prefetch={prefetch}>
      <A ref={ref} {...props}  onClick={onClick}>
        {children}
      </A>
    </NextLink>
  ),
)

export default NextLinkFromReactRouter
