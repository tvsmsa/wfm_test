import './error-screen.css';
import { Link } from 'react-router-dom';
import { AppRoutes } from "../../app-routes";
import { ErrorCodesDesc } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getErrorCode } from '../../store/error-process/selectors';
import { useEffect } from 'react';
import { setErrorCode } from '../../store/error-process/error-process';

export type ErrorScreenProps = {
  errorStatusCode?: number;
};

export default function ErrorScreen({ errorStatusCode = -1 }: ErrorScreenProps): JSX.Element {
  const dispatch = useAppDispatch();
  const errorCode = useAppSelector(getErrorCode) ?? errorStatusCode;

  let errorTitle: string, errorDesc: string;
  if (errorCode === -1) {
    errorTitle = '';
    errorDesc = 'An error occured';
  } else {
    errorTitle = `${errorCode} `;
    errorDesc = ErrorCodesDesc[errorCode] ?? 'An error occured';
  }

  useEffect(() => () => {
    dispatch(setErrorCode(undefined));
  }, [dispatch]);

  return (
    <div className="error-screen__wrapper">
      <div className="error-screen__title">
        <h1>
          { errorTitle }
          <small>{ errorDesc }</small>
        </h1>
        <Link to={AppRoutes.Main.FullPath} className="error-screen__link">Go back to the main page</Link>
      </div>
    </div>
  );
}
