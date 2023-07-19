import React from "react"

type ButtonProps = {
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>, id:number) => void
}

export const Button = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={(event) => {props.clickHandler(event, 1)}}>Submit</button>
    </div>
  )
}
