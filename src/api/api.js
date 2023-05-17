// import { ActionCreators } from '../Component/redux/actions';
class Api {
    static headers(token) {
        return {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };
    }
    static uploadHeaders(token) {
        return {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        };
    }
    static getWithToken(route, token ) {
        let header = this.headers(token);
        return this.helpieTask(route, null, header, 'GET');
    }
    static async post(route, params, header, domain) {
        let v = await this.helpieTask(route, params, {
            // Authorization: `Basic aGVscGllOmJhY2tlbmQ=`,
            'Content-Type': 'application/json',
        }, 'POST');
        console.log('---v----', v)
        return v;
    }
    static async get(route) {
        let v = await this.helpieTask(route, null, {}, 'GET');
        return v;
    }

    static postWithToken(route, params, token, domain) {
        // console.log('params ', params);
        let header = this.headers(token);
        return this.helpieTask(
            route,
            params,
            header,
            'POST',
            domain);
    }
    static upload(route, params, token, domain) {
        // console.log('params ', params);
        let header = this.uploadHeaders(token);
        return this.helpieTask(
            route,
            params,
            header,
            'POST',
            domain);
    }
    static putWithToken(route,params, token,) {
        // console.log("params",params)
        let header = this.headers(token);
        return this.helpieTask(
            route,
            params,
            header,
            'PUT'
        );
    }
    static getWithParams(route, params, token, domain) {
        return this.helpieTask(route, params, token, 'GET', domain);
        // return this.wellAcademyTask(route, null,token, 'GET');
    }
    static helpieTask(route, params, header, verb) {
        const host = 'https://dummy.restapiexample.com/api/v1/';
        // const host = 'http://192.168.1.135:4024';

        const url = `${host}${route}`;
        console.log('URL CALLLED-----', url);
        const options = { method: verb, ...(params ? { body: params } : null) };
        options.headers = header;
        // console.log(options);
        return fetch(url, options)
            .then(resp => {
                // console.log('----RESPONSE----', resp);
                const json = resp.json();
                if (resp.ok) {
                    //console.log('resp ok', resp.ok)
                    return json;
                }
                if (resp.status === 403) {
                    return { auth: 'invaild' };
                    //console.log('resp.status', resp.status)
                }else if(resp.status === 401) {
                    console.log("test");
                    // ActionCreators.logoutWithoutToken();
                }
                else if(resp.status === 404) {
                    return resp.status;
                }
                return json.then(err => {
                    // //console.log('resp.err',err)
                    throw err;

                });
            })
            .then((json) => json)
            .catch(error => error);
    }


}
export default Api;