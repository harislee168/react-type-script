
type PersonListProps = {
  name: string[]
}

export const PersonList = (props: PersonListProps) => {
  return (
    <ul>
      {
        props.name.map(na => <li key={na}>{na}</li>)
      }
    </ul>

  )
}
