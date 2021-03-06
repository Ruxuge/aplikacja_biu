export const CreateTokenProvider = () => {

    let str = localStorage.getItem('REACT_TOKEN_AUTH');

    let _token: { accessToken: string, refreshToken: string } =
        JSON.parse(str) || '' || null;

    const getExpirationDate = (jwtToken?): number | null => {
        if (!jwtToken) {
            return null;
        }

        const jwt = JSON.parse(atob(jwtToken.split('.')[1]));

        return jwt && jwt.exp && jwt.exp * 1000 || null;
    };

    const isExpired = (exp?) => {
        if (!exp) {
            return false;
        }

        return Date.now() > exp;
    };

    const getToken = async () => {
        if (!_token) {
            return null;
        }

        if (isExpired(getExpirationDate(_token.accessToken))) {
            const updatedToken = await fetch('/update-token', {
                method: 'POST',
                body: _token.refreshToken
            })
                .then(r => r.json());

            setToken(updatedToken);
        }

        return _token && _token.accessToken;
    };

    const isLoggedIn = () => {
        return !!_token;
    };

    let observers: Array<(isLogged) => void> = [];

    const subscribe = (observer: (isLogged) => void) => {
        observers.push(observer);
    };

    const unsubscribe = (observer: (isLogged) => void) => {
        observers = observers.filter(_observer => _observer !== observer);
    };

    const notify = () => {
        const isLogged = isLoggedIn();
        observers.forEach(observer => observer(isLogged));
    };

    const setToken = (token) => {
        if (token) {
            localStorage.setItem('REACT_TOKEN_AUTH', JSON.stringify(token));
        } else {
            localStorage.removeItem('REACT_TOKEN_AUTH');
        }
        _token = token;
        notify();
    };

    return {
        getToken,
        isLoggedIn,
        setToken,
        subscribe,
        unsubscribe,
    };

};
