
type GreetProps = {
  name: string,
  messageCount?: number,
  isLoggedIn :boolean
}

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props
  return (
    <div>{props.isLoggedIn? `Hello: ${props.name}! Number of message is ${props.messageCount}`  : `Welcome Guest`} </div>
  )
}

export default Greet
