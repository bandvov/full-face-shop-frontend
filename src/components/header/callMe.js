import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CallMe() {
  return (
    <div className="flex gap-3" style={{ border: "1px solid red" }}>
        <Link style={{ display: "flex" }} href="mailto:123414">
          <Image
            className="mr-2"
            width={24}
            height={24}
            alt="phone call"
            src={"/phone-call.svg"}
          />
          022(03) 59-49-45
        </Link>
        <button style={{ width: "100%", color: "var(--orange)" }}>
          Call me!
        </button>
      </div>
  )
}
