import React from "react"
import { connect } from "frontity"
import Link from "./Link"

const List = ({ state }) => {
  const data = state.source.get(state.router.link)

  return (
    <>
      <p>Posts existentes</p>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id]
        return (
          <Link m={3} href = {item.link}>{post.title.rendered}</Link>
            /*
          <div >
            {item.type} – {item.id} – {item.link}
          </div>*/
        )
      })}
    </>
  )
}

export default connect(List)