import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

function useNavigation() {
  const history = useHistory();

  const goBack = useCallback(() => {
    history.goBack();
  }, [history]);

  const to = useCallback(
    (route: string) => {
      history.push(route);
    },
    [history]
  );

  return { goBack, to };
}

export default useNavigation;
