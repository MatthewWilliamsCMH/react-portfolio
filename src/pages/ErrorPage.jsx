import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <p>An error has occurred. Please click the ⬅︎ button in your browser.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
