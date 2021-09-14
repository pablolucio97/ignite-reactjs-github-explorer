export default function RepositoryItem({repositoryInfo}) {
  return (
    <li>
      <h1>{repositoryInfo.name.toUpperCase()}</h1>
      <p>{repositoryInfo.description}</p>
      <a href={repositoryInfo.url}>{repositoryInfo.url}</a>
    </li>
  );
}
