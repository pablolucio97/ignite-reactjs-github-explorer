
type RepositoryProps = {
  repository?: {
    id: number;
    name: string;
    description: string;
    html_url: string;
  }
}

export default function RepositoryItem(props: RepositoryProps) {
  return (
    <li>
      <strong>{props.repository?.name}</strong>
      <p>{props.repository?.description}</p>
      <a href={ props.repository?.html_url }>{props.repository?.html_url}</a>
    </li>
  );
}
