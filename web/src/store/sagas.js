import { createRequestInstance, watchRequests } from 'redux-saga-requests';
import { createDriver } from 'redux-saga-requests-axios';
import axios from 'axios';

export default function* () {
    yield createRequestInstance({ driver: createDriver(axios) });
    yield watchRequests();
}