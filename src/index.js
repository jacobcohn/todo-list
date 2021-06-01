import {logic} from './logic'
import {dom} from './dom'
import {events} from './events'

const main = (() => {
    const initiate = () => {
        logic.initiate();
        dom.initiate();
        events.initiate();
    };

    return {initiate};
})();

main.initiate();