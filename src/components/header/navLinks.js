import React from 'react'
import CommonLink from '../link';
import { HEADER_URLS } from '@/configs/urls';

export default function NavLinks() {
  return (
    <ul
        className="flex border"
        style={{
          border: "1px solid red",
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        {HEADER_URLS.map(({ url, name }) => {
          return (
            <li aria-current="page" key={url}>
             <CommonLink href={url}>{name}</CommonLink>
            </li>
          );
        })}
        <li>More</li>
      </ul>
  )
}
